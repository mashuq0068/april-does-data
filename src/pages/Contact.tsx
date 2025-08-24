import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
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
    {
      src: "/x.png",
      url: "https://x.com/aprildoesdata",
      alt: "x",
    },
    // {
    //   src: "/youtube.png",
    //   url: "https://www.twitter.com",
    //   alt: "x",
    // },
   
  ];

  return (
    <div className="bg-gradient-to-r from-brandPurple to-brandPink mx-auto pt-12 ">
      <h1 className="text-white mt-16 font-medium text-center font-serif text-7xl  max-w-xl mx-auto ">
        Schedule Your Consultation Now
      </h1>
      <p className="text-center text-xl font-serif text-white mt-5">
        <Typewriter
          words={[
            "Get time on the calendar now to discuss your financial and bookkeeping needs!",
          ]}
          //   loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
      {/* <div className="bg-white rounded-lg p-8 my-12 max-w-2xl w-full mx-auto"> */}
      <form className="space-y-2  max-w-2xl my-12 w-full mx-auto  ">
        {/* Company Name */}
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

        {/* First Name */}
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

          {/* Last Name */}
          <div className="">
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

        {/* Email */}
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

        {/* Phone Number */}
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

        {/* Message */}
        <div>
          <label
            className="block text-white font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="">
          <button
            type="submit"
            className="bg-white w-full text-center font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Submit
            </span>
          </button>
        </div>
      </form>
      {/* </div> */}
       <div className="bg-gray-900 mt-24 w-full mx-auto min-h-[300px] flex flex-col items-center justify-center text-center px-4 py-12">
      {/* Title */}
      <h2 className="text-4xl font-normal text-white font-serif mb-2">Follow Me</h2>
      {/* Subtitle */}
      <p className="text-gray-300 font-serif text-lg mt-3 mb-8">
        Stay connected and get the latest updates on our social media channels
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
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
              className="w-36 h-36 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Contact;
