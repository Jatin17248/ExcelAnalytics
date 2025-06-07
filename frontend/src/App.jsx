import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Transform Your Excel Data into Powerful Insights
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Upload your Excel files and get instant analytics, visualizations, and actionable insights.
            No complex setup required.
          </p>
        </div>

        <FileUpload onFileSelect={handleFileSelect} />

        {file && (
          <div className="mt-8 text-center animate-fadeIn">
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Analyze File
            </button>
          </div>
        )}
      </div>

      <Features />
      <HowItWorks />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 ExcelAnalytics. Designed by Team 23 of Zidio Development</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
