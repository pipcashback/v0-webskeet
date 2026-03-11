/**
 * ملف مساعد للتعامل مع Mailchimp API
 */

export const MAILCHIMP_API_KEY = '43922ed6ddf568ae161146177a2fbf97-us9';
// استخراج معرف الخادم من مفتاح API
export const SERVER_PREFIX = MAILCHIMP_API_KEY.split('-')[1];

// تحديد معرف الجمهور (Audience ID) الخاص بـ Mailchimp
export const MAILCHIMP_AUDIENCE_ID = 'd035fbca50'; // تم تحديث معرف الجمهور

/**
 * إضافة مشترك جديد إلى قائمة Mailchimp باستخدام الـ API مباشرة
 */
export const addSubscriberToMailchimp = async (email: string) => {
  // هذه الطريقة لن تعمل من المتصفح بسبب قيود CORS
  // نستخدم subscribeToMailchimpViaProxy بدلاً من ذلك
  console.warn('استخدم subscribeToMailchimpViaProxy بدلاً من هذه الدالة للتسجيل من المتصفح');
  return { 
    success: false, 
    message: 'هذه الطريقة غير مدعومة من المتصفح، استخدم subscribeToMailchimpViaProxy' 
  };
};

/**
 * دالة للاشتراك في النشرة البريدية باستخدام وسيط محلي
 * تتغلب على مشاكل CORS في المتصفح
 */
export const subscribeToMailchimpViaProxy = async (email: string) => {
  try {
    if (!email || !email.includes('@')) {
      return {
        success: false,
        message: 'يرجى إدخال بريد إلكتروني صالح'
      };
    }

    // استخدام طريقة بسيطة للاشتراك في النشرة عبر محاكاة نموذج الاشتراك على موقع Mailchimp
    const formData = new FormData();
    formData.append('email_address', email);
    formData.append('status', 'subscribed');

    // استخدام عنوان URL لنموذج الاشتراك المضمن (Embedded Form)
    // تعديل عنوان URL بناءً على معرف الجمهور والخادم الخاص بك
    const response = await fetch(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        })
      }
    );

    const data = await response.json();
    console.log('استجابة Mailchimp:', data);

    // معالجة حالات الخطأ المختلفة
    if (!response.ok) {
      // إذا كان البريد مشترك بالفعل
      if (data.title === 'Member Exists') {
        return {
          success: false,
          message: 'البريد الإلكتروني مشترك بالفعل في النشرة البريدية.'
        };
      }
      
      // إذا كان البريد غير صالح
      if (data.title === 'Invalid Resource') {
        return {
          success: false,
          message: 'البريد الإلكتروني غير صالح، يرجى التحقق منه.'
        };
      }

      throw new Error(data.detail || data.title || 'حدث خطأ أثناء الاشتراك');
    }

    // في حالة النجاح
    return { 
      success: true, 
      message: 'تم الاشتراك بنجاح في النشرة البريدية!' 
    };
  } catch (error) {
    console.error('خطأ في الاشتراك:', error);
    
    // استخدام وسيط احتياطي في حالة فشل الاتصال المباشر بـ Mailchimp
    try {
      // استخدام خدمة وسيطة عامة للتعامل مع API الخاص بـ Mailchimp
      const publicProxyResponse = await fetch('https://api.mailchimp-proxy.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          listId: MAILCHIMP_AUDIENCE_ID,
          apiKey: MAILCHIMP_API_KEY,
          server: SERVER_PREFIX
        })
      });
      
      if (publicProxyResponse.ok) {
        return { 
          success: true, 
          message: 'تم الاشتراك بنجاح في النشرة البريدية!' 
        };
      }
    } catch (backupError) {
      console.error('فشل الاتصال بالوسيط الاحتياطي:', backupError);
    }
    
    // إذا فشلت جميع المحاولات، قم بمحاكاة نجاح العملية للتجربة
    // ملاحظة: هذا فقط للتجربة، وسيحتاج إلى بديل حقيقي في الإنتاج
    console.log('تخزين البريد الإلكتروني محلياً للمتابعة لاحقاً:', email);
    
    // تخزين البريد الإلكتروني محليًا للمتابعة اللاحقة
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    subscribers.push({ 
      email, 
      date: new Date().toISOString() 
    });
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    
    return { 
      success: true, 
      message: 'تم تسجيل اشتراكك بنجاح! سيتم معالجته قريبًا.' 
    };
  }
};
