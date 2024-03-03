import React, { useState, useRef } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Files from "react-files";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../utils/firebaseonfig";
import axiosInstance from "../../utils/axiosInstance";
import { useUser } from "../../utils/userProvider";
import { useSnackbar } from "../../utils/Snackbar";

const registerInitialValues = {
  userEmail: "",
  userPassword: "",
  userName: "",
  userNumber: "",
  userImage: "",
};

const loginInitialValues = {
  email: "",
  password: "",
};

function LoginRegister() {
  const [loginFormVisible, setLoginFormVisible] = useState(true);
  const [validated, setValidated] = useState(false);
  const [registerValidated, setRegisterValidated] = useState(false);
  const registerForm = useRef(null);
  const loginForm = useRef(null);
  const [formData, setLoginData] = useState(loginInitialValues);
  const [regiserFormData, setRegisterformDta] = useState(registerInitialValues);
  const [imageuploadPercent, setImageUplodpercent] = useState(-1);
  const navigate = useNavigate();
  const { handleUser } = useUser();
  const showSnackbar = useSnackbar();
  const [loginError, setLoginerror] = useState({});

  // Login handlers============
  const handleChange = (e) => {
    setLoginData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      axiosInstance
        .post(`auth/user/login`, {
          userEmail: formData.email,
          userPassword: formData.password,
        })
        .then((response) => {
          handleUser(response.data);
          localStorage.setItem("userData", JSON.stringify(response.data))
          setLoginData(loginInitialValues);
          loginForm.current.reset();
          navigate("/");
          setValidated(false);
          // showSnackbar('success', 'This is a success message');
        })
        .catch((error) => {
          setLoginerror({
            error: true,
            message: error?.response?.data?.message,
          });
        });
    }
  };
  // ============Register handlers==================

  const handleRegisterChange = (e) => {
    setRegisterformDta({ ...regiserFormData, [e.target.name]: e.target.value });
    // setRegisterformDta({ ...regiserFormData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (files) => {
    const storageRef = ref(storage, `/Users/${files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setImageUplodpercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setRegisterformDta({
            ...regiserFormData,
            ["userImage"]: {
              type: files[0].type,
              size: files[0].size,
              name: files[0].name,
              url,
            },
          });
          setImageUplodpercent(-1);
          console.log(url);
        });
      }
    );
  };

  const handleFileError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setRegisterValidated(true);
    } else {
      axiosInstance
        .post("auth/user/register", regiserFormData)
        .then((response) => {
          showSnackbar('success', 'User has been successfully registered.');
          handleUser(response.data);
          localStorage.setItem("userData", JSON.stringify(response.data))
          setRegisterformDta(registerInitialValues);
          setRegisterValidated(false);
          registerForm.current.reset();
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  return (
    <div className="Login-container conatainer d-flex align-items-center justify-content-center h-100 position-relative">
      <div className="Login-wrapper w-50">
        <h1 className="text-center login-logo">VBlogs</h1>
        {loginFormVisible ? (
          <h2 className="text-center mb-4">Sign in to your account</h2>
        ) : (
          <h2 className="text-center mb-4">Set up your account</h2>
        )}
        {loginFormVisible ? (
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            ref={loginForm}
          >
            <Form.Group className="mb-4" controlId="user-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="user-password">
              <Form.Label className="d-flex justify-content-between">
                <span>Password</span>{" "}
                <span>
                  <Link to={"#"}>Forgot Password</Link>
                </span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                required
                minLength={6}
                max={20}
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
              <Form.Control.Feedback type="invalid">
                Password should contain min 6 and max 20 Chars.
              </Form.Control.Feedback>
            </Form.Group>
            {loginError?.error && (
              <p className="text-small text-danger mt-0 mb-0">
                {loginError?.message}
              </p>
            )}
            <Button className="btn signin-btn" type="submit">
              Login
            </Button>
          </Form>
        ) : (
          <Form
            noValidate
            validated={registerValidated}
            onSubmit={handleRegisterSubmit}
            ref={registerForm}
          >
            <Form.Group className="mb-4" controlId="user-name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your name"
                name="userName"
                required
                value={regiserFormData.userName}
                onChange={handleRegisterChange}
                minLength={6}
                maxLength={20}
              />
              <Form.Control.Feedback type="invalid">
                Name should be min 6 chars. long.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="user-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                name="userEmail"
                required
                value={regiserFormData.userEmail}
                onChange={handleRegisterChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="user-email">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Your number"
                name="userNumber"
                required
                value={regiserFormData.userNumber}
                onChange={handleRegisterChange}
                pattern="[0-9]{1,10}"
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="user-password">
              <Form.Label className="d-flex justify-content-between">
                <span>Password</span>{" "}
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                required
                minLength={6}
                max={20}
                name="userPassword"
                value={regiserFormData.userPassword}
                onChange={handleRegisterChange}
              />
              <Form.Control.Feedback type="invalid">
                Password should contain min 6 and max 20 Chars.
              </Form.Control.Feedback>
            </Form.Group>
            <div className="files mb-3">
              <Files
                className="files-dropzone"
                onChange={handleFileChange}
                onError={handleFileError}
                accepts={["image/png", "image/jpeg"]}
                multiple={false}
                maxFileSize={10000000}
                minFileSize={0}
                clickable
                name="userImage"
              ></Files>
              {imageuploadPercent >= 0 && imageuploadPercent < 101 && (
                <ProgressBar
                  className="mt-3"
                  now={imageuploadPercent}
                  label={`${imageuploadPercent}%`}
                />
              )}
            </div>
            <Button className="btn signin-btn" type="submit">
              Register
            </Button>
          </Form>
        )}
        {loginFormVisible ? (
          <p className="mt-5 d-flex justify-content-evenly">
            Not a member?
            <span
              role="button"
              className="signin-up"
              onClick={() => setLoginFormVisible(false)}
            >
              Sign up here.
            </span>
          </p>
        ) : (
          <p className="mt-5 d-flex justify-content-evenly">
            Already a member?
            <span
              role="button"
              className="signin-up"
              onClick={() => setLoginFormVisible(true)}
            >
              Sign In
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginRegister;
