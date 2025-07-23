import os
import json
from datetime import datetime

folder = '.'
metadata_file = 'metadata.json'
script_name = os.path.basename(__file__)
uploads = []

if not os.path.isdir(folder):
    print(f"Directory '{folder}' does not exist.")
else:
    for filename in os.listdir(folder):
        if filename == script_name or not os.path.isfile(os.path.join(folder, filename)):
            continue

        name, ext = os.path.splitext(filename)
        # Fake uploaded filename with a timestamp to simulate the format
        timestamp = int(datetime.utcnow().timestamp() * 1000)
        fake_uploaded_name = f"{name}-{timestamp}{ext}"

        uploads.append({
            "title": name,
            "filename": fake_uploaded_name,
            "original": filename,
            "uploadedAt": datetime.utcnow().isoformat() + "Z"
        })

    metadata = {"uploads": uploads}
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2)

    print(f"metadata.json created with {len(uploads)} entries.")
