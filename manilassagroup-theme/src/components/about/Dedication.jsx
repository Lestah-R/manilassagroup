import React from "react";

export default function Dedication() {
  const lists = [
    {
      title: "Dedication",
      description:
        "We shall consistently conduct ourselves with professionalism commitment and passion, knowing that we will make a difference to our client",
      icon: "fa-solid fa-heart",
    },

    {
      title: "Integrity",
      description:
        "We conduct ourselves with the highest ethical standards as required by the professions that we belong to.",
      icon: "fa-solid fa-scale-balanced",
    },
    {
      title: "Excellence",
      description:
        "We believe in setting and achieving exemplary and world-class standards in all aspects of our services, striving to not only meet but exceed our clients’ expectations.",
      icon: "fa-solid fa-award",
    },
    {
      title: "Respect",
      description:
        "We regard our clients, partners, associates, employees, community and the environment with utmost respect and due care.",
      icon: "fa-solid fa-handshake-simple",
    },

    {
      title: "Versatility",
      description: "We are flexible and responsive to our clients’ needs.",
      icon: "fa-solid fa-up-down-left-right",
    },
  ];

  const listElement = lists.map((i, key) => {
    return (
      <>
        <div className="flex gap-6 py-8 border-b border-customGray3" key={key}>
          <div>
            <i class={`${i.icon} text-[20px]`}></i>
          </div>
          <div className="grid gap-5">
            <h4 className="text-md">{i.title}</h4>
            <p className="text-xs">{i.description}</p>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <section className="min-h-max bg-customDark">
        <div className="container grid lg:grid-cols-2 lg:gap-16 px-5 text-customWhite py-14">
          <div>
            <h3 className="text-lg font-bold font-poppins lg:max-w-[514px]">
              Over the years, we have helped enterprises, both large and small,
              to see beyond their perceived limitations and ushered them towards
              a new phase of dynamism and innovation
            </h3>
          </div>
          <div>{listElement}</div>
        </div>
      </section>
    </>
  );
}
