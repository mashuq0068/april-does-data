import {
  CheckCircle,
  FileText,
  Calculator,
  Users,
  TrendingUp,
  Award,
  HeadphonesIcon,
} from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import Service1 from "./Service1";
const ServicesSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const services = [
    {
      title: "Catch-up & Cleanup",
      description:
        "Comprehensive bookkeeping solutions tailored to your business needs",
      features: [
        "Bookkeeping cleanup per month",
        "Multi-year catch-up available",
        "QuickBooks setup and training",
        "Ongoing monthly service available",
      ],
      icon: FileText,
      color: "blue",
    },
    {
      title: "Monthly Bookkeeping",
      description:
        "Regular monthly services to keep your books current and compliant",
      features: [
        "Monthly reconciliation & reports",
        "P&L, Balance Sheet, Cash Flow",
        "Job Costing & project tracking",
        "Payroll Support",
        "Quarterly financial review calls",
      ],
      icon: Calculator,
      color: "green",
    },
    {
      title: "QuickBooks Setup & Training",
      description: "Professional setup and personalized training for your team",
      features: [
        "Industry-specific chart of accounts",
        "Bank feed & app integration",
        "Custom invoice and report setup",
        "Personalized 1-on-1 training",
        "Ongoing support as needed",
      ],
      icon: Award,
      color: "purple",
    },
  ];
  return (
    <div className="pt-10 pb-10">
      <section id="services" className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {location.pathname === "/" && (
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text uppercase mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl  max-w-3xl mx-auto">
                Comprehensive bookkeeping solutions tailored to your business
                needs
              </p>
            </div>
          )}

       

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
        </div>
      </section>
      {location.pathname === "/" && (
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/services")}
            className="group text-center font-semibold px-12 py-3 rounded-lg shadow-md w-max transition duration-200
               bg-white hover:bg-gradient-to-r from-[#667eea] to-[#764ba2]"
          >
            <span
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent
                     group-hover:bg-clip-auto group-hover:text-white transition duration-200"
            >
              View All Services
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};
export default ServicesSection;
