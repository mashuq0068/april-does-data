import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Service {
  // title: string;
  desc: string;
  icon: string;
  color: string;
}

const services1: Service[] = [
  {
    desc: "Enter all unrecorded sales, expenses, and payroll entries",
    icon: "🖊️",
    color: "bg-red-500",
  },
  {
    desc: "Match bank and credit card statements with recorded transactions",
    icon: "💳",
    color: "bg-indigo-500",
  },
  {
    desc: "Create backdated profit and loss statements and balance sheets",
    icon: "📂",
    color: "bg-pink-500",
  },
  {
    desc: "Identify and rectify discrepancies in existing financial records",
    icon: "🔍",
    color: "bg-cyan-500",
  },
  {
    desc: "Ensure all records meet tax regulations, including sales tax corrections",
    icon: "🧾",
    color: "bg-lime-500",
  },
];
const services2: Service[] = [
  {
    desc: "Consistently record daily income and expenses",
    icon: "💵", // money/income
    color: "bg-red-500",
  },
  {
    desc: "Monthly reconciliation of bank and credit card accounts",
    icon: "🏦", // bank account
    color: "bg-indigo-500",
  },
  {
    desc: "Preparation: Generate monthly profit and loss statements and balance sheets",
    icon: "📑", // documents/financial reports
    color: "bg-pink-500",
  },
  {
    desc: "Monitor and compare actual expenses against budgeted amounts",
    icon: "📊", // chart/analysis
    color: "bg-cyan-500",
  },
  {
    desc: "Prepare documents and records for tax filing",
    icon: "🧾", // receipt/tax
    color: "bg-lime-500",
  },
];

const services3: Service[] = [
  {
    desc: "Configure QuickBooks according to the business's specific needs",
    icon: "⚙️",
    color: "bg-red-500",
  },
  {
    desc: "Tailor the chart of accounts to reflect the business structure",
    icon: "📊",
    color: "bg-indigo-500",
  },
  {
    desc: "Import existing financial data into QuickBooks",
    icon: "📂",
    color: "bg-pink-500",
  },
  {
    desc: "Conduct training sessions for staff on using QuickBooks effectively",
    icon: "👩‍💻",
    color: "bg-cyan-500",
  },
  {
    desc: "Provide assistance with troubleshooting and updates post-setup",
    icon: "🛠️",
    color: "bg-lime-500",
  },
];

const Service4: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-12 bg-gray-100 flex items-center justify-center ">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-7xl w-full  relative">
        <h2 className="text-2xl lg:text-4xl text-white mb-16  my-8 text-center font-bold">
          Additional Services Available
          {/* <p className="text-center font-normal mt-4">Subtitle</p> */}
        </h2>
        <div className=" space-y-20">
          {/* 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="space-y-6 lg:order-1 lg:mb-0 mb-8 order-2 ">
              {services1.map((service, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="flex items-start gap-4 py-4  px-4 text-lg">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl shrink-0 ${service.color}`}
                    >
                      <span className="leading-none">{service.icon}</span>
                    </div>
                    <div className="max-w-md">
                      <p className="lg:text-base text-sm">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-white lg:mb-0 mb-8 lg:order-2 order-1 relative lg:space-y-6 space-y-3">
              <h2 className="text-2xl lg:text-3xl text-center text-white mb-12   font-bold">
                Catch-Up & Clean-Up
                {/* <p className="text-center font-normal mt-4">Subtitle</p> */}
              </h2>
              <img
                src="/service-4-1.jpg"
                className=" max-h-[50vh]  w-max mx-auto"
                alt=""
              />
            </div>
          </div>
          {/* 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="text-white relative space-y-6">
              <h2 className="text-2xl lg:text-3xl text-center text-white mb-12   font-bold">
                Monthly Bookkeeping
                {/* <p className="text-center font-normal mt-4">Subtitle</p> */}
              </h2>
              <img
                src="/service-4-2.jpg"
                className=" max-h-[50vh]  w-max mx-auto"
                alt=""
              />
            </div>
            <div className="space-y-6  ">
              {services2.map((service, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="flex items-start gap-4 py-4  px-4 text-lg">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl shrink-0 ${service.color}`}
                    >
                      <span className="leading-none">{service.icon}</span>
                    </div>
                    <div className="max-w-md">
                      <p className="lg:text-base text-sm">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="space-y-6 lg:order-1 lg:mb-0 mb-8 order-2   ">
              {services3.map((service, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="flex items-start gap-4 py-4  px-4 text-lg">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl shrink-0 ${service.color}`}
                    >
                      <span className="leading-none">{service.icon}</span>
                    </div>
                    <div className="max-w-md">
                      <p className="lg:text-base text-sm">{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-white lg:mb-0 mb-8 lg:order-2 order-1 relative lg:space-y-6 space-y-3">
              <h2 className="text-2xl lg:text-3xl text-center text-white mb-12   font-bold">
                QuickBooks Set-Up & Training
                {/* <p className="text-center font-normal mt-4">Subtitle</p> */}
              </h2>
              <img
                src="/service-4-3.jpg"
                className=" max-h-[50vh]  w-max mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
          <div className="max-w-lg mt-12 mb-4 w-full mx-auto  h-max ">
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
  );
};

export default Service4;
