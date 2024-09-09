import React from "react";

const services = [
  {
    title: "Consulting",
    sub: "See beyond limitations",
    url: "/consulting",
  },
  {
    title: "Training",
    sub: "Pursue excellence",
    url: "/training",
  },
  {
    title: "Innovations",
    sub: "Move Forward",
    url: "",
  },
];

export default function WhatWeOffer() {
  const servicesElement = services.map((i) => {
    return (
      <a
        href={i.url}
        className="border-y border-customGray3 md:border-none hover:-translate-y-2 ease duration-300"
      >
        <div className="py-8 px-5 md:py-5">
          <h4 className="text-customWhite text-md">
            {i.title}
            <span className="float-end -rotate-45">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </h4>
          <sub className="text-sm text-customYellow italic">{i.sub}</sub>
        </div>
      </a>
    );
  });
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="">
          <h3 className="uppercase text-sm tracking-wide text-customGray3 p-5 sm:container md:hidden py-5">
            What We Offer
          </h3>
          <div className="md:border-y border-customGray3 md:py-10">
            <h3 className="uppercase text-sm tracking-wide text-customGray3 px-5 sm:container hidden md:block mb-3">
              What We Offer
            </h3>
            <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:container">
              {servicesElement}
            </div>
          </div>
        </div>
        <div className="bg-suit-pattern min-h-[464px] bg-no-repeat bg-cover bg-[calc(55%_-_50px)_50%] md:bg-top grid items-end pb-10 px-5">
          <div className="sm:container">
            <h3 className="text-customWhite font-poppins text-[22px] font-bold max-w-[232px] sm:max-w-[430px]">
              Our primary purpose is simple: to unleash the potential that
              exists within organisations and people.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
