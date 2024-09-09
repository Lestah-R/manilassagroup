import { Link } from "react-router-dom";
import Page from "../components/Page";

function ContactPage() {
  return (
    <>
      <Page title="Contact Us">
        <section className="min-h-max bg-customDark py-20">
          <div className="container px-5 grid gap-20">
            <div className="grid gap-5" data-aos="fade-up">
              <h1 className="text-xl font-bold font-poppins text-customWhite">
                How can we help you?
              </h1>
              <p className="text-sm text-customWhite">
                Leave your email address or phone number, and we will get in
                touch with you soon.
              </p>
            </div>
            <form
              action=""
              className="grid gap-5 lg:block lg:space-x-5 md:max-w-screen-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type="text"
                placeholder="Your Email or Phone Number"
                className="w-full lg:max-w-[561px] lg:max-w-auto
            bg-customDark2 text-left text-[16px] font-[400] leading-[22px] text-white p-4 border border-customGray outline-none"
              />
              <button
                type="submit"
                className="w-full lg:max-w-36 bg-customWhite text-[16px] font-semibold leading-[22px] text-customDark py-4 hover:text-customYellow hover:border hover:border-customYellow"
              >
                Submit
              </button>
              <p className="text-center lg:text-right lg:px-10 lg:py-3 text-sm italic text-gray-400 px-3">
                By clicking the submit button, you agree to our terms and
                privacy policy.
              </p>
            </form>
          </div>
          <div
            className="container px-5 mt-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-10 border-b border-customWhite py-9">
              <p className="text-sm italic text-gray-400 min-w-14">Contact</p>
              <p className="text-sm font-bold text-customWhite">
                +971 50 429 3546
              </p>
            </div>
            <div className="flex items-center gap-10 border-b border-customWhite py-9">
              <p className="text-sm italic text-gray-400 min-w-14">Email</p>
              <p className="text-sm font-bold text-customWhite">
                contact@ssagroup.com
              </p>
            </div>
            <div className="flex items-start gap-10 border-b border-customWhite py-9">
              <p className="text-sm italic text-gray-400 min-w-14 align-top">
                Address
              </p>
              <p className="text-sm font-bold text-customWhite lg:max-w-sm">
                Level 17, Office Tower, The World Trade Center Al Markaziya, Abu
                Dhabi P.O. Box 387.
              </p>
            </div>
          </div>
        </section>
      </Page>
    </>
  );
}

export default ContactPage;
