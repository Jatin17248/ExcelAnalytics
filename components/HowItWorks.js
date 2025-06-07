import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Your Excel File",
      description: "Simply drag and drop your Excel file or use our file browser."
    },
    {
      number: 2,
      title: "Automatic Analysis",
      description: "Our AI-powered system analyzes your data in seconds."
    },
    {
      number: 3,
      title: "Get Insights",
      description: "View detailed analytics and visualizations of your data."
    }
  ];

  return (
    <div id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-8 last:mb-0">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 