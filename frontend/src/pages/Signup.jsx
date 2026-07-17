import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { setUserData } from "../redux/userSlice.js";
import axios from "axios";
import { serverUrl } from "../App.jsx";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password || !role) {
        toast.warn("all fields are required");
        return;
      }
      const response = await axios.post(
        `${serverUrl}/api/user/signup`,
        { email, password, name, role },
        { withCredentials: true },
      );
      dispatch(setUserData(response.data.newUser)); 
      toast.success("account created");
      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#ded9d9] w-screen h-screen flex items-center justify-center p-4">
      <form
        className="py-10 w-100 md:w-150 h-auto bg-white shadow-xl rounded flex flex-col gap-5 items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-xl font-bold">
          Create Account on <span className="text-blue-600">CRM</span>
        </h2>

        <div className="flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="email" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative flex flex-col gap-1 w-[80%] items-start justify-center px-0">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full h-[35px] border-zinc-600 outline-none px-3 text-[15px]"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex w-[80%] items-center justify-start mt-3 gap-3">
          <label htmlFor="password" className="font-semibold">
            Role
          </label>
          <span
            className={`px-2.5 py-1.5 border-2 rounded cursor-pointer hover:bg-zinc-300 transition-all ${role === "customer" ? "border-black" : "border-zinc-300"}`}
            onClick={() => setRole("customer")}
          >
            Customer
          </span>
          <span
            className={`px-2.5 py-1.5 border-2 rounded cursor-pointer  hover:bg-zinc-300 transition-all ${role === "admin" ? "border-black" : "border-zinc-300"}`}
            onClick={() => setRole("admin")}
          >
            Admin
          </span>
        </div>
        <button
          className="w-[80%] text-white mt-2 rounded bg-black p-3 text-sm cursor-pointer"
          type="submit"
          onClick={handleSignup}
        >
          {loading ? (
            <ClipLoader size={15} color="white"></ClipLoader>
          ) : (
            "Signup"
          )}
        </button>

        <div className="text-sm text-zinc-600 mt-5">
          already have account ?{" "}
          <span
            className="text-blue-700 underline underline-offset-1 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            login
          </span>
        </div>
      </form>
    </div>
  );
}
