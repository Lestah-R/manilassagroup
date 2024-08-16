import React from "react";

export default function Hero() {
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="container grid lg:grid-cols-2 px-5 py-16 gap-16 lg:gap-72">
          <div className="text-customWhite space-y-8">
            <h2 className="text-xl font-poppins font-bold">
              Give your organization an advantage
            </h2>
            <p className="text-sm">
              SSA Training and Consulting is an integrated consulting firm that
              offers consultancy services in Human Capital Development,
              Productivity and Quality Management, Financial Management,
              Organizational Development, and Leadership, as well as
              Entrepreneurship Development.
            </p>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/cd05/b130/3082538eaa068a66d44fde949333458f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfc1gAqtnBXNhkOxBdHe0wDh4AVqOOJ-obrSBY5gS1HNHCcaPPWtKldjHwBwb5JnsmuIRrMxGhpIz6yHgUZbJqVHIHPDIUxfeU~-SvnEy7l2nhP6roo2cW0w6jpK0kT3YcvH-OWtuj8lpiTnyoVZQ7GkqSqF6avrFMW~qcLXwaoLdWvkWDhU3oZt-G~eqVjXjydQ5pPpfvM~3JLDg~UuJaDhJQqJohfe-yUYPhQms8OJXdlWvRd~s863iHNSBX5d4yTB4GcGTmj9hD6iCklA2mYaI-8hvKbmFR40Ag3DJghXr6roCppT-nNZTEZni9gjS~76xwPPnYHxFfaIkJ4tMA__"
              alt="Man and Woman discussing"
              className="max-h-64 object-cover w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
