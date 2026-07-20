import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { serverUrl } from "../App.jsx";
import axios from "axios";

export default function Inquiry() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (
        !fullName ||
        !companyName ||
        !email ||
        !phone ||
        !country ||
        !industry ||
        !companySize ||
        !message
      ) {
        toast.warn("all fields are required");
        return;
      }
      if (phone.length !== 10) {
        toast.warn("invalid phone");
        return;
      }
      await axios.post(
        `${serverUrl}/api/inquiry/create`,
        {
          fullName,
          companyName,
          email,
          phone,
          country,
          industry,
          companySize,
          message,
        },
        { withCredentials: true },
      );
      toast.success("inquiry submited");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:w-screen min-h-[80vh] flex flex-col items-center justify-center gap-8 p-2 md:p-4 mb-10">
      <h2 className="text-4xl font-bold ">Create Inquiry</h2>
      <form
        className="py-10 w-[95%] md:w-150 h-auto bg-white shadow-xl rounded-xl border-2 border-blue-200 flex flex-col gap-5 items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        {""}
        <div className="flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="email" className="font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            company Name
          </label>
          <input
            type="password"
            id="companyname"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            Country
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            Industry
          </label>
          <input
            type="text"
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            Company Size
          </label>
          <input
            type="text"
            id="companySize"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border w-full h-[50px] border-zinc-600 outline-none px-3 text-[15px]"
          />
        </div>
        {""}
        <button
          className="w-[80%] text-white mt-2 rounded bg-black p-3 text-sm cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? (
            <ClipLoader size={15} color="white"></ClipLoader>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}
