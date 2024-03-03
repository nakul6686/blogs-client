import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./details.css";
import { FaCalendarAlt, FaComment } from "react-icons/fa";
import { Badge, Form, Modal,Button } from "react-bootstrap";
import axiosInstance from "../../utils/axiosInstance";
import { useUser } from "../../utils/userProvider";
import { useSnackbar } from "@brancol/react-snackbar";

function Blogdetails() {
  const [blogdata, setBlogData] = useState(null);
  const [commentValue, setCommentValue] = useState("");
  const params = useParams();
  const { user, handleUser } = useUser();
  const snackbar = useSnackbar();
  const [iscommentAdded, setCommentAdded] = useState(1);
  const navigate = useNavigate();
  const [deleteModal, setdeleteModal] = useState(false);

  useEffect(() => {
    const newparam = params.id;
    axiosInstance
      .get(`blog/getbyId/${newparam}`)
      .then((res) => setBlogData(res.data))
      .catch((err) => console.log(err));
  }, [iscommentAdded]);

  const formatDate = (dateString, time) => {
    const date = new Date(dateString);
    let options = null;
    if (time) {
      options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
    } else {
      options = { day: "numeric", month: "long", year: "numeric" };
    }

    return date.toLocaleDateString("en-US", options);
  };

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleComments = () => {
    axiosInstance
      .post("comments/create", {
        text: commentValue,
        blog: blogdata._id,
        user: user._id,
      })
      .then((res) => {
        console.log(res);
        setCommentAdded((prev) => prev + 1);
        setCommentValue("");
        snackbar.showSuccess("Comment has been added.");
      })
      .catch((error) => console.log(err));
  };
  const redirectCategory = (category) => {
    navigate(`/blog-search/${category}`);
  };

  const handleDeleteBlog = () => {
    axiosInstance
      .delete(`blog/delete/${user._id}/${blogdata._id}`)
      .then((res) => {
        navigate("/blog-search");
        snackbar.showSuccess(
          "Blog and associated comments has been successfully deleted."
        );
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="top-section-area section-gap" role="top banner">
        <div className="container">
          <div className="row justify-content-between align-items-center d-flex">
            <div className="col-lg-8 top-left">
              <h1 className="text-white mb-20">Blog Details</h1>
            </div>
          </div>
        </div>
      </section>

      {blogdata ? (
        <section className="main-detils my-5" role="Main blog details">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <img
                  className="w-100"
                  src={blogdata.image.url}
                  alt="Blog Image"
                  style={{ maxHeight: "490px" }}
                  loading="lazy"
                />

                <h3 className="blog-title mt-3">{blogdata.title}</h3>

                <div
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <p className="category-text mb-0">Category:</p>
                  <Badge bg="success" pill>
                    {blogdata.category}
                  </Badge>
                </div>

                <div className="d-lg-flex justify-content-between mt-3">
                  <p className="user-profile d-flex align-items-center mb-0">
                    <img
                      src={blogdata?.user?.userImage?.url}
                      alt=""
                      className="user-img"
                      loading="lazy"
                    />
                    <p
                      className="user-name mb-0 ms-2"
                      style={{ lineHeight: 2 }}
                    >
                      {blogdata?.user?.userName}
                    </p>
                  </p>

                  <p className="date-added d-flex align-items-center mb-0">
                    <FaCalendarAlt />{" "}
                    <span className="ms-2">
                      {formatDate(blogdata?.createdAt, false)}
                    </span>
                  </p>
                </div>

                <div
                  className="blog-desc mt-3"
                  dangerouslySetInnerHTML={{ __html: blogdata.desc }}
                />
                {blogdata?.user?._id === user?._id && (
                  <div className="actions d-flex">
                    <button className="btn btn-warning btn-sm" onClick={()=>navigate(`/blog-create/${blogdata._id}`)}>Edit</button>
                    <button
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={()=>setdeleteModal(true)}
                    >
                      Delete
                    </button>
                  </div>
                )}

                <div className="bottom-wrapper">
                  <div className="row">
                    <div className="col-lg-12 single-b-wrap col-md-12 d-flex align-items-center">
                      <FaComment style={{ color: "#8490ff x" }} />{" "}
                      <span className="ms-2 comment-text">
                        {blogdata.comments.length > 9
                          ? `${blogdata.comments?.length} people commented on this post.`
                          : blogdata.comments?.length === 0
                          ? "No comments yet."
                          : blogdata.comments?.length === 1
                          ? blogdata.comments[0]?.user._id === user?._id
                            ? "You commented on this post."
                            : `${blogdata.comments[0]?.user?.userName} commented on this.`
                          : `0${blogdata.comments?.length} people commented on this post.`}
                      </span>
                    </div>
                  </div>
                </div>

                <section className="comment-sec-area pt-80">
                  <div className="container">
                    <div className="row flex-column">
                      <h5 className="text-uppercase pb-3">
                        {blogdata.comments.length > 9
                          ? `${blogdata.comments.length} Comments`
                          : blogdata.comments.length === 0
                          ? "No comments yet."
                          : `0${blogdata.comments.length} Comments`}
                      </h5>

                      <div className="d-flex w-100 mb-4 position-relative">
                        <Form.Control
                          type="text"
                          id="addcomment"
                          aria-describedby="comment text"
                          placeholder="Add your thoughts here..."
                          disabled={!user}
                          onChange={handleCommentChange}
                          value={commentValue}
                        />

                        <button
                          disabled={!user || commentValue === ""}
                          className="btn btn-primary"
                          style={{ textWrap: "nowrap", marginLeft: "5px" }}
                          onClick={handleComments}
                        >
                          Add Comment
                        </button>
                      </div>

                      <div className="comment-list">
                        {blogdata.comments.map((comment, index) => (
                          <div
                            key={index}
                            className="single-comment justify-content-between d-flex"
                          >
                            <div className="user justify-content-between d-flex">
                              <div className="thumb">
                                <img
                                  src={comment.user.userImage?.url}
                                  alt=""
                                  loading="lazy"
                                />
                              </div>

                              <div className="desc">
                                <h5>
                                  <p className="mb-0">
                                    {comment.user.userName}
                                  </p>
                                </h5>

                                <p className="date mb-0">
                                  {formatDate(comment.createdAt, true)}
                                </p>

                                <p className="comment">{comment.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <ul className="categories list-none">
                  <h3 className="title">Other Categories</h3>
                  <li
                    className="cat-list"
                    role="button"
                    onClick={() => redirectCategory("Educative")}
                  >
                    Educative
                  </li>
                  <li
                    className="cat-list"
                    role="button"
                    onClick={() => redirectCategory("News")}
                  >
                    News
                  </li>
                  <li
                    className="cat-list"
                    role="button"
                    onClick={() => redirectCategory("Travel")}
                  >
                    Travel
                  </li>
                  <li
                    className="cat-list"
                    role="button"
                    onClick={() => redirectCategory("Sports")}
                  >
                    Sports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : (
        blogdata !== null && (
          <p
            className="d-flex justify-content-center pt-200  fw-bold"
            style={{ fontSize: "30px" }}
          >
            Opps! The post you are looking for is not found
          </p>
        )
      )}

      <Modal
        size="sm"
        show={deleteModal}
        onHide={() => setdeleteModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <p className="mb-0">
            Delete Blog
          </p>
        </Modal.Header>
        <Modal.Body>
          <p className="text-sm">
          Are you sure to delete?
          </p>
        </Modal.Body>
        <Modal.Footer className="text-center">
        <Button className ="" size="sm" variant="secondary" onClick={()=> setdeleteModal(false)}>NO</Button>
        <Button className ="" size="sm" variant="danger" onClick={handleDeleteBlog}>YES</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Blogdetails;
