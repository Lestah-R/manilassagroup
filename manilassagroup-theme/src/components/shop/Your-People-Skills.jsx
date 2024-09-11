import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "Teamwork and Collaboration",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quasi, deserunt excepturi minima eligendi explicabo recusandae! Dolorum, laboriosam dignissimos.",
    price: 13,
    img: "https://www.raksotravel.com/Content/img/mice/convention_dubai_04.jpg",
  },
  {
    title: "Teamwork and Collaboration",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quasi, deserunt excepturi minima eligendi explicabo recusandae! Dolorum, laboriosam dignissimos.",
    price: 13,
    img: "https://www.raksotravel.com/Content/img/mice/convention_dubai_04.jpg",
  },
  {
    title: "Teamwork and Collaboration",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quasi, deserunt excepturi minima eligendi explicabo recusandae! Dolorum, laboriosam dignissimos.",
    price: 13,
    img: "https://www.raksotravel.com/Content/img/mice/convention_dubai_04.jpg",
  },
  {
    title: "Teamwork and Collaboration",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quasi, deserunt excepturi minima eligendi explicabo recusandae! Dolorum, laboriosam dignissimos.",
    price: 13,
    img: "https://www.raksotravel.com/Content/img/mice/convention_dubai_04.jpg",
  },
];
export default function YourPeopleSKills() {
  const item = items.map((i, key) => {
    return (
      <>
        <div key={key}>
          <div>
            <img src={i.img} alt="" />
          </div>
          <div className="py-3">
            <h3 className="text-[18px] font-poppins font-extrabold">
              {i.title}
            </h3>
            <p className="text-sm max-h-12 text-ellipsis line-clamp-2 mb-4">
              {i.desc}
            </p>
            <div className="text-[18px] text-[#D62048] font-poppins font-extrabold">
              $ {i.price}
            </div>
            <button className="border w-40 h-14 bg-customDark text-customWhite text-[16px] font-semibold mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 2,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <section className="min-h-max bg-customWhite">
        <div className="container py-14">
          <div className="md:flex grid gap-3 justify-between p-5">
            <div>
              <h4 className="text-lg font-poppins font-extrabold">
                Your People Skills
              </h4>
              <p>
                Focuses on developing not just your complex problem solving and
                critical thinking but as well as your creativity and innovation.
              </p>
            </div>
            <div>
              <div className="container text-2xl text-customDark flex justify-end space-x-8 xl:px-14 px-5">
                <button
                  className="w-10 h-10 border-2 border-customDark rounded-full hover:text-customYellow hover:border-customYellow"
                  type="button"
                  onClick={() => slider?.current?.slickPrev()}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  className="w-10 h-10 border-2 border-customDark rounded-full hover:text-customYellow hover:border-customYellow"
                  type="button"
                  onClick={() => slider?.current?.slickNext()}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className=" md:px-5">
            <Slider ref={slider} {...settings}>
              {item}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
