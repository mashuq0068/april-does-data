import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react";
import intuitLogo from "@/assets/intuit-logo.png";
import Slides from "./Slides";
import { useNavigate } from "react-router-dom";
interface HeroSectionProps {
  onGetAssessment: () => void;
}
const HeroSection = ({ onGetAssessment }: HeroSectionProps) => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50  "
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-12">
        <div className="flex w-full h-max bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700">
          {/* Left Section with Background Image */}
          <div
            className="w-1/3 h-[250px] md:block hidden bg-contain bg-no-repeat "
            style={{ backgroundImage: "url('/calculator-removedbg.png')" }}
          ></div>

          {/* Right Section with Text */}
      <div className="flex h-full flex-col pb-6 md:pb-12 capitalize items-center justify-center text-center">
  <div className="w-full max-w-3xl px-4 text-white font-serif">
    <h1 className=" md:text-5xl mt-10 md:mt-20 font-semibold">
      Empowering Your Finances
    </h1>
    <h2 className=" md:text-3xl mt-4 font-semibold overflow-hidden whitespace-nowrap leading-snug animate-typing">
      Fractional CFO and Bookkeeping Services
    </h2>
  </div>
</div>

        </div>
        <Slides />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mb-6 md:gap-0 lg:gap-12 items-center">
          <div className="text-center md:ml-[10%] lg:text-left">
            <h1 className="md:md:text-xl text-sm max-w-xl font-bold gradient-text uppercase text-gray-900 mb-3 leading-tight">
              Clean Books. <span className="gradient-text">Clear Vision.</span>{" "}
              <span className="text-blue-60 gradient-text">
                Confident Decisions.
              </span>
            </h1>

            <p className="md:md:text-xl text-xs font-alike text-gray-600 lg:mx-0 mx-auto mb-4 md:max-w-lg">
              Fractional CFO + bookkeeping for Real Estate, Construction and
              Service-based Businesses. With 25+ years building scalable systems
              that boost clarity, cash flow, and profit. Award-winning results,
              including scaling a client to $32M in under four years.
            </p>

            <div className="flex flex-col w-full max-w-lg sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white px-8 py-4 rounded-full  font-semibold w-full  lg:text-lg transform transition-all duration-200 hover:scale-105 shadow-xl group"
              >
                Get My Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              {/* <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/contact")}
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                Contact Me
              </Button> */}
            </div>

            {/* <div className="mt-12 grid grid-cols-2 gap-8 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24hr</div>
                <div className="text-sm text-gray-600">Response</div>
              </div>
            </div> */}
          </div>

          {/* <div className="relative"> */}
          <div className="flex gap-6 flex-wrap justify-center lg:justify-center items-center lg:mt-8">
            <img
              src="/badge-2.png"
              alt="Badge 1"
              className="lg:w-48 w-24 h-48 object-contain transform transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/badge-3.png"
              alt="Badge 2"
              className="lg:w-48 w-24 h-48 object-contain transform transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/badge-1.png"
              alt="Badge 3"
              className="lg:w-48 w-24 h-48 object-contain transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="text-sm text-gray-500">Monthly P&L</div>
                  <div className="text-green-600 font-bold">+15.2%</div>
                </div>
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-8 rounded-lg flex items-center justify-center text-white font-semibold">
                  Books Reconciled ✓
                </div>
              </div>
            </div>
            <div className="mt-10 mb-6 w-max mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 rounded-full border border-blue-100 text-sm font-medium text-blue-700 mb-2 py-[16px] my-[5px]">
                <img src={intuitLogo} alt="Intuit" className="w-4 h-4" />
                <Shield className="w-4 h-4" />
                Certified QuickBooks ProAdvisor
              </div>
            </div> */}

          {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">📊</span>
            </div> */}
        </div>
        <div className="lg:grid grid-cols-2">
          <div></div>
          <div className=" mb-6 flex justify-center w-full">
            <div className="inline-flex lg:w-1/2 items-center gap-2 bg-white/80 backdrop-blur-sm px-4 rounded-full border border-blue-100 text-sm font-medium text-blue-700 mb-2 py-[16px] my-[5px]">
              <img src={intuitLogo} alt="Intuit" className="w-4 h-4" />
              <Shield className="w-4 h-4" />
              QuickBooks Certified As A Pro Advisor
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
export default HeroSection;
