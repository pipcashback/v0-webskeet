import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, subject, message } = data

    // هنا يمكنك إضافة كود لإرسال البريد الإلكتروني أو حفظ البيانات في قاعدة بيانات
    // مثال: إرسال بريد إلكتروني باستخدام Nodemailer أو SendGrid

    // للتجربة، سنقوم فقط بإرجاع استجابة نجاح
    console.log("تم استلام رسالة جديدة:", { name, email, subject, message })

    return NextResponse.json({
      success: true,
      message: "تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.",
    })
  } catch (error) {
    console.error("خطأ في معالجة نموذج الاتصال:", error)
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
      },
      { status: 500 },
    )
  }
}
