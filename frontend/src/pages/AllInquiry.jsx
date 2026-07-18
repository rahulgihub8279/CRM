import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../App.jsx";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AllInquiry() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useSelector((state) => state.user);

  const deleteInquiry = async (id) => {
    try {
      await axios.delete(`${serverUrl}/api/inquiry/delete/${id}`, {
        withCredentials: true,
      });
      toast.success("inquiry deleted");
      setInquiries((prev) => prev.filter((inquiry) => inquiry._id !== id));
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    const getAllInquiry = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/inquiry/get`, {
          withCredentials: true,
        });
        setInquiries(res.data.allInquiry);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    getAllInquiry();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        <ClipLoader></ClipLoader>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-5 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Product Inquiries</h1>

        {inquiries?.length === 0 ? (
          <div className="text-center text-gray-500">No inquiries found.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {inquiries?.map((item) => (
              <div key={item._id} className="bg-white rounded-xl shadow-md p-6">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Name:</span> {item.fullName}
                  </p>

                  <p>
                    <span className="font-semibold">Company:</span>{" "}
                    {item.companyName}
                  </p>

                  <p>
                    <span className="font-semibold">Email:</span> {item.email}
                  </p>

                  <p>
                    <span className="font-semibold">Phone:</span> {item.phone}
                  </p>

                  <p>
                    <span className="font-semibold">Country:</span>{" "}
                    {item.country}
                  </p>

                  <p>
                    <span className="font-semibold">Industry:</span>{" "}
                    {item.industry}
                  </p>

                  <p>
                    <span className="font-semibold">Company Size:</span>{" "}
                    {item.companySize}
                  </p>

                  <div>
                    <span className="font-semibold">Message:</span>
                    <p className="text-gray-600 mt-1">{item.message}</p>
                  </div>
                </div>
                {userData?.role === "admin" && (
                  <button
                    onClick={() => deleteInquiry(item._id)}
                    className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
                  >
                    Delete Inquiry
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
