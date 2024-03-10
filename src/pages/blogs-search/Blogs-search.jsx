import React, { useEffect, useState } from "react";
import "./blog-search.css";
import { FaComment } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../utils/userProvider";

import Pagination from "react-js-pagination";
// import("bootstrap/less/bootstrap.less");
function blogs() {
  const [blogsData, setBlogsData] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [selectedCategory, setselectedCategory] = useState("All");
  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [onlymeBlogs, setOnlymeBlogs] = useState(false);
  const { user } = useUser();
  const [searchText, setSearchText] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [querytext, setQueryText] = useState('')
  useEffect(() => {
    setLoading(true);
    const parameter = {
      page: activePage,
      
      limit,
    };
    if(querytext !== "") parameter.searchText = querytext;
    if (selectedCategory !== "All") parameter.category = selectedCategory;
    if (onlymeBlogs && user) parameter.user = user?._id;
    axiosInstance
      .get(`blog`, { params: parameter })
      .then((res) => {
        // alert(1)
        setBlogsData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(console.err);
      });
  }, [selectedCategory, onlymeBlogs, querytext, activePage]);

  const handleOptionChange = (event) => {
    setselectedCategory(event.target.value);
    params.category = event.target.value;
  };
  const navigateToBlogDetails = (id) => {
    navigate(`/blog-details/${id}`);
  };

  const handleSearch = (e) => {
    setQueryText(e.target.value)
  };
  const debounce = (func, delay) => {
    let timeoutId;
    return function (event) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(event); // Call the original function with correct context and arguments
      }, delay);
    };
  };
  const debouncedHandleChange = debounce(handleSearch, 2000);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    let options = null;
    options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handlePageChange = (pagenum) => {
    setActivePage(pagenum);
  };
  console.log(blogsData.totalBlogs, "kxjcldsjf")
  return (
    <section role="all blogs" className="allblogs-wraper py-5">
      <div className="container">
        <div className="row">
          <div
            className="col-sm-3"
            style={{ boxShadow: "4px 3px 5px -2px rgba(0,0,0,0.2)" }}
          >
            <input
              type="text"
              id="site-search"
              name="name-search"
              placeholder="Search blog title..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                debouncedHandleChange(e)
              }}
            />
            <ul className="filters">
              <p className="mb-0">Search by category</p>
              <li className="category-filters">
                <input
                  type="radio"
                  id="all"
                  name="filter"
                  value="All"
                  checked={selectedCategory === "All"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="all"> All Categories</label>
              </li>
              <li className="category-filters">
                <input
                  type="radio"
                  id="educative"
                  name="filter"
                  value="Educative"
                  checked={selectedCategory === "Educative"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="educative"> Educative</label>
              </li>
              <li className="category-filters">
                <input
                  type="radio"
                  id="news"
                  name="filter"
                  value="News"
                  checked={selectedCategory === "News"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="news"> News</label>
              </li>
              <li className="category-filters">
                <input
                  type="radio"
                  id="travel"
                  name="filter"
                  value="Travel"
                  checked={selectedCategory === "Travel"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="travel"> Travel</label>
              </li>
              <li className="category-filters">
                <input
                  type="radio"
                  id="sports"
                  name="filter"
                  value="Sports"
                  checked={selectedCategory === "Sports"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="sports"> Sports</label>
              </li>
            </ul>
            {user && (
              <ul className="filters border-top py-3">
                <li className="category-filters">
                  <input
                    type="checkbox"
                    id="onlyme"
                    name="onlyme"
                    value="Onlyme"
                    checked={onlymeBlogs}
                    onChange={() => setOnlymeBlogs((prev) => !prev)}
                  />
                  <label htmlFor="onlyme"> Only added by me.</label>
                </li>
              </ul>
            )}
          </div>
          <div className="col-sm-9">
            <div className="post-lists">
              <div className="loader">
                {/* {loading && <div className="loader__element"></div>} */}
              </div>
              {blogsData?.blogs?.length > 0 ? (
                blogsData.blogs.map((blog) => (
                  <div className="single-list flex-row d-flex" key={blog._id}>
                    <div className="thumb">
                      <div className="date">
                        <span>{formatDate(blog?.createdAt)}</span>
                      </div>
                      <img
                        className="left-img"
                        src={blog.image.url}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="detail">
                      <h4
                        className="pb-20 mb-0"
                        onClick={() => navigateToBlogDetails(blog._id)}
                        role="button"
                      >
                        {blog.title}
                      </h4>
                      <p
                        className="htmlin"
                        dangerouslySetInnerHTML={{ __html: blog.desc }}
                      />
                      <p className="footer pt-20 d-flex align-items-center">
                        <FaComment />
                        {blog.comments > 0 ? (
                          <p className="ms-2 mb-0">
                            {blog.comments < 10
                              ? `0${blog.comments}`
                              : blog.comments}{" "}
                            Comments
                          </p>
                        ) : (
                          <p className="ms-2 mb-0">No comments yet.</p>
                        )}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No Blogs found in given criteria.</p>
              )}

              {blogsData?.totalBlogs > 10 && (
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={10}
                  totalItemsCount={blogsData.totalBlogs}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default blogs;
