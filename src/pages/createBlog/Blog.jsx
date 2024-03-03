import React, { useState, useRef, useEffect } from "react";
import "./blog.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Files from "react-files";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../utils/firebaseonfig";
import ProgressBar from "react-bootstrap/ProgressBar";
import axiosInstance from "../../utils/axiosInstance";
import { useUser } from "../../utils/userProvider";
import { useNavigate, useParams } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "./toolbar";
import { useSnackbar } from "../../utils/Snackbar";
const initialVlues = {
  title: "",
  desc: "",
  category: "",
  image: "",
};


function Blog() {
  const [blogData, setBlogData] = useState(initialVlues);
  const blogform = useRef(null);
  const [imageuploadPercent, setImageUplodpercent] = useState(-1);
  const { user, handleUser } = useUser();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [formValidation, setFormValidation] = useState({
    title: false,
    desc: false,
    category: false,
    image: false,
  });
  const params = useParams();
  const [updateData, setUpdateData] = useState(null);
  const showSnackbar = useSnackbar();

  useEffect(() => {
    if (params.blogId) {
      axiosInstance
        .get(`blog/getbyId/${params.blogId}`)
        .then((res) => {
          setUpdateData(res.data);
          const { title, desc, image, _id, category } = res.data;
          setValue(desc);
          setBlogData({ title, desc, image, category });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleblogChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newvalidation = {
      title: blogData.title.length === 0 || blogData.title.length < 20,
      category: blogData.category.length === 0,
      desc: value.length === 0,
      image: blogData.image.length === 0,
    };

    setFormValidation(newvalidation);
    if (Object.values(formValidation).some(Boolean)) {
      return;
    }


    if(!params.blogId){
      axiosInstance
      .post("blog/create", { ...blogData, user: user._id, desc: value })
      .then((response) => {
        showSnackbar("success","Blog has been created successfully.");
        setBlogData(initialVlues);
        setValue("");
        blogform.current.reset();
        navigate(`/blog-details/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      console.log(blogData, "xcvjkxcvh")
      axiosInstance
      .put("blog/update", { ...blogData, user: user._id, desc: value, id: updateData._id})
      .then((response) => {
        // snackbar.showSuccess("Blog has been update successfully.");
        setBlogData(initialVlues);
        setValue("");
        blogform.current.reset();
        setUpdateData(null)
        navigate(`/blog-details/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const handleFileChange = (files) => {
    const storageRef = ref(storage, `/Blogs/${files[0].name}`);
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
          setBlogData({
            ...blogData,
            ["image"]: {
              type: files[0].type,
              size: files[0].size,
              name: files[0].name,
              url,
            },
          });
          setImageUplodpercent(-1);
        });
      }
    );
  };

  const handleFileError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  return (
    <section role="blog-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="form-wrapper">
              <Form noValidate onSubmit={handleSubmit} ref={blogform}>
                <Form.Group className="mb-3" controlId="blogTitle">
                  <Form.Label>Enter Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    required
                    value={blogData.title}
                    onChange={handleblogChange}
                    minLength={20}
                  />
                  {formValidation.title && (
                    <span
                      className="text-danger text-small"
                      style={{ fontSize: "14px" }}
                    >
                      Title is required and shouldbe atleast 20 chars long.
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="blogCategory">
                  <Form.Label>Select category of blog</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    required
                    value={blogData.category}
                    onChange={handleblogChange}
                    disabled={params.blogId}
                  >
                    <option>Choose...</option>
                    <option value="Educative">Educative</option>
                    <option value="News">News</option>
                    <option value="Travel">Travel</option>
                    <option value="Sports">Sports</option>
                    {user?._id === "65df20c070251581ff3ec5d6" && (
                      <option value="Banner">Banner</option>
                    )}
                  </Form.Select>
                  {formValidation.category && (
                    <span
                      className="text-danger text-small"
                      style={{ fontSize: "14px" }}
                    >
                      Category is required.
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="blogDesc">
                  <Form.Label>Description</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}
                    formats={formats}
                  />
                  {formValidation.desc && (
                    <span
                      className="text-danger text-small"
                      style={{ fontSize: "14px" }}
                    >
                      Description is required and should atleast 50 chars long.
                    </span>
                  )}
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3 custom-file">
                  <Form.Label>Image for blog</Form.Label>
                  <Files
                    className="files-dropzone"
                    onChange={handleFileChange}
                    onError={handleFileError}
                    accepts={["image/png", "image/jpeg"]}
                    multiple
                    maxFileSize={10000000}
                    minFileSize={0}
                    clickable
                  >
                    {blogData?.image?.name
                      ? blogData?.image?.name
                      : "No Files Choosen."}
                  </Files>
                  {imageuploadPercent >= 0 && imageuploadPercent < 101 && (
                    <ProgressBar
                      className="mt-3"
                      now={imageuploadPercent}
                      label={`${imageuploadPercent}%`}
                    />
                  )}
                  {formValidation.image && (
                    <span
                      className="text-danger text-small"
                      style={{ fontSize: "14px" }}
                    >
                      Image is for blog is required for better visiblity, please
                      add relevent image.
                    </span>
                  )}
                </Form.Group>
                {blogData?.image?.url && (
                  <div className="d-flex mb-1 border border-success p-2">
                    <img
                      src={blogData?.image?.url} // Path to your default image
                      alt="Default Image"
                      style={{ width: "60px" }}
                    />
                  </div>
                )}
                <div className={`d-flex justify-content-end mt-2`}>
                  {params.blogId && (
                    <Button className="btn signin-btn me-2"  variant="outline-warning"onClick={()=>navigate(-1)}>
                      Cancel
                    </Button>
                  )}

                  <Button className="btn signin-btn" type="submit">
                    {params.blogId ? "Update" : "Create"}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
