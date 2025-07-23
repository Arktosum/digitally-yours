import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the backend</h1>");
})
// Multer config: save files in /uploads, filter by type
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, path.join(__dirname, '../uploads')),
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname);
        const base = path.basename(file.originalname, ext);
        const timestamp = Date.now();
        cb(null, `${base}-${timestamp}${ext}`);
    }
});
const fileFilter = (_req: express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowed = ['.pdf','.pptx', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
};
const upload = multer({ storage, fileFilter });
export interface MetadataEntry {
    title: string;
    filename: string;
    original: string;
    uploadedAt: string; // ISO timestamp
}

export interface MetadataFile {
    uploads: MetadataEntry[];
}
function appendMetadata(entry: MetadataEntry) {
    const metaPath = path.join(__dirname, '../uploads/metadata.json');
    let data: MetadataFile = { uploads: [] };

    if (fs.existsSync(metaPath)) {
        try {
            data = JSON.parse(fs.readFileSync(metaPath, 'utf-8')) as MetadataFile;
        } catch {
            data = { uploads: [] };
        }
    }

    data.uploads.push(entry);

    fs.writeFileSync(metaPath, JSON.stringify(data, null, 2), 'utf-8');
}

app.post('/mentor/upload', upload.array('documents'), (req, res) => {
    const title = req.body.title as string;
    const files = req.files as Express.Multer.File[];

    if (!title || files.length === 0) {
        return res.status(400).json({ error: 'Title and files are required' });
    }

    files.forEach(file => {
        const entry: MetadataEntry = {
            title,
            filename: file.filename,
            original: file.originalname,
            uploadedAt: new Date().toISOString()
        };
        appendMetadata(entry);
    });

    res.json({ message: 'Uploaded and metadata saved' });
});
// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Unexpected error' });
});


app.get('/mentor/uploads', (req, res) => {
    const metaPath = path.join(__dirname, '../uploads/metadata.json');
    if (!fs.existsSync(metaPath)) {
        return res.json({ uploads: [] });
    }

    let data: MetadataFile;
    try {
        data = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    } catch (err) {
        console.error('Invalid metadata.json', err);
        return res.status(500).json({ error: 'Failed to read metadata' });
    }

    const enriched = data.uploads.map((entry: MetadataEntry) => ({
        ...entry,
        url: `${req.protocol}://${req.get('host')}/uploads/${encodeURIComponent(entry.filename)}`
    }));

    res.json({ uploads: enriched });
});

export default app;
