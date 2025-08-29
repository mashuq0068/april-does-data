import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const April = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-12 lg:block hidden lg:px-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700">
        {/* First Row */}
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <motion.img
            src="/april-img-1.png"
            alt="Client Slide"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain shadow-xl rounded-lg"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // viewport={{ amount: 0.3 }}
          />
          <motion.img
            src="/april-img-2.png"
            alt="Text Slide"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain shadow-xl rounded-lg"
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // viewport={{ amount: 0.3 }}
          />
          <motion.img
            src="/april-img-3.png"
            alt="Text Slide"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain shadow-xl rounded-lg"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // viewport={{ amount: 0.3 }}
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {[
            { src: "/april-info-2.png", alt: "Client Slide" },
            { src: "/april-info-1.png", alt: "Text Slide" },
            { src: "/april-info-3.png", alt: "Text Slide" },
          ].map((item, index) => (
            <motion.img
              key={index}
              src={item.src}
              alt={item.alt}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain shadow-xl rounded-lg"
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2, // dynamic delay per image
              }}
              // viewport={{ amount: 0.3 }}
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => navigate("/services")}
            className="group text-center font-semibold px-12 py-3 rounded-lg shadow-md w-max transition duration-200
        bg-white hover:bg-gradient-to-r from-[#667eea] to-[#764ba2]"
          >
            <span
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent
          group-hover:bg-clip-auto group-hover:text-white transition duration-200"
            >
              View All Services
            </span>
          </Button>
        </div>
      </div>

      <div className="py-12 lg:hidden block lg:px-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700 overflow-hidden">
        <div className="flex flex-col gap-12 md:gap-8">
          {/* Pair 1 */}
          <div className="flex flex-col md:flex-row  items-center justify-center">
            <motion.img
              src="/april-img-1.png"
              alt="Client Slide 1"
              className="w-full max-w-xs md:max-w-sm shadow-xl rounded-lg"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // viewport={{ amount: 0.3 }}
            />
            <motion.img
              src="/april-info-2.png"
              alt="Text Slide 1"
              className="w-full max-w-xs md:max-w-sm object-contain shadow-xl rounded-lg"
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // viewport={{ amount: 0.3 }}
            />
          </div>

          {/* Pair 2 */}
          <div className="flex flex-col md:flex-row  items-center justify-center">
            <motion.img
              src="/april-img-2.png"
              alt="Client Slide 2"
              className="w-full max-w-xs md:max-w-sm shadow-xl object-contain rounded-lg"
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // viewport={{ amount: 0.3 }}
            />
            <motion.img
              src="/april-info-1.png"
              alt="Text Slide 2"
              className="w-full max-w-xs md:max-w-sm object-contain shadow-xl rounded-lg"
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // viewport={{ amount: 0.3 }}
            />
          </div>

          {/* Pair 3 */}
          <div className="flex flex-col md:flex-row  items-center justify-center">
            <motion.img
              src="/april-img-3.png"
              alt="Client Slide 3"
              className="w-full max-w-xs md:max-w-sm shadow-xl rounded-lg"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // viewport={{ amount: 0.3 }}
            />
            <motion.img
              src="/april-info-3.png"
              alt="Text Slide 3"
              className="w-full max-w-xs md:max-w-sm object-contain shadow-xl rounded-lg"
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // viewport={{ amount: 0.3 }}
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <Button
            onClick={() => navigate("/services")}
            className="group text-center font-semibold px-12 py-3 rounded-lg shadow-md w-max transition duration-200
               bg-white hover:bg-gradient-to-r from-[#667eea] to-[#764ba2]"
          >
            <span
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent
                 group-hover:bg-clip-auto group-hover:text-white transition duration-200"
            >
              View All Services
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default April;
