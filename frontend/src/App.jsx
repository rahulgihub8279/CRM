import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home.jsx"));
import Loader from "./components/Loader.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllInquiry from "./pages/AllInquiry.jsx";
export const serverUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  return (
    <>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route
            path="/all-inquiry"
            element={<AllInquiry></AllInquiry>}
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
