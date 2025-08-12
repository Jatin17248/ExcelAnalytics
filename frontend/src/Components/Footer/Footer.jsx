
import React from 'react';

const Footer = () => {
  return  (
    <footer
  style={{
    background: "linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6)",
    color: "#fff",
    padding: "12px 0",
    textAlign: "center",
    boxShadow: "inset 0 1px 4px rgba(0,0,0,0.2)",
    marginTop: "20px",
  }}
>
  <p
    style={{
      fontSize: "14px",
      letterSpacing: "0.5px",
      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
      margin: 0,
    }}
  >
    Designed & Developed by{" "}
    <a
      href="https://www.linkedin.com/in/jatin-sood-68627b28a/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        fontWeight: "600",
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
      onMouseOut={(e) => (e.target.style.textDecoration = "none")}
    >
      Jatin Sood
    </a>
  </p>
</footer>

  )
};

export default Footer;