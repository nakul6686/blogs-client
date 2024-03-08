import React from "react";
// import "./error.js"
function ErrorComp({ setIsError }) {
  return (
    <div className="ApiError d-flex height-100 position-fixed justify-content-center align-items-center">
      <div className="error-inner text-center">
        <h4 className="text-danger">Error</h4>
        <p>Please wait few minutes before <br/> you try again</p>
        <button className="btn btn-primary" onClick={() => {
          setIsError(false)
          window.location.reload(true)
          }}>Dismiss</button>
      </div>
    </div>
  );
}

export default ErrorComp;
