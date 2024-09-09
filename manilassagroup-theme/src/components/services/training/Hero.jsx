import React from "react";

export default function Hero() {
  return (
    <>
      <section className="min-h-[300px] bg-cover bg-hero-pattern bg-center">
        <div className="container pt-40 px-5 pb-20 text-customWhite space-y-5 text-center max-w-[784px]">
          <h1 className="font-poppins font-bold text-xl">
            Make your workforce reach their highest potential
          </h1>
          <p className="text-sm">
            SSA Training and Consulting offers training services for rank and
            file employees up to managers, supervisors, and executives. Our
            trainers are passionate in accompanying trainees in their lifelong
            learning journeys.
          </p>
        </div>
      </section>
    </>
  );
}
