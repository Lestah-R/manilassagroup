import React from "react";

const blogsList = [
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "TEST ARTICLE 2.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "BLAHBLABHAHBAKSH",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "TEST ARTICLE 2.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "BLAHBLABHAHBAKSH",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "TEST ARTICLE 2.",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
  {
    title: "BLAHBLABHAHBAKSH",
    date: "June 24,2024",
    img: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
    url: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae error pariatur voluptatem sed doloremque nam. Illum voluptates a fugit.",
  },
];
export default function BlogsGridList() {
  const blogGridList = blogsList.map((i, key) => {
    return (
      <>
        <a href={i.url} key={key}>
          <div
            className="group py-2 grid gap-2 overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={i.img}
              className="md:max-h-64 w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              alt=""
            />
            <p className="text-sm italic text-gray-400">{i.date}</p>
            <h1 className="text-md font-bold font-poppins">{i.title}</h1>
            <p className="text-sm text-justify max-h-12 text-ellipsis line-clamp-2 mb-4">
              {i.desc}
            </p>
          </div>
        </a>
      </>
    );
  });

  return (
    <>
      <section className="min-h-max w-full bg-customWhite">
        <div className="container py-10 px-5">
          <h2 className="text-lg font-bold font-poppins pb-10">All Blogs</h2>
          <div className="grid md:grid-cols-3 gap-10 auto-rows-fr">
            {blogGridList}
          </div>
        </div>
      </section>
    </>
  );
}
