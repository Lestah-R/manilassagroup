import React from "react";

const offers = [
  {
    title: "Set of 3",
    discount: "8%",
    desc: "Access to any 3 eCourses",
    price: 8,
  },
  {
    title: "Set of 3",
    discount: "8%",
    desc: "Access to any 3 eCourses",
    price: 8,
  },
  {
    title: "Set of 3",
    discount: "8%",
    desc: "Access to any 3 eCourses",
    price: 8,
  },
];
export default function SpecialOffers() {
  const offer = offers.map((i, key) => {
    return (
      <>
        <div
          className="border bg-customWhite grid items-center gap-3 justify-center text-center py-5 min-h-[284px]"
          key={key}
        >
          <h3 className="text-lg font-poppins font-extrabold">{i.title}</h3>

          <div>
            <div className="text-[14px] tracking-wide text-customGray3">
              {i.discount} DISCOUNT
            </div>

            <p>{i.desc}</p>
          </div>
          <div className="text-md text-[#d62048] font-poppins font-extrabold">
            $ {i.price}
          </div>

          <button className="border max-w-40 h-14 bg-customDark text-customWhite text-[16px] font-semibold">
            Add to Cart
          </button>
        </div>
      </>
    );
  });
  return (
    <>
      <section className="min-h-max">
        <div className="container px-5 py-14">
          <h4 className="text-center text-xl font-poppins font-extrabold mb-10">
            Check out our Special Offers
          </h4>

          <div className="grid grid-cols-3 gap-10">{offer}</div>
        </div>
      </section>
    </>
  );
}
