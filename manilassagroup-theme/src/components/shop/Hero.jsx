import React from "react";

export default function Hero() {
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="max-w-[784px] m-auto px-5 py-20 lg:text-center text-customWhite space-y-3">
          <h3 className="text-xl font-bold font-poppins">
            Make your workforce reach their highest potential
          </h3>
          <p className="text-sm font-light">
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
