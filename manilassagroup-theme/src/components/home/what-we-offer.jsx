import React from "react";

export default function WhatWeOffer() {
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div>
          <h3 className="uppercase text-sm tracking-wide text-customGray3 p-5 sm:container md:hidden">
            What We Offer
          </h3>
          <div className="md:border-y border-customGray3 md:py-5">
            <h3 className="uppercase text-sm tracking-wide text-customGray3 px-5 sm:container hidden md:block">
              What We Offer
            </h3>
            <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:container">
              <a href="" className="border-y border-customGray3 md:border-none">
                <div className="py-8 px-5 md:py-5">
                  <h4 className="text-customWhite text-md">
                    Consulting
                    <span className="float-end -rotate-45">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </h4>
                  <sub className="text-sm text-customYellow italic">
                    See beyond Limitations
                  </sub>
                </div>
              </a>
              <a href="" className="border-y border-customGray3 md:border-none">
                <div className="py-8 px-5 md:py-5">
                  <h4 className="text-customWhite text-md">
                    Consulting
                    <span className="float-end -rotate-45">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </h4>
                  <sub className="text-sm text-customYellow italic">
                    See beyond Limitations
                  </sub>
                </div>
              </a>
              <a href="" className="border-t border-customGray3 md:border-none">
                <div className="py-8 px-5 md:py-5">
                  <h4 className="text-customWhite text-md">
                    Consulting
                    <span className="float-end -rotate-45">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </h4>
                  <sub className="text-sm text-customYellow italic">
                    See beyond Limitations
                  </sub>
                </div>
              </a>
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
