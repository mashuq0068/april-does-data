import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const April = () => {
  const navigate = useNavigate();
  return (
    <div className="p-12  bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700  overflow-hidden">
      {/* <img src="/april-1.png" alt="" /> 
           <img src="/april-2.png" alt="" />  */}

      <div className="flex flex-col gap-8 md:flex-row items-center justify-center overflow-hidden">
        {/* Second Image */}
        <div>
          <motion.img
            src="/april-img.jpg"
            alt="Client Slide"
            className="w-full    shadow-xl"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            src="/april-img-2.jpg"
            alt="Text Slide"
            className="w-full  object-contain  shadow-xl"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            src="/april-img-3.jpg"
            alt="Text Slide"
            className="w-full  object-contain  shadow-xl"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row items-center justify-center overflow-hidden">
        {/* Second Image */}
        <div>
          <motion.img
            src="/april-text-2.png"
            alt="Client Slide"
            className="w-full    shadow-xl"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            src="/april-new-text.png"
            alt="Text Slide"
            className="w-full  object-contain  shadow-xl"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            src="/april-text-3.png"
            alt="Text Slide"
            className="w-full  object-contain  shadow-xl"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          />
        </div>
      </div>
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
  );
};

export default April;
