import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const [help, setHelp] = useState("");

  const socialLinks = [
    {
      src: "/facebook.png",
      url: "https://www.facebook.com/aprildoesdata/",
      alt: "Facebook",
    },
    {
      src: "/instagram.png",
      url: "https://www.instagram.com/aprildoesdata/",
      alt: "Instagram",
    },
    {
      src: "/linkedin.png",
      url: "https://www.linkedin.com/in/aprilcswanner/",
      alt: "LinkedIn",
    },
    { src: "/x.png", url: "https://x.com/aprildoesdata", alt: "X" },
  ];
  const otherLinks = [
    {
      src: "/alignable.png",
      url: "https://www.alignable.com/carrollton-tx/april-does-data?user=8047236",
      alt: "alignable",
    },
    {
      src: "/intuit.png",
      url: "https://proadvisor.intuit.com/app/accountant/search?searchId=aprilcswanner",
      alt: "intuit",
    },
    
  ];

  return (
    <div className="bg-gradient-to-r from-brandPurple to-brandPink mx-auto pt-12 ">
      <h1 className="text-white mt-8 font-medium text-center font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-xl mx-auto">
        Schedule Your Consultation Now
      </h1>
      <p className="text-center text-lg sm:text-xl font-serif text-white  max-w-2xl mx-auto">
        <Typewriter
          words={[
            "Get time on the calendar now to discuss your financial and bookkeeping needs!",
          ]}
          cursor={false}
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <form className="space-y-4 lg:px-0 px-4 max-w-2xl my-12 w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-white font-medium mb-2"
              htmlFor="company"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Company Name"
            />
          </div>
          <div>
            <label
              className="block text-white font-medium mb-2"
              htmlFor="businessType"
            >
              Business Type
            </label>
            <select
              id="businessType"
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            >
              {/* <option value="" disabled className="text-gray-400" selected>
                Select Business Type
              </option> */}
              <option value="Fractional CFO Services">
                Real Estate Investor/Developer
              </option>
              <option value="Construction Business">
                Construction Business
              </option>
              <option value="Service-based Business">
                Service-based Business
              </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-white font-medium mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your First Name"
            />
          </div>
          <div>
            <label
              className="block text-white font-medium mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Last Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 800 123 4567"
          />
        </div>
        <div>
          <label
            className="block text-white font-medium mb-2"
            htmlFor="businessType"
          >
            What Do You Need Help With
          </label>
          <select
            id="businessType"
            value={help}
            onChange={(e) => setHelp(e.target.value)}
            defaultValue=""
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            {/* <option value="" disabled className="text-gray-400" selected>
             Selec
            </option> */}
            <option value="Fractional CFO Services">
              Fractional CFO Services
            </option>
            <option value="Catch-up/Clean-up">Catch-up/Clean-up</option>
            <option value="Monthly Bookkeeping">Monthly Bookkeeping</option>
            <option value="QuickBooks Set-up">QuickBooks Set-up</option>
            <option value="QuickBook Training">QuickBook Training</option>
            <option value="Something Else">Others</option>
          </select>
        </div>
        <div>
          { (
            <div>
              {/* <label
              className="block text-white font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label> */}
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-white w-full text-center font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
        >
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            Submit
          </span>
        </button>
      </form>

      <div className="bg-gray-900 mt-24 w-full mx-auto min-h-[300px] flex flex-col items-center justify-center text-center  py-12">
        <h2 className="text-3xl sm:text-4xl font-normal text-white font-serif mb-2">
          Follow Me
        </h2>
        <p className="text-gray-300 font-serif text-base sm:text-lg mt-3 mb-8 max-w-xl">
          Stay connected and get the latest updates on my social media channels
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src={social.src}
                alt={social.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center mt-8 gap-4 sm:gap-8">
          {otherLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src={social.src}
                alt={social.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
