import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setFile(droppedFile);
      onFileSelect(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        className={`p-8 rounded-xl border-2 border-dashed backdrop-blur-sm bg-gray-800/50 ${
          isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600'
        } transition-all duration-200 shadow-2xl`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="text-center">
          <div className="mb-6">
            <svg 
              className="mx-auto h-12 w-12 text-blue-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <p className="text-xl mb-2 font-medium">
            {file ? file.name : 'Drag and drop your Excel file here'}
          </p>
          <p className="text-sm text-gray-400 mb-6">
            or
          </p>
          <label className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
            Browse Files
            <input
              type="file"
              className="hidden"
              accept=".xlsx"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FileUpload; 