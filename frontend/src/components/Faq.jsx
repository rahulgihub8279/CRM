import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How secure is the CRM?",
    answer:
      "Our CRM uses industry-standard encryption, secure cloud infrastructure, and regular security updates to keep your business data safe.",
  },
  {
    question: "Does it support integrations?",
    answer:
      "Yes. Our CRM integrates with popular tools such as Gmail, Outlook, Slack, Zapier, and many other third-party applications.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time without any hidden fees.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes. We provide email support for all plans, while Professional and Enterprise customers also receive priority support.",
  },
];
export default function Faq() {
  const [active, setActive] = useState(null);
  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="min-h-[60vh] bg-zinc-100 px-5 py-12">
      <h1 className="font-bold text-3xl md:text-5xl pl-8">Faq</h1>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-blue-800 font-bold text-xl md:text-3xl mt-4 text-center">
          We Have Answers
        </h3>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
