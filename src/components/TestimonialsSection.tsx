import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { useLocation, useNavigate } from "react-router-dom";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const location = useLocation();

  const navigate = useNavigate();

  const testimonials = [
    {
      text: "She knows her Sh!%",
      description:
        "April transformed our messy books into a clean, organized system. Now I actually understand my business finances!",
      author: "Jane D.",
      role: "Electrician & Small Business Owner",
      avatar: "JD",
      color: "bg-pink-500",
    },
    {
      text: "Finally, books that make sense",
      description:
        "The cleanup service was a game-changer. April caught errors I didn't even know existed and set up systems that actually work.",
      author: "Mike R.",
      role: "Property Management",
      avatar: "MR",
      color: "bg-blue-500",
    },
    {
      text: "Worth every penny",
      description:
        "The monthly strategy calls alone have saved me thousands. April doesn't just do books – she helps me make better business decisions.",
      author: "Sarah T.",
      role: "General Contractor",
      avatar: "ST",
      color: "bg-orange-500",
    },

    {
      text: "Relieved and happy",
      description:
        "This is great! I’m very happy and relieved that my books are finally caught up. I can see my business more clearly now. Thank you for all your hard work!\nPlease let me know if you have any recommendations on how I should handle my accounts. Thank You!\n– (This customer also sent me a $40 Visa Virtual gift card)\n“Hi April, Here goes a small gift of my appreciation for all the help with my books. Thank you! Happy Holidays!”",
      author: "Ramsey N.",
      role: "Telecommunications Business Owner",
      avatar: "RN",
      color: "bg-teal-500",
    },
    {
      text: "So thankful I found you",
      description:
        "Ok, thanks for the update. I had a feeling that Bookkeeper was not doing things right. I really wish my CPA told me cancel it and just find someone else. She thought to give her a chance. I wasted 4 weeks of nothing... and so I am grateful to have found you. Thank you so much for doing this for me. I’m really so thankful.",
      author: "Angela L.",
      role: "Real Estate Investor",
      avatar: "AL",
      color: "bg-purple-500",
    },
    {
      text: "QB Lifesaver",
      description:
        "April helped me out when I was in a QB bind. Her vast knowledge allowed me to quickly get back on track.",
      author: "Derek T.",
      role: "Business Owner",
      avatar: "DT",
      color: "bg-green-500",
    },
    {
      text: "Got me unstuck fast",
      description:
        "I was left in a pinch by my previous bookkeeper; April was great at getting the ball rolling and finishing up all of the things I was stuck with in an extremely timely manner",
      author: "Taylor L.",
      role: "Commercial Real Estate Investor",
      avatar: "TL",
      color: "bg-indigo-500",
    },
    {
      text: "Thorough and efficient",
      description:
        "I just wanted to send a note saying thank you for cleaning up our quickbooks! You did a thorough and efficient job at making our books correct and we appreciate all the hard work you did!",
      author: "Shelby T.",
      role: "Construction/Agriculture Business",
      avatar: "ST",
      color: "bg-red-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      <section id="testimonials" className="py-10 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              Not sure what you need?
            </div>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 mb-8"
            >
              Take the Free Assessment
            </Button>

            <h2 className="text-4xl font-bold gradient-text uppercase mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="md:text-xl  max-w-2xl mx-auto">
              Real feedback from real business owners
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
              <div className="grid relative md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between transition-all duration-500 transform ${
                      index === currentTestimonial
                        ? "scale-105 opacity-100"
                        : "scale-95 opacity-70"
                    }`}
                  >
                    {/* Top section */}
                    <div>
                      {/* Quote icon */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${testimonial.color}`}
                      >
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Stars */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-lg font-semibold text-gray-900 mb-4">
                        "{testimonial.text}"
                      </blockquote>
                      <p className="space-y-3 mb-6 whitespace-pre-line">
                        {testimonial.description}
                      </p>
                    </div>

                    {/* Author block (always at bottom) */}
                    <div className="flex items-center space-x-3 mt-auto">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${testimonial.color}`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {location.pathname === "/" && (
              <div className="flex justify-center">
                <Button
                  onClick={() => navigate("/testimonials")}
                  size="lg"
                  className="bg-gradient-to-r from-brandBlue to-brandPurple hover:from-brandPurple hover:to-brandPink transition-all duration-300 w-max mx-auto"
                >
                  View All Testimonials
                </Button>
              </div>
            )}

            {/* Navigation */}
            {/* <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div> */}

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-brandPurple"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;
