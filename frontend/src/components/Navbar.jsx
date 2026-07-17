import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice.js";

export default function Navbar() {
  const [showHem, setShowHem] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await axios.get(`${serverUrl}/api/user/logout`, {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      toast.success("logout successs");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-18 z-1 mt-0 top-0 fixed px-5 py-2 flex items-center justify-between bg-[#e9ecef]/20 backdrop-blur-sm shadow-lg border-blue-800/30">
      <Link
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="text-white flex items-center lg:pl-5 px-6 py-2 rounded  bg-[#0a0f09f4]"
      >
        <span className="font-extrabold text-2xl">CRM</span>
        <span className="font-extrabold text-2xl text-blue-600">Project</span>
      </Link>
      {/* {"right"} */}
      <MdMenu
        size={35}
        className="md:hidden absolute right-5 cursor-pointer"
        onClick={() => setShowHem(!showHem)}
      />

      <div className="w-full items-center justify-end md:flex hidden gap-3 rounded">
        {userData && (
          <div
            onClick={() => navigate("/all-inquiry")}
            className="px-4 py-2 border border-white text-white bg-black rounded font-semibold cursor-pointer"
          >
            All Inquiry
          </div>
        )}
        {!userData ? (
          <Link
            to={"/login"}
            className="px-4 py-2 border border-white text-white bg-black rounded font-semibold cursor-pointer"
          >
            Login
          </Link>
        ) : (
          <div
            className="px-3 py-2 w-20 h-10 shadow-black text-white bg-red-500 rounded cursor-pointer font-semibold  items-center justify-center"
            onClick={handleLogout}
          >
            {loading ? (
              <ClipLoader size={15} color="white"></ClipLoader>
            ) : (
              "Logout"
            )}
          </div>
        )}
      </div>
      {/* menu div  */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen items-center justify-center bg-zinc-300 flex flex-col md:hidden gap-6 z-5 ${showHem ? "translate-x-0 transition duration-500" : "-translate-x-full transition duration-500"}`}
      >
        <GrClose
          size={30}
          className={`absolute right-10 top-9 transition-all duration-100`}
          onClick={() => setShowHem(!showHem)}
        />
        <div
          onClick={() => navigate("/all-inquiry")}
          className="px-4 py-2 border w-[50%] text-center text-white bg-blue-500 rounded font-semibold cursor-pointer"
        >
          All inquiry
        </div>

        {!userData ? (
          <Link
            to={"/login"}
            className="px-4 py-2 border w-[50%] text-center border-white text-white bg-black rounded font-semibold cursor-pointer"
          >
            Login
          </Link>
        ) : (
          <div
            className="px-3 py-2 w-[50%] text-center h-10 shadow-black text-white bg-red-500 rounded cursor-pointer font-semibold  items-center justify-center"
            onClick={handleLogout}
          >
            {loading ? (
              <ClipLoader size={15} color="white"></ClipLoader>
            ) : (
              "Logout"
            )}
          </div>
        )}
      </div>
    </div>
  );
}
