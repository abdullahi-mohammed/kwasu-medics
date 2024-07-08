import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <p> Landing page</p>
      <Link to="/login">Login page</Link>
    </div>
  );
};

export default Home;
