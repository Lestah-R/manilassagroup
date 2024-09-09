import React from "react";

export default function Cta() {
  return (
    <section class="w-full min-h-max bg-customDark py-24">
      <div class="container flex flex-col sm:items-center text-customWhite px-5">
        <h1 class="text-xl font-bold font-poppins sm:text-center lg:max-w-3xl">
          Ready to transform and maximize your business to its fullest
          potential?
        </h1>
        <button class="font-semibold font-poppins border border-customGray3 w-[201px] mt-10 py-[12px] hover:text-customYellow hover:border-customYellow">
          Get to Know Us
        </button>
      </div>
    </section>
  );
}
