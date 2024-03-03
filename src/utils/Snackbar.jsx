import React, { createContext, useContext, useEffect, useState } from "react";

const SnackbarContext = createContext(null);

export const SnackbarProvider = ({ children }) => {
  const [snackbarContent, setSnackbarContent] = useState(null);

  const showSnackbar = (background, text) => {
    setSnackbarContent({ background, text });
    setTimeout(() => {
      setSnackbarContent(null);
    }, 2000);
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      {snackbarContent && (
        <p 
        className="mb-0"
          style={{
            padding: "10px",
            background:  snackbarContent.background === 'success'? "#14A44D": '#DC4C64',
            borderTop:
              snackbarContent.background === 'success'
                ? "5px solid #14A44D"
                : "#DC4C64",
                position: "fixed",
                bottom: 0,
                width: '100%',
                textAlign: "center",
                transition:'all 0.3s ease, background-position 1ms',
                color: "#FFF"

          }}
        >
            {snackbarContent.text}
        </p>
      )}
    </SnackbarContext.Provider>
  );
};


export const useSnackbar = ()=> useContext(SnackbarContext)
