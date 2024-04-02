import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <nav>
        <Link to="/about/user">User</Link> <br />
        <Link to="/about/admin">Admin</Link>
      </nav>
      <hr />
      <h1>I am ABout Page</h1>
      <Outlet />
    </>
  );
}

export default About;
