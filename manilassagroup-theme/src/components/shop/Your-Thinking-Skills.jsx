import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "Complex Problem Solving",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quasi, deserunt excepturi minima eligendi explicabo recusandae! Dolorum, laboriosam dignissimos.",
    price: 13,
    img: "https://www.raksotravel.com/Content/img/mice/convention_dubai_04.jpg",
  },
  {
    title: "Critical Thinking",
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
    title: "Complex Problem Solving",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis quasi, deserunt excepturi minima eligendi explicabo recusandae! Dolorum, laboriosam dignissimos.",
    price: 13,
    img: "https://www.raksotravel.com/Content/img/mice/convention_dubai_04.jpg",
  },
];
export default function YourThinkingSKills() {
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

  return (
    <>
      <section className="min-h-max bg-customWhite">
        <div className="container py-14">
          <div className="p-5">
            <h4 className="text-lg font-poppins font-extrabold">
              Your Thinking Skills
            </h4>
            <p>
              Focuses on developing not just your complex problem solving and
              critical thinking but as well as your creativity and innovation.
            </p>
          </div>
          <div className=" md:px-5">
            <Slider {...settings}>{item}</Slider>
          </div>
        </div>
      </section>
    </>
  );
}
