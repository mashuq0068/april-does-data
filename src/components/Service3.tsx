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
    desc: "Automating recurring invoices and job schedules",
    icon: "🧾",
    color: "bg-green-500",
  },
  {
    desc: "Activating mobile invoicing for on-the-go staff",
    icon: "📱",
    color: "bg-teal-500",
  },
  {
    desc: "Integrating QuickBooks Payments with alerts and digital payment choices",
    icon: "💳",
    color: "bg-orange-500",
  },
  {
    desc: "Centralizing client information in the QuickBooks Customer Center",
    icon: "👥",
    color: "bg-yellow-500",
  },
  {
    desc: "Connecting QuickBooks Time to payroll for precise labor costing",
    icon: "⏱️",
    color: "bg-blue-500",
  },
  {
    desc: "Developing dashboards to evaluate profitability by service, team, or location",
    icon: "📊",
    color: "bg-purple-500",
  },
];

const Service3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-6 bg-gray-100 flex items-center justify-center ">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
        {/* Left Section */}
        {/* Left Section (Updated) */}
        {/* Left Section (New Content) */}
        <div className="text-white relative space-y-6">
          <h2 className="text-2xl lg:text-3xl mt-5 mb-3 text-center font-bold">
            Fractional CFO services Service-Based Businesses{" "}
            <p className="text-sm max-w-xl  text-center font-normal mt-4">
              <strong>April Does Data</strong> streamlines everyday financial
              tasks for service companies in QuickBooks Online, freeing them to
              prioritize outstanding client service. We design automated
              invoicing and scheduling for routine jobs, ensuring timely billing
              without interruptions. Mobile invoicing tools allow field teams to
              generate and dispatch bills on-site, speeding up collections and
              minimizing admin hurdles. Via QuickBooks Payments, we introduce
              online payment methods with automatic reminders to boost cash flow
              and reduce late payments. Centralizing client data offers owners a
              holistic overview of histories, balances, and trends in a single
              hub. Proper integration of time tracking and payroll assigns costs
              to jobs accurately, while profitability dashboards reveal
              top-performing services, teams, or sites.
            </p>
          </h2>
          <div className="text-sm"></div>

          <img
            src="/service-gap-3.png"
            className=" max-h-[45%]  w-max mx-auto"
            alt=""
          />

          {/* CTA Box */}
          <div className="max-w-lg  w-full mx-auto  h-max ">
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
