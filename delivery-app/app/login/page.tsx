"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
    const [phone, setPhone] = useState("");
      const [password, setPassword] = useState("");

        const handleLogin = (e: React.FormEvent) => {
            e.preventDefault();
                // مؤقتاً بنحولهم للمندوب
                    router.push("/driver");
                      };

                        return (
                            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                                  <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                                          <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>
                                                  <form onSubmit={handleLogin} className="space-y-4">
                                                            <input
                                                                        type="text"
                                                                                    placeholder="رقم الهاتف"
                                                                                                className="w-full p-3 border rounded-lg"
                                                                                                            onChange={(e) => setPhone(e.target.value)}
                                                                                                                      />
                                                                                                                                <input
                                                                                                                                            type="password"
                                                                                                                                                        placeholder="كلمة المرور"
                                                                                                                                                                    className="w-full p-3 border rounded-lg"
                                                                                                                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                          />
                                                                                                                                                                                                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
                                                                                                                                                                                                                دخول
                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                  </form>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                              }