import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Hero() {
  return (
    <>
      <section className="min-h-max bg-customDark py-20">
        <div className="container grid gap-5 lg:gap-10 lg:grid-cols-2 text-customWhite px-5">
          <div>
            <h2 className="text-xl font-bold font-poppins" data-aos="fade-up">
              Transforming Organizations and People through Capacity and
              Capability Buildings s
            </h2>
          </div>
          <div data-aos="fade-left">
            <p>
              Mabuhay! Part of SSA Group, a conglomerate that offers expert
              services in the fields of management consulting, training, and
              technology solutions, SSA Consulting Group Services International
              exists to assist organisations in developing customised programmes
              and solutions to address challenges and key concerns in human
              capital development.
            </p>
            <a
              href=""
              className="font-semibold font-poppins border w-[201px] mt-10 py-4 px-2 block text-center hover:text-customYellow hover:border-customYellow"
            >
              Get to Know Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
