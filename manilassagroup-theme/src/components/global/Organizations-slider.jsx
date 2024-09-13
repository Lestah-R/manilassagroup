import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const organizations = [
  {
    title: "Innovations",
    date: "June 25, 2024",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui similique quae laborum, rerum earum autem id. Similique quibusdam qui, quisquam veniam repudiandae molestiae eaque sequi dicta, magnam ex fuga laborum!",
    imgUrl: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
  },
  {
    title: "TEST",
    date: "June 29, 2024",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui similique quae laborum, rerum earum autem id. Similique quibusdam qui, quisquam veniam repudiandae molestiae eaque sequi dicta, magnam ex fuga laborum!",
    imgUrl: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
  },
  {
    title: "TEST2",
    date: "June 29, 2024",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui similique quae laborum, rerum earum autem id. Similique quibusdam qui, quisquam veniam repudiandae molestiae eaque sequi dicta, magnam ex fuga laborum!",
    imgUrl: "https://s3-alpha-sig.figma.com/img/c11f/3c10/741a32f48152ba445e21d4a1c51a02f2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW237LJkQSaESnQ3NMtouBNvb3sEnxcYDtxzzmbY9~8-oub9BESvxZrdwtK67NaeanCUhfagW2e0ehVdGf7FWgLnmag6ZSjjI8CvRZt26HnZLJkMj2~X~58jRxeDEJpT2LIrwvJSJGSbthu9bsrosiJkvAWgtigF26rsx9snE-hxxqEfJ9r4Bvcywa41PH6-JHG8wZqn2JuFK5eyN-SQhle9F0goucfzbSAFLeI7PlpkVWH2VuD1RUHtByUivZEKO0keB9hFIC0aONywa7R3JmPwaw7RxUUup8uVZWbc69TFiPV4VgkpKnQdWkT89aV6AQH5goRt38YmQvm~vX8KzA__",
  },
  {
    title: "TEST4",
    date: "June 29, 2024",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui similique quae laborum, rerum earum autem id. Similique quibusdam qui, quisquam veniam repudiandae molestiae eaque sequi dicta, magnam ex fuga laborum!",
    imgUrl: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
  },
];

export default function OrganizationsSlider() {
  const orgItem = organizations.map((i, key) => {
    return (
      <div className='border border-customGray3' key={key}>
        <a href='' class='block group relative w-full'>
          <div>
            <img src={i.imgUrl} alt='' className='object-cover md:h-[500px]' />
            <div className='absolute z-10 bottom-0 bg-[linear-gradient(180deg, rgba(0, 0, 0, 0) 50.12%, rgba(0, 0, 0, 0.8) 96.05%)]'>
              <div className='inline-flex justify-between w-full p-3'>
                <p className='text-[12px] font-[600] leading-[22px] text-customDark bg-customWhite px-5 rounded-xl hover:text-customYellow'>{i.title}</p>
                <p className='text-sm text-customGray2 italic'>{i.date}</p>
              </div>
              <p className='text-customWhite text-sm text-justify max-h-16 text-ellipsis line-clamp-3 mb-4 px-3'>{i.description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 2,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <section className='min-h-max bg-customDark'>
        <div className='container py-20'>
          <h3 className='text-customWhite font-poppins font-bold text-lg mb-10 px-5 sm:px-0'>What's New</h3>
          <Slider {...settings}>{orgItem}</Slider>
        </div>
      </section>
    </>
  );
}
