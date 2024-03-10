import React from "react";
import { FaCalendarAlt, FaComment } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./category.css";
function Category({ categoryData }) {
  const { news, sports, travel, eduactive } = categoryData;
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    let options = null;
    options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <section style={{ background: "#f9f9ff" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {news?.length > 0 && (
              <>
                <div className="title text-center my-5">
                  <h1 className="mb-10">Hot topics from Travel Section</h1>
                  <p className="px-15">
                    Embark on a journey to discover captivating destinations,
                    travel tips, and exciting adventures in our Travel section.
                    Explore the world's wonders and plan your next unforgettable
                    trip with insights from fellow travelers.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="row">
          {travel?.map((travel) => (
            <div className="col-lg-6 travel-left" key={travel._id}>
              <div className="single-travel media pb-70 custom-cls">
                <img
                  className="img-fluid d-flex  mr-3 img-wd"
                  src={travel.image.url}
                  alt=""
                />
                <div className="dates">
                  <span>{formatDate(travel?.createdAt)}</span>
                </div>
                <div className="media-body align-self-center">
                  <h4 className="mt-0 two-ln">
                    <p className="mb-0">
                      {travel?.title}
                    </p>
                  </h4>
                  <p  className="two-ln" dangerouslySetInnerHTML={{__html: travel.desc}}>
                    {/* {travel?.desc} */}
                  </p>
                  <div className="meta-bottom d-flex justify-content-between">
                    <p>
                      <span className="lnr lnr-bubble"></span>{" "}
                      <FaComment className="me-2" />
                      {travel.comments.length == 1
                        ? `${travel.comments.length} comment`
                        : travel.comments.length > 1
                        ? `${travel.comments.length} comments`
                        : "No comments yet."}
                    </p>
                    <a
                      onClick={() => navigate(`/blog-details/${travel._id}`)}
                      style={{ cursor: "pointer" }}
                    >
                      Read more..
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {travel?.length > 3 && (
            <div className="mb-5 d-flex justify-content-center">
              <Button
                className="readmore-btn w-10"
                onClick={() => navigate("/blog-search")}
              >
                See All
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Category;
