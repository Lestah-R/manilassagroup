import React, { useEffect } from "react";

function Footer() {
  return (
    <>
      <footer className="w-full min-h-max bg-customDark2">
        <div className="container flex flex-col text-customWhite md:flex-row md:justify-space py-10">
          <div className="p-5 xl:ml-60 shrink-0">
            <h2 className="text-[18px] font-bold uppercase">Our Products</h2>
            <ul className="text-customGray2 text-[18px] space-y-5 mt-5">
              <li className="hover:scale-110 origin-left transition-all duration-300 ease">
                <a href="training">Training</a>
              </li>
              <li className="hover:scale-110 origin-left transition-all duration-300 ease">
                <a href="consulting">Consulting</a>
              </li>
              <li className="hover:scale-110 origin-left transition-all duration-300 ease">
                <a href="https://innovations.ssagroup.com/">Innovations</a>
              </li>
            </ul>
          </div>
          <div className="p-5 xl:ml-24 shrink-0">
            <h2 className="text-[18px] font-bold uppercase">Sitemap </h2>
            <ul className="text-customGray2 text-[18px] space-y-5 mt-5">
              <li className="hover:scale-110 origin-left transition-all duration-300 ease">
                <a href="<?php echo esc_url(home_url()); ?>">About Us</a>
              </li>
              <li className="hover:scale-110 origin-left transition-all duration-300 ease">
                <a href="blog">Blogs</a>
              </li>
              <li className="hover:scale-110 origin-left transition-all duration-300 ease">
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="p-5 xl:ml-24 lg:shrink">
            <h2 className="text-[18px] font-bold">Our HQ</h2>
            <p className="text-customWhite text-[18px] space-y-2 mt-5">
              11 Eunos Road 8 #06-01/#07-01 (Lobby A), Lifelong Learning
              Institute, Singapore 408601
            </p>
          </div>
          <div className="shrink-0 p-5 md:-order-1">
            <div className="space-y-10">
              <img
                className="h-14"
                src="/ssa-logo.png"
                alt="ssagroup logo"
                id="logo"
              />
              <div
                id="footer-dropdown"
                className="flex items-center border-2 rounded-3xl w-[188px] h-10 p-1 cursor-pointer"
              >
                <img
                  className="h-7 w-7 object-fill rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/6d7b/da62/b107b8bc30658ca8c5df74f28006c2fe?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYrLGrvWstwfy5COCK4rAkDFqNbgXcAgHVpdnLiDfKYZqOijMQqYshKDvs-uZ7U9VaDEbNG0PnXNjNUeDz0gIMDhZKWSuI1fD5Xk~GFlmhXGhw-~OMY2tppjhvZodSTRnQut1ITAQbwROxCKaQfqJDAPt7glfvcBY3EF~xDk2pNK6Gn3B61ewoABeges~dv1SM3kI01Q5CY~GX2wydllEbMsEEXDzfVO2ummdt1p0T~l0mxs38NXwnnfL1VdC2gku2ccr1l2ACZ-e5T892m~MzKr54I44on7GZaIZtcNLYEiIylexmA7aAbuFqjwdlS28tt2062JesH7zF3YHBa4Tw__"
                  alt="UAE Flag"
                />
                <p className="ml-4 w-full mr-3 text-[14px] font-[400] leading-[24px]">
                  SSA UAE <i className="fas fa-chevron-down float-end mt-1"></i>
                </p>
              </div>
            </div>
            <div
              id="footer-dropdown-options"
              className="absolute hidden bg-white rounded-md px-4 w-44 text-black mt-2 ml-2 origin-top animate-open-menu"
            >
              <ul>
                <li className="py-2 my-2 border-b-2">
                  <a href="">SSA Group</a>
                </li>
                <li className="py-2 my-2">
                  <a href="">SSA Philippines</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full border-t-[1px]">
          <div className="container flex flex-col items-center md:flex-row md:justify-between py-10 space-y-3 md:space-y-0">
            <p className="text-customWhite">
              © 2024 SSA Group. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:flex-row md:space-x-8">
              <p className="text-customGray2">Terms & Privacy</p>
              <div className="text-customWhite text-2xl space-x-8 space-y-3 md:space-y-0">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-linkedin "></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
