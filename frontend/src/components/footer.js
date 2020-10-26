import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="bg-blue-700">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          &#169;{` `}
          <a
            className="font-bold no-underline"
            href="https://wisenet.work"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wise Networking
          </a>
          {` `}2020
        </p>

        <p>
          <Link
            className="font-bold text-white no-underline"
            to={`/legal-information`}
          >
            Legal Information
          </Link>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
