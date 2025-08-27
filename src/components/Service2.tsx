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
    title: "GAAP Compliance Assurance",
    desc: "Ensure adherence to Generally Accepted Accounting Principles to maintain financial integrity and transparency.",
    icon: "📑", // document icon
    color: "bg-green-500",
  },
  {
    title: "Job Costing Analysis",
    desc: "Provide detailed tracking of project costs to help you understand profitability and make informed bidding decisions.",
    icon: "🛠️", // tools/hammer
    color: "bg-teal-500",
  },
  {
    title: "Cash Flow Management",
    desc: "Monitor and optimize cash flow to ensure timely payments for labor, materials, and other expenses.",
    icon: "💧", // water drop for flow
    color: "bg-yellow-500",
  },
  {
    title: "Financial Close Processes",
    desc: "Streamline month-end and year-end closing processes for accurate financial reporting.",
    icon: "📝", // writing pad
    color: "bg-red-500",
  },
  {
    title: "Customized Reporting",
    desc: "Develop tailored financial reports that provide insights into project performance, profitability, and budget adherence.",
    icon: "📊", // bar chart
    color: "bg-blue-500",
  },
  {
    title: "Tax Preparation and Planning",
    desc: "Ensure compliance with tax regulations while maximizing deductions specific to the construction industry.",
    icon: "💼", // briefcase
    color: "bg-orange-500",
  },
  {
    title: "Budgeting and Forecasting",
    desc: "Create comprehensive budgets and forecasts to guide financial planning and project funding.",
    icon: "📈", // upward chart
    color: "bg-purple-500",
  },
];


const Service1: React.FC = () => {
  return (
    <div className="min-h-screen pt-6 bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-gray-900 rounded-2xl shadow-xl pt-20 px-8 pb-8 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
     
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
        {/* Left Section */}
        {/* Left Section (Updated) */}
        {/* Left Section (New Content) */}
        <div className="text-white relative space-y-6">
          <h2 className="text-3xl mt-5 text-center font-bold">
            Services for Construction Businesses{" "}
            <p className="text-sm max-w-xl  text-center font-normal mt-4">
              At April Does Data, I provide specialized financial services for
              construction businesses to enhance operational efficiency and
              profitability. My offerings include ensuring GAAP compliance,
              detailed job costing analysis, and effective cash flow management.
              My streamline financial closing processes and deliver customized
              reporting to give you insights into project performance.
            </p>
          </h2>
          <div className="text-sm"></div>

          <img
            src="/service-gap-2.png"
            className=" max-h-[55%] pt-12 w-max mx-auto"
            alt=""
          />

          {/* CTA Box */}
          <div className="max-w-xl absolute bottom-0 mt-auto h-max w-full">
            <div className="bg-gradient-to-r from-brandPurple to-brandPink rounded-xl mt-5 p-6 max-w-lg mx-auto flex-1">
              <p className="text-white mb-4 font-medium">
                Ready To Learn Your Profit Margin?
              </p>
              <button className="w-full bg-white text-brandPurple font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
