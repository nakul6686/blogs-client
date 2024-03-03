import React, { Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { useTheme } from "./utils/theme";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/loading";
import ProtectedRoute from "./utils/ProtectedRoutes";



const Home = React.lazy(() => import("./pages/home/Home"));
const LoginRegister = React.lazy(() => import("./pages/auth/Login-register"));
const BlogCreate = React.lazy(() => import("./pages/createBlog/Blog"));
const BlogDetails = React.lazy(() => import("./pages/single-blog/Blogdetails"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const Blogs = React.lazy(() => import("./pages/blogs-search/Blogs-search"));

function App() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  return (
    <div className={`main-container ${theme}`}>
      {location.pathname !== "/login" && <Header />}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/blogs-client" element={<Home />} />
          <Route path="login" element={<LoginRegister />} />
          <Route
            path="blog-create/:blogId?"
            element={
              <ProtectedRoute>
                <BlogCreate />
              </ProtectedRoute>
            }
          />
          <Route path="blog-details/:id" element={<BlogDetails />} />
          <Route path="blog-search/:category?" element={<Blogs />} />
        </Routes>
      </Suspense>
      {location.pathname !== "/login" && <Footer />}
      
    </div>
  );
}

export default App;
