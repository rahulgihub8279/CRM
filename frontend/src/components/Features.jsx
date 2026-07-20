export default function Features() {
  return (
    <div className="mt-0 md:mt-10 rounded-xl p-2 md:p-5 min-h-[90vh] mx-1 md:mx-3 flex flex-col gap-5">
      {/* top */}
      <div className="flex flex-col space-y-3 p-3 md:p-6 ">
        <h1 className="font-bold text-3xl md:text-5xl mt-10 md:mt-2">
          Features 
        </h1>
        <p className="font-medium md:text-xl md:w-[50%] text-sm mt-4 tracking-wide">
          We've tried our best to give great services possible. We'd like to
          hear feedbacks from our customer to make it more impactful.
        </p>
      </div>
      {/* bottom */}
      <div className="max-w-[90%] ml-5 flex items-center justify-center gap-8 md:gap-12 flex-wrap mb-10 mt-5 md:mt-10">
        {""}
        <div className="w-[60%] border border-blue-200 shadow-xl md:w-[35%] h-[100px] transition-all duration-200 font-light flex flex-col items-start gap-2 rounded-lg bg-mist-200 p-2 px-3 md:px-5 justify-center">
          <span className="font-semibold text-sm md:text-lg text-center text-mist-700">
            Customer Management
          </span>
          <p className="text-xs md:text-sm text-blue-900 font-medium">
            Track every customer interaction in one place.
          </p>
        </div>
        {""}
        <div className="w-[60%] border border-blue-200 shadow-xl md:w-[35%] h-[100px] transition-all duration-200 font-light flex flex-col items-start gap-2 rounded-lg bg-mist-200 p-2 px-3 md:px-5 justify-center">
          <span className="font-semibold text-sm md:text-lg text-center text-mist-700">
            Analytics Dashboard
          </span>
          <p className="text-xs md:text-sm text-blue-900 font-medium">
            Real-time business insights.
          </p>
        </div>
        {""}
        <div className="w-[60%] border border-blue-200 shadow-xl md:w-[35%] h-[100px] transition-all duration-200 font-light flex flex-col items-start gap-2 rounded-lg bg-mist-200 p-2 px-3 md:px-5 justify-center">
          <span className="font-semibold text-sm md:text-lg text-center text-mist-700">
            Automation
          </span>
          <p className="text-xs md:text-sm text-blue-900 font-medium">
            Automate repetitive tasks.
          </p>
        </div>
        {""}
        <div className="w-[60%] border border-blue-200 shadow-xl md:w-[35%] h-[100px] transition-all duration-200 font-light flex flex-col items-start gap-2 rounded-lg bg-mist-200 p-2 px-3 md:px-5 justify-center">
          <span className="font-semibold text-sm md:text-lg text-center text-mist-700">
            Team Collaboration
          </span>
          <p className="text-xs md:text-sm text-blue-900 font-medium">
            Track every customer interaction in one place.
          </p>
        </div>
        {""}
        <div className="w-[60%] border border-blue-200 shadow-xl md:w-[35%] h-[100px] transition-all duration-200 font-light flex flex-col items-start gap-2 rounded-lg bg-mist-200 p-2 px-3 md:px-5 justify-center">
          <span className="font-semibold text-sm md:text-lg text-center text-mist-700">
            Secure Cloud Storage
          </span>
          <p className="text-xs md:text-sm text-blue-900 font-medium">
            secure your data on cloud services
          </p>
        </div>
        {""}
        <div className="w-[60%] border border-blue-200 shadow-xl md:w-[35%] h-[100px] transition-all duration-200 font-light flex flex-col items-start gap-2 rounded-lg bg-mist-200 p-2 px-3 md:px-5 justify-center">
          <span className="font-semibold text-sm md:text-lg text-center text-mist-700">
            Email Integration
          </span>
          <p className="text-xs md:text-sm text-blue-900 font-medium">
            Integrate your email with our services.
          </p>
        </div>
      </div>
    </div>
  );
}
