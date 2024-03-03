import React from "react";
import "./banner.css";
import { FaHeart, FaComment } from "react-icons/fa";
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router";

function Banner({ bannerData }) {
  const  navigate = useNavigate()
  const formatDate = (dateString,) => {
    const date = new Date(dateString);
     let options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      {bannerData.length > 0 && (
        <div className="parallax-banner">
          <div className="parallax-image" style={{backgroundImage: bannerData[0].image.url}}></div>
          <div className="parallax-content">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="full-screen">
                    <div className="row fullscreen ">
                      <div className="banner-content d-flex align-items-center col-lg-12 col-md-12">
                        <h1 className="main-text">
                          {bannerData[0].title}
                        </h1>
                      </div>
                      <div className="head-bottom-meta d-flex justify-content-between align-items-end col-lg-12">
                        <div className="col-lg-6 flex-row d-flex meta-left no-padding">
                          {/* <p>
                            <span className="lnr lnr-bubble"></span>{" "}
                            <FaComment className="me-1" />
                            02 Comments
                          </p> */}
                          <p dangerouslySetInnerHTML={{__html: bannerData[0].desc}} className="mb-0 elipsis-2 text-left"></p>
                        </div>
                        <div className="col-lg-6 flex-row d-flex meta-right no-padding justify-content-end">
                          <div className="user-meta">
                            <h4 className="text-white mb-0">{bannerData[0].user.userName}</h4>
                            <p className="mb-0">{formatDate(bannerData[0].createdAt)}</p>
                          </div>
                          <img
                            className="img-fluid user-img"
                            src={bannerData[0].user.userImage.url}
                            alt=""
                          />
                        </div>
                        
                      </div>
                      <div className="d-flex">
                          <Button variant="light" onClick={()=> navigate(`/blog-details/${bannerData[0]._id}`)}>Read More...</Button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax-overlay"></div>
        </div>
      )}
    </>
  );
}

export default Banner;
