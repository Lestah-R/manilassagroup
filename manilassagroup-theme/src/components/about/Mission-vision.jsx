import React from "react";

import manWithLaptop from "../../assets/images/about-page/man-with-laptop.png";

export default function MissionVision() {
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="container grid lg:grid-cols-2 gap-20 px-5 py-20">
          <div className="text-customWhite space-y-10 lg:max-w-[552px] order-last lg:order-first">
            <h3 className="text-lg font-poppins font-bold">
              We are committed to making a difference for our clients
            </h3>
            <div className="grid gap-5">
              <h4 className="uppercase text-customGray3 tracking-wide">
                Mission
              </h4>
              <p className="text-sm">
                Provide strategic and creative solutions to our clients’
                business challenges. Provide quality and innovative human
                capital development programmes. Pursue a win-win approach in our
                partnership with clients, partners, associates, employees and
                other stakeholders.
              </p>
            </div>
            <div className="grid gap-5">
              <h4 className="uppercase text-customGray3 tracking-wide">
                Vision
              </h4>
              <p className="text-sm">
                To be premier advisory and human capital development
                organisation well recognized for its distinctive and world-class
                services.
              </p>
            </div>
          </div>
          <div>
            <img
              src={manWithLaptop}
              alt="Man with laptop"
              className="object-cover w-full max-h-[430px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
