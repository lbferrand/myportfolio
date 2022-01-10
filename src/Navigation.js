import React from "react";

export default function Navigation() {
  return (
    <div className="container">
      <div className="nav-bar">
        <ul className="nav justify-content-right">
          <h3 className="logo">My Portfolio</h3>
          <li className="nav-item">
            <a className="nav-link active" title="Homepage" href="/index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              title="My story"
              aria-current="page"
              href="/mystory.html"
            >
              My Story
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" title="My Work description" href="/mywork.html">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" title="Books I read in 2022" href="/books.html">
              My Reading
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              title="Contact Information"
              href="/contact.html"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
