import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const April = () => {
  const navigate = useNavigate()
  return (
    <div className="  overflow-hidden">
      {/* <img src="/april-1.png" alt="" /> 
           <img src="/april-2.png" alt="" />  */}

      {/* Second Image */}
      <motion.img
        src="/april-2-v2.png"
        alt="Client Slide"
        className="w-full    shadow-xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      />
      <motion.img
        src="/april-1-v2.png"
        alt="Text Slide"
        className="w-full  object-contain  shadow-xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      />
      
    </div>
  );
};

export default April;
