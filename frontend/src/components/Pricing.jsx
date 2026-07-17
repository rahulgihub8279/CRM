export default function Pricing() {
  return (
    <div className="mt-10 rounded-xl p-3 md:p-5 min-h-[80vh] mx-3 flex flex-col gap-5 md:gap-10">
      <h1 className="font-bold text-3xl md:text-5xl mt-10 mb-6 pl-10">Pricing</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:mx-5 lg:mx-10">
        {""}
        <div className="flex relative flex-col py-5 gap-7 w-1/3 hover:bg-purple-200 transition duration-200 h-[270px] border-2 border-purple-800 rounded-xl p-4">
          <h3 className="text-lg font-bold absolute -top-1 left-15 bg-white rounded border-2 border-black px-3">
            {" "}
            Starter
          </h3>
          <h3 className="text-lg font-bold mt-5"> ₹999/month</h3>
          <h4 className="font-semibold bg-black w-fit px-5 text-white py-1 rounded">
            Features
          </h4>
          <div className="flex flex-col gap-2 text-sm md:text-[15px]">
            <span>✔ CRM</span>
            <span>✔ Leads</span>
            <span>✔ Email</span>
          </div>
        </div>
        {""}
        <div className="flex relative flex-col py-5 gap-5 w-1/3 h-[270px] hover:bg-purple-200 transition duration-200 border-2 border-purple-800 rounded-xl p-4">
          <h3 className="text-lg font-bold absolute -top-1 left-10 bg-white rounded border-2 border-black px-3">
            {" "}
            Professional
          </h3>
          <h3 className="text-lg font-bold mt-5"> ₹2499/month</h3>
          <h4 className="font-semibold bg-black w-fit px-5 text-white py-1 ">
            Features
          </h4>
          <div className="flex flex-col gap-2 text-sm md:text-[15px]">
            <span>✔ Everything in Starter</span>
            <span>✔ Automation</span>
            <span>✔ Reports</span>
            <span>✔ API</span>
          </div>
        </div>
        {""}
        <div className="flex relative flex-col py-5 gap-5 w-1/3 hover:bg-purple-200 transition duration-200 h-[270px] border-2 border-purple-800 rounded-xl p-4">
        <h3 className="text-lg font-bold absolute -top-1 left-10 bg-white rounded border-2 border-black px-3">
            {" "}
            Enterprise
          </h3>
          <h3 className="text-lg font-bold mt-5"> Custom Pricing</h3>
          <h4 className="font-semibold bg-black w-fit px-5 text-white py-1 ">
            Features
          </h4>
          <div className="flex flex-col gap-2 text-sm md:text-[15px]">
            <span>✔ Unlimited</span>
            <span>✔ Priority Support</span>
            <span>✔ Dedicated Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}
