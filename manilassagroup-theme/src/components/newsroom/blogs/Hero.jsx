import React from "react";

const blogs = [
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
  },
  {
    title: "TEST ARTICLE 2.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
  },
  {
    title: "BLAHBLABHAHBAKSH",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
  },
];
export default function Hero() {
  const blogElements = blogs.map((i, key) => {
    return (
      <>
        <a className="border-b border-customWhite" href={i.url} key={key}>
          <div className=" flex py-5 gap-5 lg:py-0">
            <img
              src={i.img}
              className="aspect-square lg:aspect-auto max-h-32 object-cover"
              alt=""
            />
            <div className="flex flex-col gap-5">
              <p className="text-sm text-customGray2 italic">{i.date}</p>
              <h2 className="text-[20px] font-bold leading-[26px] font-poppins text-customWhite line-clamp-3 overflow-hidden text-ellipsis">
                {i.title}
              </h2>
            </div>
          </div>
        </a>
      </>
    );
  });
  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="container py-20 px-5">
          <div className="container pb-10 text-customWhite space-y-5 mb-10 lg:mb-0">
            <h1 className="text-xl font-bold font-poppins">Insights</h1>
            <p className="text-sm lg:max-w-[784px]">
              Explore our current perspectives on the most important topics in
              the world of business and technology.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 lg:gap-20 gap-16">
            <div className="grid gap-5 lg:col-span-3">
              <a href="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__"
                  alt=""
                  className="object-cover max-h-44 w-full md:max-h-[316px]"
                />
                <div className="flex justify-between items-center mt-3">
                  <p className="text-xs font-semibold text-customDark bg-customWhite px-5 rounded-xl h-[22px]">
                    Innovations
                  </p>
                  <p className="text-sm text-customGray2 italic">
                    June 27, 2024
                  </p>
                </div>
                <h2 className="text-xl font-bold font-poopins text-customWhite">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <div className="text-sm mt-5 text-customWhite line-clamp-2 text-ellipsis overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque assumenda id ullam dolor eaque sapiente nulla magni
                  odio perferendis expedita.
                </div>
              </a>
            </div>
            <div className="grid lg:col-span-2 lg:gap-5">{blogElements}</div>
          </div>
        </div>
      </section>
    </>
  );
}
