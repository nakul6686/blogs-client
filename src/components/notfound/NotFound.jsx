import React from "react";
import "./notfound.css";
import { useNavigate } from "react-router-dom";
function NotFound() {

    const navigate = useNavigate()
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/blogs-client/')}>Go to Homepage</button>
      </div>
    </div>
  );
}

export default NotFound;
