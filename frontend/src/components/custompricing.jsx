import { Cube } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "$29",
    color: "text-white",
    border: "border-zinc-700",
    button: "bg-white text-black",
    icon: "text-white",
    features: [
      "Lead Management",
      "Contact Management",
      "Task & Reminder",
      "Email Integration",
      "Basic Reports",
    ],
  },
  {
    title: "Professional",
    price: "$79",
    color: "text-white",
    border: "border-zinc-700",
    button: "bg-white text-black",
    icon: "text-white",
    features: [
      "Everything in Starter",
      "Sales Pipeline",
      "Team Management",
      "Workflow Automation",
      "Advanced Analytics",
      "Custom Dashboards",
    ],
  },
  {
    title: "Enterprise",
    price: "$149",
    color: "text-lime-400",
    border: "border-lime-400",
    button: "bg-lime-400 text-black",
    icon: "text-lime-400",
    features: [
      "Everything in Professional",
      "AI Lead Scoring",
      "Predictive Analytics",
      "Custom API Access",
      "Unlimited Users",
      "Priority Support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-[#0f1012] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white">
          CRM Pricing
        </h2>

        <p className="text-zinc-400 text-center mt-4 mb-14">
          Choose the perfect plan for your business.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border ${plan.border} bg-[#1a1b1d] p-8 flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(163,230,53,0.12)]`}
            >
              {/* Icon */}
              <Cube className={`w-10 h-10 ${plan.icon}`} />

              {/* Title */}
              <h3 className={`text-4xl font-bold mt-6 ${plan.color}`}>
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mt-5 flex items-end gap-2">
                <span className={`text-6xl font-bold ${plan.color}`}>
                  {plan.price}
                </span>

                <span className="text-zinc-400 mb-2">
                  / month per user
                </span>
              </div>

              <hr className="border-zinc-700 my-8" />

              {/* Description */}
              <div>
                <h4 className="text-white text-xl font-semibold mb-3">
                  Best For :
                </h4>

                <p className="text-zinc-400 leading-7">
                  Businesses looking to manage customers, sales,
                  and workflows from a single CRM platform.
                </p>
              </div>

              <hr className="border-zinc-700 my-8" />

              {/* Features */}
              <h4 className="text-white text-xl font-semibold mb-5">
                Features Included :
              </h4>

              <div className="space-y-5 flex-1">
                {plan.features.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-3 h-3 rotate-45 border border-zinc-300 mt-2"></div>

                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`mt-10 rounded-xl py-4 font-semibold text-lg transition duration-300 hover:scale-105 ${plan.button}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}