import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Service {
  // title: string;
  desc: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    desc: "Configuring class and location tracking for property-level insights, including ARV and cap rate analysis",
    icon: "📍",
    color: "bg-green-500",
  },
  {
    desc: "Automating recurring rent invoices and collection reminders for rental portfolios",
    icon: "🏠",
    color: "bg-teal-500",
  },
  {
    desc: "Recording lease payments, rehab costs, holding costs, and commissions with precision",
    icon: "📝",
    color: "bg-orange-500",
  },
  {
    desc: "Reconciling bank, loan, and escrow accounts to support refinancing and disposition processes",
    icon: "🏦",
    color: "bg-yellow-500",
  },
  {
    desc: "Compiling unified financial statements across entities for portfolio-wide clarity",
    icon: "📑",
    color: "bg-blue-500",
  },
  {
    desc: "Designing dashboards to monitor ROI, cash flow, cap rates, and investment performance",
    icon: "📊",
    color: "bg-purple-500",
  },
];



const Service3: React.FC = () => {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-12 bg-gray-100 flex items-center justify-center ">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
        {/* Left Section */}
        {/* Left Section (Updated) */}
        {/* Left Section (New Content) */}
        <div className="text-white relative space-y-6">
          <h2 className="text-2xl lg:text-3xl mb-3 text-center font-bold">
           Fractional CFO services Service-Based Businesses
            <p className="text-sm max-w-xl  text-center font-normal mt-4">
              <strong>April Does Data</strong> equips real estate investors and developers with precise financial management by establishing robust, property-specific records in QuickBooks Online. We meticulously track acquisitions, dispositions, rehab costs, holding costs, and commissions, ensuring real-time visibility into portfolio performance, cap rates, and after-repair value (ARV). Our systems streamline recurring rent invoicing, prompt collections, and partner distributions, aligning every transaction with the correct entity for accurate buy-and-hold or BRRR (Buy, Rehab, Rent, Refinance) strategies. Using advanced reporting, we deliver consolidated insights that highlight profitability, cash flow trends, cap rates, and return on investment. This structured bookkeeping and detailed analytics empower faster, data-driven decisions to optimize acquisitions, dispositions, and portfolio growth.
              
            </p>
          </h2>
          <div className="text-sm"></div>

          <img
            src="/service-gap.png"
            className=" max-h-[45%]  w-max mx-auto"
            alt=""
          />

          {/* CTA Box */}
          <div className="max-w-lg  w-full mx-auto  h-max ">
            <div className="bg-gradient-to-r from-brandPurple to-brandPink rounded-xl mt-5 p-6 max-w-lg mx-auto flex-1">
              <p className="text-white mb-4 font-medium">
                Ready To Learn Your Profit Margin?
              </p>
              <button                   onClick={() => navigate('/contact')}
 className="w-full bg-white text-brandPurple font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Free Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-12  ">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="flex items-start gap-4 py-4 lg:py-8 px-4 text-lg">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl shrink-0 ${service.color}`}
                >
                  <span className="leading-none">{service.icon}</span>
                </div>
                <div className="max-w-md">
                  <p className="md:text-xl text-sm">{service.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service3;
