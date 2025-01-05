// /pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [pdfList, setPdfList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch the list of uploaded files
  const fetchPdfList = async () => {
    const response = await fetch('/api/getFiles'); // API to list PDFs
    const data = await response.json();
    setPdfList(data.files);
  };

  useEffect(() => {
    fetchPdfList();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      fetchPdfList();
    }
  };

  return (
    <div className="app-wrapper">
      {/* App Name Section */}
      <div className="app name">
        <h1>Prizmora Task</h1>
      </div>

      {/* Main Container */}
      <div className="container">
        <div className="upload-section">
          <h1>Upload PDF</h1>
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>Upload</button>
        </div>

        <div className="preview-section">
          <h1>Uploaded PDFs</h1>
          <ul>
            {pdfList.map((file, index) => (
              <li key={index}>
                <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
