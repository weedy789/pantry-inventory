import React from "react";
import { Link } from "react-router-dom";

export  default function Nav() {
  return (
    <nav>
      <center>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </center>
    </nav>
  );
}
