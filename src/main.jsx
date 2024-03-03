import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./utils/theme.jsx";
import {BrowserRouter as Router} from "react-router-dom"
import { UserProvider } from "./utils/userProvider.jsx";
import SnackbarProvider from '@brancol/react-snackbar'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
      <UserProvider>
       <SnackbarProvider defaultPosition={'br'}>
      <App />
      </SnackbarProvider>
      </UserProvider>
      
    </ThemeProvider>
    </Router>
  </React.StrictMode>
);
