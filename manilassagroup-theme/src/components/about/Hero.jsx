import React from "react";

export default function Hero() {
  return (
    <>
      <section className="min-h-[300px] bg-cover bg-about-hero bg-center">
        <div className="container pt-40 px-5 pb-20 text-customWhite space-y-5">
          <h1 className="font-poppins font-bold text-xl max-w-[685px]">
            Inspiring Career Excellence Through Limitless Experience
          </h1>
          <p className="text-sm max-w-[685px]">
            Through our services, we provide customised workplace learning on
            demand and we help design talent framework that would allow our
            customers to maximise their fullest human capital potential.
          </p>
        </div>
      </section>
    </>
  );
}
