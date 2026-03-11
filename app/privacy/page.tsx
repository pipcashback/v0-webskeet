import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "تعرف على سياسة الخصوصية وكيفية جمع واستخدام وحماية معلوماتك الشخصية في ويب سكيت",
  alternates: {
    canonical: "https://webskeet.com/privacy",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/privacy",
    title: "سياسة الخصوصية",
    description: "تعرف على سياسة الخصوصية وكيفية جمع واستخدام وحماية معلوماتك الشخصية في ويب سكيت",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "سياسة الخصوصية",
    description: "تعرف على سياسة الخصوصية وكيفية جمع واستخدام وحماية معلوماتك الشخصية في ويب سكيت",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function PrivacyPage() {
  return (
    <main className="flex-grow pt-32 pb-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="max-w-3xl mx-auto text-right">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-webskeet-blue">سياسة الخصوصية</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            تلتزم Webskeet بحماية خصوصية مستخدمي موقعنا. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا
            لمعلوماتك الشخصية.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">المعلومات التي نجمعها</h2>
          <p className="mb-4">قد نجمع المعلومات التالية:</p>
          <ul className="list-disc mr-6 mb-6 space-y-2">
            <li>الاسم</li>
            <li>معلومات الاتصال بما في ذلك البريد الإلكتروني</li>
            <li>معلومات ديموغرافية مثل الرمز البريدي والتفضيلات والاهتمامات</li>
            <li>معلومات أخرى ذات صلة لاستطلاعات العملاء و/أو العروض</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">كيف نستخدم المعلومات التي نجمعها</h2>
          <p className="mb-4">
            نحتاج إلى هذه المعلومات لفهم احتياجاتك وتقديم خدمة أفضل لك، وعلى وجه الخصوص للأسباب التالية:
          </p>
          <ul className="list-disc mr-6 mb-6 space-y-2">
            <li>الحفاظ على السجلات الداخلية.</li>
            <li>تحسين منتجاتنا وخدماتنا.</li>
            <li>
              إرسال رسائل بريد إلكتروني ترويجية عن منتجات جديدة أو عروض خاصة أو معلومات أخرى نعتقد أنها قد تكون مثيرة
              لاهتمامك.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">الأمان</h2>
          <p className="mb-6">
            نحن ملتزمون بضمان أمان معلوماتك. من أجل منع الوصول غير المصرح به أو الكشف عنها، وضعنا إجراءات مادية
            وإلكترونية وإدارية مناسبة للحفاظ على المعلومات التي نجمعها عبر الإنترنت وتأمينها.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">ملفات تعريف الارتباط</h2>
          <p className="mb-6">
            ملف تعريف الارتباط هو ملف صغير يطلب الإذن ليتم وضعه على القرص الصلب لجهاز الكمبيوتر الخاص بك. بمجرد موافقتك،
            تتم إضافة الملف ويساعد ملف تعريف الارتباط في تحليل حركة المرور على الويب أو يتيح لك معرفة متى قمت بزيارة
            موقع معين.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">التحكم في معلوماتك الشخصية</h2>
          <p className="mb-6">يمكنك اختيار تقييد جمع أو استخدام معلوماتك الشخصية بالطرق التالية:</p>
          <ul className="list-disc mr-6 mb-6 space-y-2">
            <li>
              عندما يُطلب منك ملء نموذج على موقع الويب، ابحث عن المربع الذي يمكنك النقر عليه للإشارة إلى أنك لا ترغب في
              استخدام المعلومات لأغراض التسويق المباشر
            </li>
            <li>
              إذا كنت قد وافقت مسبقًا على استخدامنا لمعلوماتك الشخصية للتسويق المباشر، يمكنك تغيير رأيك في أي وقت عن طريق
              مراسلتنا عبر البريد الإلكتروني.
            </li>
          </ul>

          <p className="mb-6">
            لن نبيع أو نوزع أو نؤجر معلوماتك الشخصية لأطراف ثالثة ما لم يكن لدينا إذن منك أو يكون ذلك مطلوبًا بموجب
            القانون.
          </p>

          <p className="mt-8">تم تحديث سياسة الخصوصية هذه في 30 إبريل 2025.</p>
        </div>
      </div>
    </main>
  )
}
