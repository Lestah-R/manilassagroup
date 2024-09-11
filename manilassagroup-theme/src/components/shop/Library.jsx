import React from "react";

export default function Library() {
  return (
    <>
      <section className="min-h-max bg-customWhite">
        <div className="container px-5 py-14 space-y-8">
          <h3 className="text-lg font-poppins font-extrabold">Library</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="md:flex grid gap-5 lg:grid-cols-2">
              <div className="flex justify-center">
                <img
                  src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"
                  alt=""
                  className="object-cover sm:max-w-44 sm:max-h-64 min-h-max w-full"
                />
              </div>
              <div className="flex flex-col w-full justify-between px-2 gap-2 sm:gap-0">
                <p className="font-sm italic text-[#BBBBBB]">
                  Application/Pdf <span className="float-end">18.14MB</span>
                </p>
                <h2 className="text-[18px] font-extrabold font-poppins">
                  The Evolution of Teaching and Learning Towards the Digital Age
                </h2>
                <p className="text-sm max-h-12 text-ellipsis line-clamp-2 mb-4">
                  This book explores the application of technology on classical
                  learning theories and how students learn in the digital age.
                  It also includes
                </p>
                <p className="text-[22px] text-[#D62048] font-extrabold">
                  $6.81
                </p>
                <button
                  href=""
                  className="border max-w-40 h-14 bg-customDark text-customWhite text-[16px] font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="md:flex grid gap-5 lg:grid-cols-2">
              <div className="flex justify-center">
                <img
                  src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"
                  alt=""
                  className="object-cover sm:max-w-44 sm:max-h-64 min-h-max w-full"
                />
              </div>
              <div className="flex flex-col w-full justify-between px-2 gap-2 sm:gap-0">
                <p className="font-sm italic text-[#BBBBBB]">
                  Application/Pdf <span className="float-end">18.14MB</span>
                </p>
                <h2 className="text-[18px] font-extrabold font-poppins">
                  The Evolution of Teaching and Learning Towards the Digital Age
                </h2>
                <p className="text-sm max-h-12 text-ellipsis line-clamp-2 mb-4">
                  This book explores the application of technology on classical
                  learning theories and how students learn in the digital age.
                  It also includes
                </p>
                <p className="text-[22px] text-[#D62048] font-extrabold">
                  $6.81
                </p>
                <button
                  href=""
                  className="border max-w-40 h-14 bg-customDark text-customWhite text-[16px] font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
