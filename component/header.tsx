import Link from 'next/link';
import React from 'react';



function Header() {
  return (
    <header className="header">
      <div className="logo">My Portfolio!</div>
      <nav>
        <ul className="nav-list">
          <li><Link href="/hero">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/project">Projects</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/social">Social</Link></li>
          <li><Link href="/skill">Skills</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
