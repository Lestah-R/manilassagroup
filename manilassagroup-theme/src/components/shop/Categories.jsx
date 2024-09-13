import React from "react";

export default function Categories() {
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="container lg:flex grid text-customWhite px-5 py-14 lg:gap-20 gap-5">
          <div className="lg:max-w-[572px]">
            <h4 className="text-[22px] font-extrabold leading-[30px] font-poppins">
              Future-Proof yourself, your team, and your business by taking our
              eCourses! You can now learn at your own pace, time, and
              convenience! Our eCourses are designed to help you acquire, hone,
              and refine the soft skills which are vital in IR 4.0’s
              ever-changing workplace.
            </h4>
          </div>
          <div className="max-w-[378px]">
            <p className="text-sm font-bold">
              Choose from any of the three clusters that we offer to upgrade
              your skills:
            </p>
            <ul className="text-sm p-5 space-y-3">
              <li>
                <i class="fa-solid fa-brain mr-3"></i> Your Thinking Skills
              </li>
              <li>
                <i class="fa-solid fa-user-group mr-3"></i>Your People Skills
              </li>
              <li>
                <i class="fa-solid fa-suitcase mr-3"></i> Essential Skills for
                Supervisors
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
