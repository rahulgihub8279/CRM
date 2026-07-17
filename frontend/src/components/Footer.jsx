import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white py-7 px-6 w-full">
      <div className="max-w-7xl mx-auto flex  items-start justify-center gap-10 lg:gap-35 flex-col lg:flex-row">
        <div className="lg:w-[40%] md:w-[50%] w-full">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="text-white flex items-center py-2 rounded bg-[#0a0f09f4]"
          >
            <span className="font-extrabold text-2xl">CRM</span>
            <span className="font-extrabold text-2xl text-blue-600">
              Project
            </span>
          </div>
          <p className="text-sm">
            We've tried our best to give great services possible. We'd like to
            hear feedbacks from our customer to make it more impactful.
          </p>
        </div>
        <div className="lg:w-[30%] md:w-full">
          <div className="text-white font-semibold mb-2"> Quick Links</div>
          <ul className="text-sm space-y-1 transition-all duration-300">
            <li
              className="cursor-pointer hover:text-lime-300"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Home
            </li>

            <li
              className="cursor-pointer hover:text-lime-300"
              onClick={() => navigate("/login")}
            >
              Login
            </li>
          </ul>
        </div>
        <div className="lg:w-[30%] md:w-full">
          <div className="text-white font-semibold mb-2">Our services</div>
          <ul className="text-sm space-y-1 transition-all duration-300">
            <li className="text-zinc-400">Customer Management</li>
            <li className="text-zinc-400">Analytics Dashboard</li>
            <li className="text-zinc-400">Automation</li>
            <li className="text-zinc-400">Team Collaboration</li>
            <li className="text-zinc-400">Secure Cloud Storage</li>
            <li className="text-zinc-400">Email Integration</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} CRM Project. All rights reserved.
      </div>
    </div>
  );
}
