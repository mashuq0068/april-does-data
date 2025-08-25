import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Service {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    title: "Property Financial Management",
    desc: "Oversee financial aspects of property investments, including income tracking and expense management.",
    icon: "🏠",
    color: "bg-green-500",
  },
  {
    title: "Portfolio Performance Analysis",
    desc: "Analyze the performance of your real estate portfolio to identify strengths and areas for improvement.",
    icon: "📊",
    color: "bg-teal-500",
  },
  {
    title: "Tax Strategy and Compliance",
    desc: "Provide expert guidance on tax implications related to real estate investments, ensuring compliance and maximizing returns.",
    icon: "💼",
    color: "bg-orange-500",
  },
  {
    title: "Cash Flow Projections",
    desc: "Develop cash flow forecasts to help manage rental income and operational expenses effectively.",
    icon: "💧",
    color: "bg-yellow-500",
  },
  {
    title: "Investment Analysis and Reporting",
    desc: "Offer detailed analyses of investment opportunities, including ROI calculations and market trends.",
    icon: "📈",
    color: "bg-blue-500",
  },
  {
    title: "Financial Close Processes",
    desc: "Ensure accurate and timely financial reporting for all properties in your portfolio.",
    icon: "📝",
    color: "bg-red-500",
  },
  {
    title: "Customized Bookkeeping Solutions",
    desc: "Tailor bookkeeping services to meet the unique needs of your real estate investments, ensuring smooth operations.",
    icon: "⚙️",
    color: "bg-purple-500",
  },
];

const Service1: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
       

        {/* Left Section */}
        {/* Left Section (Updated) */}
        {/* Left Section (New Content) */}
        <div className="text-white relative space-y-6">
          <h2 className="text-3xl mt-5 text-center font-bold">
            Services for Real Estate Investors
            <p className="text-sm max-w-xl  text-center font-normal mt-4">
              At April Does Data, I specialize in providing comprehensive
              financial services for real estate investors to optimize their
              investment strategies. My offerings include detailed property
              financial management, where I oversee income tracking and expense
              management to ensure profitability.
            </p>
          </h2>
          <div className="text-sm"></div>

          <img src="/service-gap.png" className=" max-h-[55%] pt-12 w-max mx-auto" alt="" />

          {/* CTA Box */}
          <div className="max-w-xl absolute bottom-0 mt-auto h-max w-full">
            <div className="bg-gradient-to-r from-brandPurple to-brandPink rounded-xl mt-5 p-6 max-w-lg mx-auto flex-1">
              <p className="text-white mb-4 font-medium">
                Ready to clean up your books?
              </p>
              <button className="w-full bg-white text-brandPurple font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Free Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4  ">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="flex items-start gap-4 p-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-xl ${service.color}`}
                >
                  {service.icon}
                </div>
                <div className=" max-w-md">
                  <h4 className="font-bold gradient-text text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-sm ">{service.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service1;
