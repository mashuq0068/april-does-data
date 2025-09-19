import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
interface FooterProps {
  onGetAssessment: () => void;
}
const Footer = ({ onGetAssessment }: FooterProps) => {
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const navigate = useNavigate();
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!subscribeEmail) {
      toast.error("Please enter an email.");
      return;
    }

    try {
      const templateParams = {
        user_email: subscribeEmail, // This will be used in your EmailJS template
      };

      await emailjs.send(
        "service_fny4g0q",
        "template_bnss1v6",
        templateParams,
        "Tq378oWFacA8-gmXk"
      );

      toast.success("Subscribed successfully!", {
        position: "top-right",
      });

      setSubscribeEmail(""); // Reset input
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/ADD logo.png"
                className="h-10"
                alt=""
              />
              <span className="md:text-xl font-bold">April Does Data</span>
            </div>
            <p className="max-w-sm text-justify">
              A seasoned expert with 25+ years of experience in Fractional CFO and Bookkeeping Services. I’ve helped businesses streamline
              their records, improve cash flow, and make confident financial
              decisions with clarity and precision.
            </p>

            <div className="space-y-3">
              <a
                href="tel:323-749-9444"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>323-749-9444</span>
              </a>
              <a
                href="mailto:help@aprildoesdata.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>april@aprildoesdata.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Remote Services Nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Packages</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div> */}

          {/* Get Started */}
          <div className="bg-gray-900 w-full mx-auto min-h-[300px] flex flex-col px-4 py-6">
            {/* Title */}
            <div className=" flex flex-col items-center  md:items-center text-center md:text-end ">
              <h2 className="text-2xl text-end  font-bold text-white mb-2">
                Stay Informed and Connected
              </h2>
              {/* Subtitle */}
              <p className="text-gray-300 text-center text-lg mb-4">
                Subscribe to our newsletter for the latest updates
              </p>
            </div>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubscribe}
              className="w-full ml-auto flex flex-col sm:flex-row items-center gap-4"
            >
              <input
                type="email"
                name="email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 w-full bg-white p-3 rounded-lg border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandPurple"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-brandPurple to-brandPink text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>

            <div className=" max-w-xl w-full ">
              {/* <h3 className="text-lg font-semibold mb-6">Get Started</h3> */}
              <div className="bg-gradient-to-r from-brandPurple to-brandPink rounded-xl mt-5 p-6 max-w-lg mx-auto flex-1">
                <p className="text-white mb-4 font-medium">
                  Ready To Learn Your Profit Margin?
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full bg-white text-brandPurple font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Free Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 April Does Data. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
