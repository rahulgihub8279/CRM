import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { serverUrl } from "../App.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        toast.warn("all fields are required");
        return;
      }
      const response = await axios.post(
        `${serverUrl}/api/user/login`,
        { email, password },
        { withCredentials: true },
      );
      dispatch(setUserData(response.data));
      toast.success("welcome");
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
          Welcome to <span className="text-blue-600">CRM</span>
        </h2>
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

        <button
          className="w-[80%] text-white mt-2 rounded bg-black p-3 text-sm cursor-pointer"
          type="submit"
          onClick={handleLogin}
        >
          {loading ? (
            <ClipLoader size={15} color="white"></ClipLoader>
          ) : (
            "Login"
          )}
        </button>

        <div className="text-sm text-zinc-600 mt-5">
          don't have account ?{" "}
          <span
            className="text-blue-700 underline underline-offset-1 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            signup
          </span>
        </div>
      </form>
    </div>
  );
}
