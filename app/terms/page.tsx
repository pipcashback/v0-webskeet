import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description: "تعرف على شروط وأحكام استخدام خدمات ويب سكيت لتحسين محركات البحث",
  alternates: {
    canonical: "https://webskeet.com/terms",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/terms",
    title: "الشروط والأحكام",
    description: "تعرف على شروط وأحكام استخدام خدمات ويب سكيت لتحسين محركات البحث",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "الشروط والأحكام",
    description: "تعرف على شروط وأحكام استخدام خدمات ويب سكيت لتحسين محركات البحث",
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

export default function TermsPage() {
  return (
    <main className="flex-grow pt-32 pb-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className="max-w-3xl mx-auto text-right">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-webskeet-blue">الشروط والأحكام</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            مرحبًا بك في Webskeet. باستخدامك لموقعنا وخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى
            قراءتها بعناية.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">استخدام الموقع</h2>
          <p className="mb-6">
            يخضع استخدام هذا الموقع للقوانين واللوائح المعمول بها. أنت توافق على عدم استخدام الموقع بطريقة قد تؤدي إلى
            إتلافه أو إضعاف أدائه أو فعاليته، وعدم محاولة الوصول غير المصرح به إلى أنظمتنا أو شبكاتنا.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">الخدمات والاشتراكات</h2>
          <p className="mb-4">
            تقدم شركة Webskeet خدمات بناء الروابط الخلفية والاستشارات والتحليل وفقًا للشروط التالية:
          </p>
          <ul className="list-disc mr-6 mb-6 space-y-2">
            <li>جميع الروابط الخلفية المقدمة ستكون من مواقع حقيقية ذات تصنيف DA 30+ كحد أدنى.</li>
            <li>يتم تقديم الخدمات على أساس اشتراك شهري ويمكن إلغاؤه في أي وقت.</li>
            <li>نضمن جودة الروابط ولكننا لا نضمن نتائج محددة في الترتيب حيث أن محركات البحث تعتمد على عوامل متعددة.</li>
            <li>تخضع الاستشارات للتوافر ويجب جدولتها مسبقًا.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">المدفوعات وسياسة الاسترداد</h2>
          <p className="mb-6">
            يتم دفع رسوم الاشتراك الشهرية مقدمًا. نحن نقدم ضمان استرداد الأموال لمدة 14 يومًا. إذا لم تكن راضيًا عن
            خدماتنا، يمكنك طلب استرداد كامل خلال الـ 14 يومًا الأولى من اشتراكك.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">الملكية الفكرية</h2>
          <p className="mb-6">
            جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور والمقاطع الصوتية ومقاطع
            الفيديو، مملوكة لشركة Webskeet أو مرخصة لها ومحمية بموجب قوانين حقوق النشر والعلامات التجارية.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">التنصل من المسؤولية</h2>
          <p className="mb-6">
            يتم توفير المعلومات الموجودة على هذا الموقع "كما هي" دون أي ضمان من أي نوع، صريح أو ضمني. شركة Webskeet لا
            تضمن دقة أو موثوقية أو اكتمال المعلومات الموجودة على الموقع.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">تحديد المسؤولية</h2>
          <p className="mb-6">
            لن تكون شركة Webskeet مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام أو
            عدم القدرة على استخدام موقعنا أو خدماتنا.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">القانون المعمول به</h2>
          <p className="mb-6">
            تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين دولة الإمارات العربية المتحدة وجمهورية مصر العربية، وتخضع أي
            نزاعات للاختصاص الحصري للمحاكم المختصة في هاتين الدولتين.
          </p>

          <p className="mt-8">تم تحديث شروط الخدمة هذه في 30 إبريل 2025.</p>
        </div>
      </div>
    </main>
  )
}
