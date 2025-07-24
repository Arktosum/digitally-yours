"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uploadDir = path_1.default.join(__dirname, '../uploads');
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir, { recursive: true });
}
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the backend</h1>");
});
// Multer config: save files in /uploads, filter by type
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => cb(null, path_1.default.join(__dirname, '../uploads')),
    filename: (_req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        const base = path_1.default.basename(file.originalname, ext);
        const timestamp = Date.now();
        cb(null, `${base}-${timestamp}${ext}`);
    }
});
const fileFilter = (_req, file, cb) => {
    const allowed = ['.pdf', '.pptx', '.docx'];
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
};
const upload = (0, multer_1.default)({ storage, fileFilter });
function appendMetadata(entry) {
    const metaPath = path_1.default.join(__dirname, '../uploads/metadata.json');
    let data = { uploads: [] };
    if (fs_1.default.existsSync(metaPath)) {
        try {
            data = JSON.parse(fs_1.default.readFileSync(metaPath, 'utf-8'));
        }
        catch (_a) {
            data = { uploads: [] };
        }
    }
    data.uploads.push(entry);
    fs_1.default.writeFileSync(metaPath, JSON.stringify(data, null, 2), 'utf-8');
}
app.post('/mentor/upload', upload.array('documents'), (req, res) => {
    const title = req.body.title;
    const files = req.files;
    if (!title || files.length === 0) {
        return res.status(400).json({ error: 'Title and files are required' });
    }
    files.forEach(file => {
        const entry = {
            title,
            type: 'learner',
            filename: file.filename,
            original: file.originalname,
            uploadedAt: new Date().toISOString()
        };
        appendMetadata(entry);
    });
    res.json({ message: 'Uploaded and metadata saved' });
});
// Error handler
app.use((err, req, res, next) => {
    if (err instanceof multer_1.default.MulterError) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Unexpected error' });
});
app.get('/mentor/uploads', (req, res) => {
    const metaPath = path_1.default.join(__dirname, '../uploads/metadata.json');
    if (!fs_1.default.existsSync(metaPath)) {
        return res.json({ uploads: [] });
    }
    let data;
    try {
        data = JSON.parse(fs_1.default.readFileSync(metaPath, 'utf-8'));
    }
    catch (err) {
        console.error('Invalid metadata.json', err);
        return res.status(500).json({ error: 'Failed to read metadata' });
    }
    console.log(data.uploads);
    const enriched = data.uploads.map((entry) => (Object.assign(Object.assign({}, entry), { url: `${req.protocol}://${req.get('host')}/uploads/${encodeURIComponent(entry.filename)}` })));
    res.json({ uploads: enriched });
});
exports.default = app;
