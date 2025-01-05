import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const uploadsDir = path.join(process.cwd(), 'public/uploads');

    // Check if the uploads directory exists
    if (!fs.existsSync(uploadsDir)) {
      return res.status(200).json({ files: [] }); 
    }


    const files = fs.readdirSync(uploadsDir).filter((file) => file.endsWith('.pdf'));

    return res.status(200).json({ files });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
