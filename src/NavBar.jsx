import React from "react";

export default function NavBar() {
  return (
    <nav>
      <a href="https://bukola-dark-website.netlify.app/">
        <button>Previous</button>
      </a>
      <a href="https://pamela-limitless-movie.netlify.app/">
        <button>Next »</button>
      </a>
      <ul>
        <li>
          <a href="#tribute-info">About</a>
        </li>
        <li>
          <a href="#review">Review by "ChatGPT"</a>
        </li>
        <li>
          <a href="#recommendations">Recommendations</a>
        </li>
      </ul>
    </nav>
  );
}
