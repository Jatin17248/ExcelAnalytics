// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Welcome.css';

// const Welcome = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState(null);
//   const [currentFeature, setCurrentFeature] = useState(0);

//   const features = [
//     "Real-time Data Processing",
//     "AI-Powered Insights",
//     "Advanced Analytics Engine",
//     "Machine Learning Models",
//     "Predictive Analytics",
//     "Data Visualization Suite"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleRoleSelect = (selectedRole) => {
//     setRole(selectedRole);
//   };

//   return (
//     <div className="welcome-container">
//       <div className="hero-section">
//         <div className="logo-container">
//           <div className="logo-icon">⚡</div>
//           <h1>DataFlow Analytics</h1>
//         </div>
        
//         <div className="tagline">
//           <p>Next-Generation Data Intelligence Platform</p>
//           <div className="feature-rotator">
//             <span className="feature-text">{features[currentFeature]}</span>
//           </div>
//         </div>

//         <div className="tech-stats">
//           <div className="stat-item">
//             <span className="stat-number">99.9%</span>
//             <span className="stat-label">Uptime</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">10TB+</span>
//             <span className="stat-label">Data Processed</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">50ms</span>
//             <span className="stat-label">Response Time</span>
//           </div>
//         </div>
//       </div>

//       {!role ? (
//         <div className="role-selection">
//           <h2>Choose Your Access Level</h2>
//           <div className="role-cards">
//             <div className="role-card" onClick={() => handleRoleSelect('admin')}>
//               <div className="role-icon">👨‍💼</div>
//               <h3>System Administrator</h3>
//               <p>Full platform access with user management and system controls</p>
//               <ul>
//                 <li>User Management</li>
//                 <li>System Analytics</li>
//                 <li>AI Model Training</li>
//                 <li>Advanced Settings</li>
//               </ul>
//             </div>
//             <div className="role-card" onClick={() => handleRoleSelect('user')}>
//               <div className="role-icon">👨‍💻</div>
//               <h3>Data Analyst</h3>
//               <p>Advanced analytics tools for data processing and insights</p>
//               <ul>
//                 <li>Data Upload & Analysis</li>
//                 <li>Real-time Dashboards</li>
//                 <li>AI Insights</li>
//                 <li>Report Generation</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="auth-section">
//           <div className="selected-role">
//             <div className="role-badge">
//               <span className="role-icon">{role === 'admin' ? '👨‍💼' : '👨‍💻'}</span>
//               <span className="role-name">{role === 'admin' ? 'System Administrator' : 'Data Analyst'}</span>
//             </div>
//           </div>
          
//           <div className="auth-buttons">
//             <button className="auth-btn primary" onClick={() => navigate(`/register/${role}`)}>
//               <span>🚀</span>
//               Create Account
//             </button>
//             <button className="auth-btn secondary" onClick={() => navigate(`/login/${role}`)}>
//               <span>🔐</span>
//               Sign In
//             </button>
//           </div>
          
//           <button className="change-role-btn" onClick={() => setRole(null)}>
//             ← Change Access Level
//           </button>
//         </div>
//       )}

//       <div className="tech-features">
//         <div className="feature-grid">
//           <div className="feature-item">
//             <div className="feature-icon">🧠</div>
//             <h4>AI-Powered</h4>
//             <p>Machine learning algorithms for intelligent data analysis</p>
//           </div>
//           <div className="feature-item">
//             <div className="feature-icon">⚡</div>
//             <h4>Real-time</h4>
//             <p>Live data processing with instant insights</p>
//           </div>
//           <div className="feature-item">
//             <div className="feature-icon">🔒</div>
//             <h4>Secure</h4>
//             <p>Enterprise-grade security and data protection</p>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Welcome.css';

// const Welcome = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState(null);
//   const [currentFeature, setCurrentFeature] = useState(0);

//   const features = [
//     "Real-time Data Processing",
//     "AI-Powered Insights",
//     "Advanced Analytics Engine",
//     "Machine Learning Models",
//     "Predictive Analytics",
//     "Data Visualization Suite"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleRoleSelect = (selectedRole) => {
//     setRole(selectedRole);
//   };

//   return (
//     <div className="welcome-container">
      
//       {/* ===== Hero Section ===== */}
//       <header className="hero-section">
//         <div className="logo-container">
//           <span className="logo-icon">⚡</span>
//           <h1>DataFlow Analytics</h1>
//         </div>
//         <p className="tagline">Next-Generation Data Intelligence Platform</p>
//         <div className="feature-rotator">
//           <span className="feature-text">{features[currentFeature]}</span>
//         </div>

//         <div className="tech-stats">
//           <div className="stat-item">
//             <span className="stat-number">99.9%</span>
//             <span className="stat-label">Uptime</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">10TB+</span>
//             <span className="stat-label">Data Processed</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">50ms</span>
//             <span className="stat-label">Response Time</span>
//           </div>
//         </div>
//       </header>

//       {/* ===== Role Selection or Auth Section ===== */}
//       <main>
//         {!role ? (
//           <section className="role-selection">
//             <h2>Choose Your Access Level</h2>
//             <div className="role-cards">
//               {/* Admin Card */}
//               <div className="role-card" onClick={() => handleRoleSelect('admin')}>
//                 <div className="role-icon">👨‍💼</div>
//                 <h3>System Administrator</h3>
//                 <p>Full platform access with user management and system controls</p>
//                 <ul>
//                   <li>User Management</li>
//                   <li>System Analytics</li>
//                   <li>AI Model Training</li>
//                   <li>Advanced Settings</li>
//                 </ul>
//               </div>

//               {/* User Card */}
//               <div className="role-card" onClick={() => handleRoleSelect('user')}>
//                 <div className="role-icon">👨‍💻</div>
//                 <h3>Data Analyst</h3>
//                 <p>Advanced analytics tools for data processing and insights</p>
//                 <ul>
//                   <li>Data Upload & Analysis</li>
//                   <li>Real-time Dashboards</li>
//                   <li>AI Insights</li>
//                   <li>Report Generation</li>
//                 </ul>
//               </div>
//             </div>
//           </section>
//         ) : (
//           <section className="auth-section">
//             <div className="selected-role">
//               <div className="role-badge">
//                 <span className="role-icon">{role === 'admin' ? '👨‍💼' : '👨‍💻'}</span>
//                 <span className="role-name">{role === 'admin' ? 'System Administrator' : 'Data Analyst'}</span>
//               </div>
//             </div>

//             <div className="auth-buttons">
//               <button className="auth-btn primary" onClick={() => navigate(`/register/${role}`)}>
//                 🚀 Create Account
//               </button>
//               <button className="auth-btn secondary" onClick={() => navigate(`/login/${role}`)}>
//                 🔐 Sign In
//               </button>
//             </div>

//             <button className="change-role-btn" onClick={() => setRole(null)}>
//               ← Change Access Level
//             </button>
//           </section>
//         )}
//       </main>

//       {/* ===== Platform Feature Highlights ===== */}
//       <section className="tech-features">
//         <h3 className="features-heading" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
//           Why DataFlow?
//         </h3>
//         <div className="feature-grid">
//           <div className="feature-item">
//             <div className="feature-icon">🧠</div>
//             <h4>AI-Powered</h4>
//             <p>Machine learning algorithms for intelligent data analysis</p>
//           </div>
//           <div className="feature-item">
//             <div className="feature-icon">⚡</div>
//             <h4>Real-time</h4>
//             <p>Live data processing with instant insights</p>
//           </div>
//           <div className="feature-item">
//             <div className="feature-icon">🔒</div>
//             <h4>Secure</h4>
//             <p>Enterprise-grade security and data protection</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Welcome;



 import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Real-time Data Processing",
    "AI-Powered Insights",
    "Advanced Analytics Engine",
    "Machine Learning Models",
    "Predictive Analytics",
    "Data Visualization Suite"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="welcome-wrapper">
      {/* HERO */}
      <section className="welcome-hero">
        <div className="welcome-brand">
          <span className="brand-icon">⚡</span>
          <h1>DataFlow Analytics</h1>
        </div>
        <p className="brand-tagline">Where Data Meets Intelligence</p>
        <div className="feature-banner">
          <span className="feature-highlight">{features[currentFeature]}</span>
        </div>
      </section>

      {/* TECH STATS */}
      <section className="welcome-stats">
        <div className="stat">
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
        <div className="stat">
          <h3>10TB+</h3>
          <p>Processed</p>
        </div>
        <div className="stat">
          <h3>50ms</h3>
          <p>Latency</p>
        </div>
      </section>

      {/* ROLE SELECTION OR AUTH */}
      <section className="welcome-role">
        {!role ? (
          <>
            <h2 className="section-heading">Select Your Role</h2>
            <div className="role-grid">
              <div className="role-tile admin" onClick={() => handleRoleSelect('admin')}>
                <span className="role-icon">👨‍💼</span>
                <h3>System Administrator</h3>
                <p>Manage users, settings, and system AI</p>
              </div>
              <div className="role-tile analyst" onClick={() => handleRoleSelect('user')}>
                <span className="role-icon">👨‍💻</span>
                <h3>Data Analyst</h3>
                <p>Analyze trends, visualize data, and generate reports</p>
              </div>
            </div>
          </>
        ) : (
          <div className="auth-section">
            <div className="role-confirm">
              <span className="role-chip">
                {role === 'admin' ? '👨‍💼 System Administrator' : '👨‍💻 Data Analyst'}
              </span>
            </div>
            <div className="auth-cta">
              <button className="btn primary" onClick={() => navigate(`/register/${role}`)}>🚀 Create Account</button>
              <button className="btn secondary" onClick={() => navigate(`/login/${role}`)}>🔐 Sign In</button>
            </div>
            <button className="btn link" onClick={() => setRole(null)}>← Change Role</button>
          </div>
        )}
      </section>

      {/* FEATURE GRID */}
      <section className="welcome-features">
        <h2 className="section-heading">Platform Highlights</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h4>AI Intelligence</h4>
            <p>Trainable models for actionable insights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h4>Real-Time Engine</h4>
            <p>Stream and process data with millisecond latency.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h4>Secure by Design</h4>
            <p>GDPR-compliant and enterprise-ready encryption.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="welcome-footer">
        <p>
          Designed & Developed by{' '}
          <a href="https://www.linkedin.com/in/jatin-sood-68627b28a/" target="_blank" rel="noopener noreferrer">
            Jatin Sood
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Welcome;
