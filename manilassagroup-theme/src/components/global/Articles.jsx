import React, { useEffect, useState } from "react";
import Axios from "axios";
import Slider from "react-slick";
import LoadingDotsIcon from "../LoadingDotsIcon";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Articles() {
  const [isLoading, setIsLoading] = useState(true);
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    async function fetchOrganisations() {
      try {
        const response = await Axios.get("/api/public-organisations");

        if (Array.isArray(response.data) && response.data.length > 0) {
          setOrganisations(response.data);
        } else {
          console.error("No organisations or unexpected format:", response.data);
          setOrganisations([]); // Handle empty or unexpected response
        }
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem fetching the organisations:", e);
        setIsLoading(false);
      }
    }
    fetchOrganisations();
  }, []);

  const orgItems = organisations.map((organisation, key) => (
    <div className='border border-customGray3' key={organisation.id}>
      <a href='' className='block group relative w-full'>
        <div>
          <img src={`${import.meta.env.VITE_API_BASE_URL}/storage/${organisation.photo}`} />
        </div>
        <div className='inline-flex justify-between w-full p-3'>
          <p className='text-[12px] font-[600] leading-[22px] text-customDark bg-customWhite px-5 rounded-xl hover:text-customYellow'>{organisation.name}</p>
          <p className='text-sm text-customGray2 italic'>{organisation.created_at}</p>
        </div>
        <p className='text-customWhite text-sm text-justify max-h-16 text-ellipsis line-clamp-3 mb-4 px-3'>{organisation.description}</p>
      </a>
    </div>
  ));

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

  if (isLoading) {
    return <LoadingDotsIcon />;
  }

  return (
    <section className='min-h-max bg-customDark'>
      <div className='container'>
        <h3 className='text-customWhite font-poppins font-bold text-lg mb-10 px-5 sm:px-0'>What's New</h3>
        <Slider {...settings}>{orgItems}</Slider>
      </div>
    </section>
  );
}
