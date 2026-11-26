"use client";

import { useState } from "react";
import { MapPin, Navigation, Package, CheckCircle } from "lucide-react";

export default function CustomerHome() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropoffAddress: "",
    totalAmount: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          totalAmount: parseFloat(formData.totalAmount),
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ pickupAddress: "", dropoffAddress: "", totalAmount: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("حدث خطأ أثناء إنشاء الطلب");
      }
    } catch (error) {
      console.error(error);
      alert("حدث خطأ في الاتصال");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 flex items-center justify-center" dir="rtl">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">اطلب توصيلك الآن</h1>
          <p className="text-gray-500 mt-2">أدخل تفاصيل الطلب وسيصلك مندوب فوراً</p>
        </div>

        {success && (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            تم إرسال طلبك بنجاح! المندوب في الطريق إليك.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">عنوان الاستلام (من)</label>
            <div className="relative">
              <MapPin className="absolute right-3 top-3 w-5 h-5 text-green-500" />
              <input
                type="text"
                required
                value={formData.pickupAddress}
                onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                className="w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="مثال: مطعم الشام، شارع الحمرا"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">عنوان التوصيل (إلى)</label>
            <div className="relative">
              <Navigation className="absolute right-3 top-3 w-5 h-5 text-red-500" />
              <input
                type="text"
                required
                value={formData.dropoffAddress}
                onChange={(e) => setFormData({ ...formData, dropoffAddress: e.target.value })}
                className="w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="مثال: شارع بغداد، بناء رقم 5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">سعر التوصيل (ل.س)</label>
            <input
              type="number"
              required
              min="0"
              value={formData.totalAmount}
              onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="مثال: 5000"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2 disabled:bg-blue-400"
          >
            {loading ? "جاري الإرسال..." : "تأكيد الطلب"}
          </button>
        </form>
      </div>
    </div>
  );
}
