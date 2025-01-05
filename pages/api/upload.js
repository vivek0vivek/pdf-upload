import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable({
      uploadDir: path.join(process.cwd(), 'public/uploads'),
      keepExtensions: true, 
      filename: (name, ext, path) => {
        
        return name + ext; //   optional
      }
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'File upload failed', message: err.message });
      }

      //    uploading files

      const uploadedFile = files.file[0];
      const filePath = path.join(process.cwd(), 'public/uploads', uploadedFile.newFilename);

      res.status(200).json({ message: 'File uploaded successfully', filePath });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
