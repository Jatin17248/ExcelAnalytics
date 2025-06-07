import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

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
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setFile(selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-500">ExcelAnalytics</div>
            <div className="space-x-6">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Transform Your Excel Data into Powerful Insights
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Upload your Excel files and get instant analytics, visualizations, and actionable insights.
            No complex setup required.
          </p>
        </div>

        {/* Upload Section */}
        <div 
          className={`max-w-2xl mx-auto p-8 rounded-xl border-2 border-dashed backdrop-blur-sm bg-gray-800/50 ${
            isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600'
          } transition-all duration-200 shadow-2xl`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <div className="mb-6">
              <svg 
                className="mx-auto h-16 w-16 text-blue-500" 
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

        {file && (
          <div className="mt-8 text-center animate-fadeIn">
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Analyze File
            </button>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-400">Get deep insights from your data with our powerful analytics engine.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Visualizations</h3>
              <p className="text-gray-400">Transform your data into stunning, interactive charts and graphs.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Processing</h3>
              <p className="text-gray-400">Your data is processed securely and never stored on our servers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mr-4">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Excel File</h3>
                <p className="text-gray-400">Simply drag and drop your Excel file or use our file browser.</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mr-4">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automatic Analysis</h3>
                <p className="text-gray-400">Our AI-powered system analyzes your data in seconds.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mr-4">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
                <p className="text-gray-400">View detailed analytics and visualizations of your data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 ExcelAnalytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
