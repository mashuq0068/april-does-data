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
    desc: "Establishing job costing for reliable margin monitoring",
    icon: "🏗️",
    color: "bg-green-500",
  },
  {
    desc: "Handling estimates, change orders, and progress billing efficiently",
    icon: "📄",
    color: "bg-teal-500",
  },
  {
    desc: "Configuring progress invoicing for milestone-based payments",
    icon: "💰",
    color: "bg-orange-500",
  },
  {
    desc: "Linking QuickBooks Time to enhance payroll and labor expense precision",
    icon: "⏱️",
    color: "bg-yellow-500",
  },
  {
    desc: "Creating budgets and variance reports per project",
    icon: "📊",
    color: "bg-blue-500",
  },
  {
    desc: "Producing aggregated reports and WIP schedules to meet compliance needs",
    icon: "📑",
    color: "bg-purple-500",
  },
];


const Service2: React.FC = () => {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-12 bg-gray-100 flex items-center justify-center ">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
      
        <div className="space-y-12   order-2 md:order-1">
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
        <div className="text-white relative order-1 md:order-2 space-y-6">
          <h2 className="text-2xl lg:text-3xl mb-3 text-center font-bold">
            Fractional CFO services for Construction business
            <p className="text-sm max-w-xl  text-center font-normal mt-4">
             <strong>April Does Data</strong> brings structure and transparency to the intricate finances of construction firms using QuickBooks Online. We implement job costing to allocate labor, subcontractor fees, and materials to specific projects, enabling precise margin evaluations at each phase. Our processes ensure seamless handling of change orders and progress billing, syncing invoices with actual project milestones. Integrating QuickBooks Time guarantees reliable payroll, proper hour assignments, and controlled expenses. We also develop budgets and variance analyses to flag potential overruns early. With powerful reporting features, we aggregate data from various divisions and generate tailored financial reports for lenders, bonding agents, and key stakeholders.
            </p>
          </h2>
          <div className="text-sm"></div>

          <img
             src="/service-gap-2.png"
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
      </div>
    </div>
  );
};

export default Service2;
