import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./top-stories.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 481 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function TopStories({ topStories }) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-12">
          <div className="title text-center my-5">
            <h1 className="mb-10">Here is Latest Stories from all categories</h1>
            <p className="px-15">
            Discover, Share, and Explore: Join our platform to contribute and enjoy a diverse array of blogs spanning Educative, Travel, News, and Sports categories
            </p>
          </div>

          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 0.5s ease-in-out"
            transitionDuration={100}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            renderButtonGroupOutside={true}
          >
            {topStories.length > 0 &&
              topStories.map((blog) => (
                <Card key={blog._id}>
                  <img src={blog.image.url} className="card-image" />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text
                      dangerouslySetInnerHTML={{ __html: blog.desc }}
                    />
                    <Button className="readmore-btn">Read More</Button>
                  </Card.Body>
                </Card>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TopStories;
