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

export default function Pricing() {
  return (
    <div className="mt-5 md:mt-10 rounded-2xl p-3 md:p-5 min-h-screen mx-1 md:mx-3 mb-5 flex flex-col gap-4 md:gap-6 bg-[#1a1a1a] items-center shadow-xl shadow-black">
      <h1 className="font-medium tracking-wide text-2xl md:text-4xl mt-8 text-center text-white">
        Find the Right Plan for Your Firm
      </h1>
      <p className="text-center text-zinc-400 w-[50%] md:w-[35%] text-sm font-light">
        Start with the features you need today, then compare the automation,
        reporting, and intelligence capabilities that support growth.
      </p>
      <div className="flex items-center gap-4">
        <button className="text-black bg-white px-3 py-[5px] text-xs md:text-sm font-semibold rounded-lg">
          Get Demo
        </button>
        <button className="text-black bg-[#d9ff42] px-3 py-[5px] text-xs md:text-sm font-semibold rounded-lg">
          Explore Features
        </button>
      </div>
      <div className="max-w-5xl mx-auto mt-10 mb-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border ${plan.border} bg-[#1a1b1d] px-9 flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(163,230,53,0.12)]`}
            >
              {/* Icon */}

              {/* Title */}
              <h3 className={`md:text-3xl text-2xl font-bold mt-6 ${plan.color}`}>
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mt-5 flex items-end gap-2">
                <span className={`md:text-4xl text-2xl font-bold ${plan.color}`}>
                  {plan.price}
                </span>

                <span className="text-zinc-400 mb-2">/ month per user</span>
              </div>

              <hr className="border-zinc-700 my-5" />

              {/* Description */}
              <div>
                <h4 className="text-white text-sm md:text-lg font-semibold mb-3">
                  Best For :
                </h4>

                <p className="text-zinc-400 leading-6 text-xs md:text-sm">
                  Businesses looking to manage customers, sales, and workflows
                  from a single CRM platform.
                </p>
              </div>

              <hr className="border-zinc-700 my-5" />

              {/* Features */}
              <h4 className="text-white md:text-lg text-sm font-semibold mb-5">
                Features Included :
              </h4>

              <div className="space-y-2 flex-1">
                {plan.features.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-3 h-3 rotate-45 border border-zinc-300 mt-2"></div>

                    <p className="text-zinc-300 xtext-sm">{item}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`mt-10 rounded-xl py-2 mb-5 font-semibold text-sm md:text-lg transition duration-300 cursor-pointer ${plan.button}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
