import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companyImg = [
  {
    name: "Home Credit",
    url: "https://s3-alpha-sig.figma.com/img/ccf5/9cf9/147a33919c505a92e0c55ba43cf13570?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6MYGQRSp2aFHpyp~1JAp9zZmM85IoqNRGGG6BqpiawZ6hdZXI8hWYi2JrPEqw-YqhvzUwG7CJ0oVpNNn6uNZrVaIDwntwO3g67TCpR7ZCPC4lSvdSMgG45UrzD3hHhfEpkRyVCfc5y-1Xz2KFMelzyRbS8gD9EwkBkDAwAG2Qerc-nGND7N2UW8LIAWwI30dTA9oOa95~rf7bmgGa3AgqH8w6jBG9WK6L5ElIcBxcy1wXe1Ii5UAUuk4wjHXLK-3gvj5eb4BuSy6neDjdag1LhFuJH8RhEACNjwbC2fJMryjFDRB85JOOKuLjDpYegWMzH1EJpt4nC0X3exPYAAQg__",
  },
  {
    name: "North Luzon Renewables",
    url: "https://s3-alpha-sig.figma.com/img/7677/9fe8/50155d45543129f31f3ca1ff756f2a1c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmTzVTRo4y1qhkziWVWou~BB8PZTu-AiQkF0O6h9nAIcnfayZBfVhwwYR70m38DqeR0jNuSKoUiH9x3Lzs2VPx1UDZ0T0wrVb~P2Rpm8JEU5GNxPswVHddpPWV-m3yXEQ58y~wYjLjLK~WvwDEhbAZliyQDJ0jDBKpbYdqn2Pof4fwqp1cxm7G5Tz9kGezpkwqLK9QsHql7YLVQvuFdXqV9TMb-b909Ts0yLH~JyQTY~0QYO4zlf9LLslGH1CUOeTqpbJ92~aO2NAv-1eJ78aHhzazgYpaPlIHoZFuaNNidm4pOFEpkayKBLAH1vQ5~hx-Dfkor8zf-cmxKF2qgdfQ__",
  },
  {
    name: "DDT Konstract Inc",
    url: "https://s3-alpha-sig.figma.com/img/bf58/7429/f87d410ec6f9737386a7a941c26cdc1f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l3e8eKhlYGxvtnkQFB-7FPa5vHsBdvcDOMlxk89lBoPT-M0DRZKZxA3FhZwid4VOxb6PMtPaWOJtDqvYA0xxrEWIolQOVs6B7MImwwsfpUrxNDYJAnNnm36xU~-JZHurJc6x6HMKHpW2bkI-wQi-xJmswE49i4XnBYE4unyEOMqStH4TYFrhExi9q~x4eQBD3pfOOZ0SmCWZgQy6KOLdogo3R66kjKWsAfKH3Tl4HCCVWtyQaT5bQI7GSJuphFbdvkWgVh8AOzzWVRtdl6UckNkwGuezNj7W~45DTb9KiuTNaMN28FsF5SBLk9yWOk~4ppqgme52GE8JK3BeTfHPlA__",
  },
];

export default function Companies() {
  const company = companyImg.map((i, key) => {
    return (
      <img
        src={i.url}
        alt={i.name}
        className="object-contain max-h-24"
        key={key}
      />
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
  };

  const slider = React.useRef(null);

  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="container py-12 px-5 lg:px-0">
          <h3 className="text-lg font-poppins font-bold text-customWhite">
            Companies we've worked with
          </h3>
          <div className="hidden sm:flex justify-center gap-20 mt-10">
            {company}
          </div>

          <div className="sm:hidden">
            <Slider ref={slider} {...settings}>
              {company}
            </Slider>
            <div className="container text-2xl text-customWhite flex justify-end space-x-8 xl:px-14 px-5">
              <button
                className="w-10 h-10 border-2 rounded-full hover:text-customYellow hover:border-customYellow"
                type="button"
                onClick={() => slider?.current?.slickPrev()}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                className="w-10 h-10 border-2 rounded-full hover:text-customYellow hover:border-customYellow"
                type="button"
                onClick={() => slider?.current?.slickNext()}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
