import saas from "../assets/saas.png";
export default function Hero() {
  return (
    <div className="mt-20 rounded-xl p-2 md:p-5 border border-gray-200 bg-gray-200 md:min-h-screen mx-1 md:mx-3 flex flex-col gap-10 md:gap-5">
      {/* top */}
      <div className="flex flex-col space-y-4 gap-3 p-3 md:p-6 items-center justify-center">
        <h1 className="font-bold text-4xl text-center md:text-6xl mt-10 md:mt-15">
          Grow Your Sales Faster
        </h1>
        <p className="font-medium md:text-2xl text-center text-xl mt-4 tracking-normal">
          Manage customers, automate workflows, and close more deals with our
          powerful <span className="text-blue-800">CRM</span>
        </p>
        <div className="flex gap-20 mt-10">
          <button className="md:px-8 px-3 md:py-3 py-1 text-lg bg-transparent text-black rounded border-3 border-blue-800 cursor-pointer font-medium hover:border-blue-950 transition duration-100 active:scale-95">
            Start Free Trial
          </button> 
        </div>
      </div>
      {/* bottom */}
      <div className="flex my-4 mx-0 md:mx-6 justify-center">
        <img
          src={saas}
          alt="..saas"
          className="w-full max-w-5xl h-auto rounded md:rounded-xl border border-zinc-300 shadow-lg"
        />
      </div>
    </div>
  );
}
