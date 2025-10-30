import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center">
      <div className=" mx-auto px-9">
        <p className="mb-1">© 2025 Anukaran Gaire. All rights reserved.</p>
        <p>
          Connect with me:{" "}
          <a
            href="mailto:imanukarangaire@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/anukarangaire"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-400"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/anukarangaire"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-400"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
