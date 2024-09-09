import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "Lorem ipsum dolor sit amet",
    date: "Mon, June 26,2024, 9:00 AM",
    organizer: "John Smith",
    img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP~GdlUCIfOWhwaAEarjcTiytuaz8rQB7GPxN2N7Xn5noR~zbdATqr0FGqtLkK8BVw3GQ7y0TW8L6ebB1fxCESlPABYtX6Iv7QxhbT~5cOwUUW1zd0tyuOVBYOejy4TQw-VX2DMCHcGod~EQc7raa~2vdMzxxJuize8zLZOEqi8VGjZ1CcPfUgSwTTE5lrvZGK4iLP8t-BgkrI69xyBivSEkdsegi5k2xWKt3DqFw4WsSXQ~fXH4iQnmcWkoCcQD4BwLkeq~ybPkN0auDsDO--3no05hqyAz5m6C6uCdor4E4zbuiZhwudoIKAJ0DXkqVJQHGA7itIXjGlhwuY53zQ__",
  },
  {
    title: "Lorem lsahjda lajsda dasjl",
    date: "Mon, June 26,2024, 9:00 AM",
    organizer: "John Smith",
    img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP~GdlUCIfOWhwaAEarjcTiytuaz8rQB7GPxN2N7Xn5noR~zbdATqr0FGqtLkK8BVw3GQ7y0TW8L6ebB1fxCESlPABYtX6Iv7QxhbT~5cOwUUW1zd0tyuOVBYOejy4TQw-VX2DMCHcGod~EQc7raa~2vdMzxxJuize8zLZOEqi8VGjZ1CcPfUgSwTTE5lrvZGK4iLP8t-BgkrI69xyBivSEkdsegi5k2xWKt3DqFw4WsSXQ~fXH4iQnmcWkoCcQD4BwLkeq~ybPkN0auDsDO--3no05hqyAz5m6C6uCdor4E4zbuiZhwudoIKAJ0DXkqVJQHGA7itIXjGlhwuY53zQ__",
  },
  {
    title: "Test event 3!!",
    date: "Mon, June 26,2024, 9:00 AM",
    organizer: "John Smith",
    img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP~GdlUCIfOWhwaAEarjcTiytuaz8rQB7GPxN2N7Xn5noR~zbdATqr0FGqtLkK8BVw3GQ7y0TW8L6ebB1fxCESlPABYtX6Iv7QxhbT~5cOwUUW1zd0tyuOVBYOejy4TQw-VX2DMCHcGod~EQc7raa~2vdMzxxJuize8zLZOEqi8VGjZ1CcPfUgSwTTE5lrvZGK4iLP8t-BgkrI69xyBivSEkdsegi5k2xWKt3DqFw4WsSXQ~fXH4iQnmcWkoCcQD4BwLkeq~ybPkN0auDsDO--3no05hqyAz5m6C6uCdor4E4zbuiZhwudoIKAJ0DXkqVJQHGA7itIXjGlhwuY53zQ__",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "Mon, June 26,2024, 9:00 AM",
    organizer: "John Smith",
    img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP~GdlUCIfOWhwaAEarjcTiytuaz8rQB7GPxN2N7Xn5noR~zbdATqr0FGqtLkK8BVw3GQ7y0TW8L6ebB1fxCESlPABYtX6Iv7QxhbT~5cOwUUW1zd0tyuOVBYOejy4TQw-VX2DMCHcGod~EQc7raa~2vdMzxxJuize8zLZOEqi8VGjZ1CcPfUgSwTTE5lrvZGK4iLP8t-BgkrI69xyBivSEkdsegi5k2xWKt3DqFw4WsSXQ~fXH4iQnmcWkoCcQD4BwLkeq~ybPkN0auDsDO--3no05hqyAz5m6C6uCdor4E4zbuiZhwudoIKAJ0DXkqVJQHGA7itIXjGlhwuY53zQ__",
  },
];

export default function EventsSlider() {
  const eventSliderItem = events.map((i) => {
    return (
      <>
        <div className="grid gap-3">
          <div>
            <img
              src={i.img}
              alt=""
              className="max-h-[173px] w-full object-cover"
            />
          </div>
          <div className="grid gap-2">
            <p className="text-sm text-customGray2">{i.date}</p>
            <h3 className="text-md text-customWhite font-bold">
              {i.title}
              <span className="block text-[15px] font-light">
                by {i.organizer}
              </span>
            </h3>
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
      <section className="min-h-max bg-customDark">
        <div className="container px-5 text-customWhite">
          <h4 className="text-lg font-bold">Past Events</h4>
          <div className="py-10">
            <Slider ref={slider} {...settings}>
              {eventSliderItem}
            </Slider>
          </div>
          <div className="container text-2xl text-customWhite flex justify-end space-x-8">
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
      </section>
    </>
  );
}
