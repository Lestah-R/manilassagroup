import React, { useState } from "react";

export default function Accordion() {
  const accordionContext = [
    {
      title: "Human Capital Development",
      content: (
        <>
          <p class="text-xs text-customWhite pr-5 sm:pl-20 pl-12">
            Evaluate and improve your financial capabilities to get the most out
            of your capital. With expertise in financial management, SSA Group
            can customize and develop accounting solutions that cater to your
            needs. Contact us today and explore our financial management
            projects which include:
          </p>
          <ul class="text-xs text-customWhite pr-5 sm:pl-24 pl-16 mt-5 list-disc">
            <li>Cash Flow and Working Capital Management</li>
            <li>Financial Controls</li>
            <li>Financial Assessment and Planning for Growth</li>
            <li>Planning and Budgeting</li>
          </ul>
        </>
      ),
      img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
    },
    {
      title: "Human Capital Development",
      content: (
        <>
          <p class="text-xs text-customWhite pr-5 sm:pl-20 pl-12">
            Evaluate and improve your financial capabilities to get the most out
            of your capital. With expertise in financial management, SSA Group
            can customize and develop accounting solutions that cater to your
            needs. Contact us today and explore our financial management
            projects which include:
          </p>
          <ul class="text-xs text-customWhite pr-5 sm:pl-24 pl-16 mt-5 list-disc">
            <li>Cash Flow and Working Capital Management</li>
            <li>Financial Controls</li>
            <li>Financial Assessment and Planning for Growth</li>
            <li>Planning and Budgeting</li>
          </ul>
        </>
      ),
      img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
    },
    {
      title: "Human Capital Development",
      content: (
        <>
          <p class="text-xs text-customWhite pr-5 sm:pl-20 pl-12">
            Evaluate and improve your financial capabilities to get the most out
            of your capital. With expertise in financial management, SSA Group
            can customize and develop accounting solutions that cater to your
            needs. Contact us today and explore our financial management
            projects which include:
          </p>
          <ul class="text-xs text-customWhite pr-5 sm:pl-24 pl-16 mt-5 list-disc">
            <li>Cash Flow and Working Capital Management</li>
            <li>Financial Controls</li>
            <li>Financial Assessment and Planning for Growth</li>
            <li>Planning and Budgeting</li>
          </ul>
        </>
      ),
      img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
    },
    {
      title: "Human Capital Development",
      content: (
        <>
          <p class="text-xs text-customWhite pr-5 sm:pl-20 pl-12">
            Evaluate and improve your financial capabilities to get the most out
            of your capital. With expertise in financial management, SSA Group
            can customize and develop accounting solutions that cater to your
            needs. Contact us today and explore our financial management
            projects which include:
          </p>
          <ul class="text-xs text-customWhite pr-5 sm:pl-24 pl-16 mt-5 list-disc">
            <li>Cash Flow and Working Capital Management</li>
            <li>Financial Controls</li>
            <li>Financial Assessment and Planning for Growth</li>
            <li>Planning and Budgeting</li>
          </ul>
        </>
      ),
      img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
    },
    {
      title: "Human Capital Development",
      content: (
        <>
          <p class="text-xs text-customWhite pr-5 sm:pl-20 pl-12">
            Evaluate and improve your financial capabilities to get the most out
            of your capital. With expertise in financial management, SSA Group
            can customize and develop accounting solutions that cater to your
            needs. Contact us today and explore our financial management
            projects which include:
          </p>
          <ul class="text-xs text-customWhite pr-5 sm:pl-24 pl-16 mt-5 list-disc">
            <li>Cash Flow and Working Capital Management</li>
            <li>Financial Controls</li>
            <li>Financial Assessment and Planning for Growth</li>
            <li>Planning and Budgeting</li>
          </ul>
        </>
      ),
      img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
    },
    {
      title: "Human Capital Development",
      content: (
        <>
          <p class="text-xs text-customWhite pr-5 sm:pl-20 pl-12">
            Evaluate and improve your financial capabilities to get the most out
            of your capital. With expertise in financial management, SSA Group
            can customize and develop accounting solutions that cater to your
            needs. Contact us today and explore our financial management
            projects which include:
          </p>
          <ul class="text-xs text-customWhite pr-5 sm:pl-24 pl-16 mt-5 list-disc">
            <li>Cash Flow and Working Capital Management</li>
            <li>Financial Controls</li>
            <li>Financial Assessment and Planning for Growth</li>
            <li>Planning and Budgeting</li>
          </ul>
        </>
      ),
      img: "https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN7r0GadwbSlZnx7RpZJ~Rl7fPaGahNhIcMWrKQMoX0F0BYFwD4XI7mMe71uwtqaw9gn6glc9xvRKoUTNHVQZ5JnCd2Me1n-rnFnHqa2fbFJNUuGxTgIaeicIpgUFSOEhBGFsq~v9hoGGCyxZL6zMsuK-7ipqZ0gvkc1fbDkdLSQIYOBWwBq5cw1zrFqarJyhxW82R0WPsVuuDnePmPvWbF6Z1fVNyR6bmaAJ-26HFE9zT9H3Rsvxc9WfZ6L9dA55iq1DnZIKRpraTDfuNmoT0sRAVPYzwxLkO8b4LNFImT0H74MHtwyl1VvzbOT5fL27eHT8sG3aC18GXDZWWKepg__",
    },
  ];

  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <section className="w-full min-h-max bg-customDark">
        <div className="container  mx-auto px-5 py-20">
          <div className="text-customWhite lg:grid lg:grid-col-2 space-y-5">
            <p className="text-sm italic text-gray-400">Services</p>
            <h2 className="text-lg font-bold font-poppins">
              Consulting Services to Transform Your Business
            </h2>
          </div>
          <div className="lg:grid lg:grid-cols-5 mt-10">
            <div className="col-start-2 col-span-5">
              {accordionContext.map((item, i) => {
                return (
                  <>
                    <div
                      id="accordion"
                      className="group outline-none accordion-section"
                      tabIndex={i}
                      key={i}
                      onClick={() => toggle(i)}
                    >
                      <div
                        id="accordion-title"
                        className="group flex justify-between py-10 items-center transition ease duration-500 cursor-pointer"
                      >
                        <div className="transition ease duration-500">
                          <h2 className="text-md text-customWhite inline-flex items-center mr-5">
                            <span className="text-xs text-gray-400 italic sm:mr-20 mr-12 self-start">
                              0{i + 1}
                            </span>
                            {item.title}
                          </h2>
                        </div>
                        <div
                          id="accordion-carret"
                          className={`transition ease duration-500 text-customWhite self-start ${
                            selected === i ? "rotate-180" : ""
                          }`}
                        >
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                      <div
                        id="accordion-content"
                        className={`max-h-0 px-4 overflow-hidden ease duration-500 ${
                          selected === i ? "max-h-screen" : ""
                        }`}
                      >
                        {item.content}
                        <img
                          src={item.img}
                          className="object-cover max-h-96 object-top w-full sm:pl-20 pl-12 mb-10 mt-5"
                        />
                      </div>
                    </div>
                    <hr className="px-6 border-customWhite"></hr>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
