import React from "react";

export default function Hero() {
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="container px-5 pb-10 text-customWhite py-10">
          <h1 className="text-lg font-bold font-poppins">Upcoming Event</h1>
          <div className="grid lg:grid-cols-2 lg:gap-16 py-10 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CP~GdlUCIfOWhwaAEarjcTiytuaz8rQB7GPxN2N7Xn5noR~zbdATqr0FGqtLkK8BVw3GQ7y0TW8L6ebB1fxCESlPABYtX6Iv7QxhbT~5cOwUUW1zd0tyuOVBYOejy4TQw-VX2DMCHcGod~EQc7raa~2vdMzxxJuize8zLZOEqi8VGjZ1CcPfUgSwTTE5lrvZGK4iLP8t-BgkrI69xyBivSEkdsegi5k2xWKt3DqFw4WsSXQ~fXH4iQnmcWkoCcQD4BwLkeq~ybPkN0auDsDO--3no05hqyAz5m6C6uCdor4E4zbuiZhwudoIKAJ0DXkqVJQHGA7itIXjGlhwuY53zQ__"
              alt=""
              className="max-h-[263px] w-full object-cover"
            />
            <div className="grid gap-5 lg:justify-between my-3 lg:my-0">
              <div className="grid gap-3">
                <p className="text-sm text-customGray2">
                  Mon, June 26, 2024, 9:00 AM
                </p>
                <h5 className="text-md text-customWhite font-bold">
                  Lorem ipsum dolor sit amet
                  <span className="text-[15px] block font-light">
                    by John Smith
                  </span>
                </h5>
                <p className="text-sm text-customWhite line-clamp-2 overflow-hidden max-h-[40px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  quia earum repellat? Excepturi sed, nostrum est eveniet
                  corrupti laborum voluptatibus animi esse beatae a dolor sit
                  ducimus voluptatum exercitationem ipsam.
                </p>
              </div>
              <a
                href=""
                className="w-[186px] h-[56px] border border-customGray3 py-3 px-10 font-semibold text-customWhite self-end hover:text-customYellow hover:border-customYellow"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
