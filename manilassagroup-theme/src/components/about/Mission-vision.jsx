import React from "react";

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
              src="https://s3-alpha-sig.figma.com/img/42e6/f130/16140a81ea1f89d43071aa53373925c5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fcKse1WamIUTILKvcPahuGG28ccpp24D89A8MwDgeGRbxp7lLgi-dhFTFkY1O1J8P~AgoGWR-78HYQ~5iJH7n3WN8qumCNdlo1v-JLOHNG0VCfZ9BFu~CQycE~nXZi-v0C~Nxf~qHfPm0KNhR5i8dfRQa4ra-P6EE6l2sR3MAau7FsZ9bavvu4esKSMLXzgZ-lUy~yEGYWuDv7qhQlmXUIUEx3wfb5O1rgQ0LBB23efXeOzpZbfdfiv6C6oKJQFU8iQT06zmHY8B5QGru1Vr9IrdbLCwUNVSqSJY~tIN0MMzRH4zAeS1DH50oFin2ovQo3no6iwMRkkLt9l-N0dpqg__"
              alt="Man with laptop"
              className="object-contain w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
