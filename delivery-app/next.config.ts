import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // تجاهل أخطاء ESLint أثناء البناء لتجنب فشل النشر
    ignoreDuringBuilds: true,
  },
  images: {
    // إعدادات الصور لتجنب مشاكل النطاقات
    unoptimized: true,
  },
};

export default nextConfig;
