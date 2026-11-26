export const dynamic = 'force-dynamic';

export default async function ReturnPolicyPage() {
  // ملاحظة: إذا كان الكود القديم الخاص بك يحتوي على استعلام Prisma هنا، 
  // يمكنك إعادته، لكن السطر الأول (force-dynamic) هو الذي سيحل مشكلة البناء.

  return (
    <div className="container mx-auto p-8 max-w-4xl" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">سياسة الاسترجاع والاستبدال</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 text-gray-700">
        <p>
          مرحباً بك في متجرنا. نحن نسعى دائماً لرضاك التام عن مشترياتك. إذا لم تكن راضياً عن طلبك لأي سبب،
          يمكنك استرجاعه أو استبداله وفقاً للشروط التالية:
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-2">1. مدة الاسترجاع</h2>
        <p>يمكنك طلب استرجاع أو استبدال المنتج خلال 14 يوماً من تاريخ استلامه.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. حالة المنتج</h2>
        <p>يجب أن يكون المنتج في حالته الأصلية، غير مستخدم، وموجوداً في عبوته الأصلية.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. تكاليف الاسترجاع</h2>
        <p>يتحمل العميل تكاليف شحن الاسترجاع، إلا في حال كان المنتج تالفاً أو خاطئاً من طرفنا.</p>
      </div>
    </div>
  );
}
