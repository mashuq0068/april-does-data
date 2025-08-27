import React from "react";

interface Badge {
  title: string;
  description: string;
  image: string;
}

const badges: Badge[] = [
  {
    title: "Certified Bookkeeper",
    description: "Recognized for professional bookkeeping practices and standards.",
    image: "/badge-1.png",
  },
  {
    title: "QuickBooks Level 1",
    description: "Certified in QuickBooks fundamentals and bookkeeping essentials.",
    image: "/badge-2.png",
  },
  {
    title: "QuickBooks Level 2",
    description: "Advanced certification in QuickBooks for complex bookkeeping tasks.",
    image: "/badge-3.png",
  },
];



const Badges: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl gradient-text sm:text-4xl font-bold mb-6 text-center">
          <span className="">Certified</span>{" "}
          <span className="gradient-text">in</span>{" "}
          <span className="gradient-text">Bookkeeping Services</span>
        </h2>

        <p className=" mb-12 max-w-2xl mx-auto">
          I have achieved pro badges in Fractional CFO and Bookkeeping services
          for outstanding results, trusted partnerships, and innovative
          financial solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-1/3"
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
