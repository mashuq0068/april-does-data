import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, BookOpen, Check } from "lucide-react";
export default function AuthoritySection() {
  const credentials = [
    {
      icon: Shield,
      title: "ProAdvisor in Bookkeeping",
      description: "Certified expert",
    },
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Proven track record",
    },
    {
      icon: Users,
      title: "50+ Happy Clients",
      description: "Nationwide service",
    },
    {
      icon: BookOpen,
      title: "QuickBooks Training",
      description: "On Request",
    },
  ];
  const services = [
    {
      category: "Catch-up & Cleanup",
      items: [
        "Bookkeeping cleanup per month",
        "Multi-year catch-up available",
        "QuickBooks setup and training",
        "Ongoing monthly service available",
      ],
    },
    {
      category: "Monthly Bookkeeping",
      items: [
        "Monthly reconciliation & reports",
        "P&L, Balance Sheet, Cash Flow",
        "Job Costing & project tracking",
        "Payroll Support",
        "Quarterly financial review calls",
      ],
    },
    {
      category: "QuickBooks Setup & Training",
      items: [
        "Industry-specific chart of accounts",
        "Bank feed & app integration",
        "Custom invoice and report setup",
        "Personalized 1-on-1 training",
        "Ongoing support as needed",
      ],
    },
  ];
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
                alt="Professional bookkeeper working with financial documents"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Books Reconciled Monthly
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Tax-Ready Financials
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Strategic Business Insights
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl">💼</span>
            </div>
          </div>

          <div>
            <h2 className="md:text-2xl  gradient-text font-bold text-gray-900 mb-6">
              Tell Her Your Problem And She'll Find A Solution
            </h2>

            <p className="md:md:text-xl text-sm  mb-8 leading-relaxed">
              <span className="font-semibold text-gray-900">
                April Does Data
              </span>{" "}
              is a Certified QuickBooks ProAdvisor who works with clients
              remotely across the country. Whether your books are a mess, your
              payroll is behind, or you're prepping for a surprise audit, we
              step in and clean it up. Fast. Accurate. Done Right. Even when no
              one's looking.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {credentials.map((cred, index) => (
                <Card key={index} className="border-0 shadow-md hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                      {cred.title === "QuickBooks ProAdvisor" ? (
                        <img
                          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5d277938d_logoQB.png"
                          alt="QuickBooks ProAdvisor Certified"
                          className="w-8 h-8"
                        />
                      ) : (
                        <cred.icon className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {cred.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {cred.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-lg">📘</span>
                <span className="text-sm font-medium text-gray-700">
                  QuickBooks
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-lg">🏛️</span>
                <span className="text-sm font-medium text-gray-700">
                  IRS Compliant
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
      </div>
    </section>
  );
}
