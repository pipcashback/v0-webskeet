"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function ContactClient() {
  const [mounted, setMounted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    setMounted(true)

    // Monitor Mailchimp response messages
    const checkMailchimpResponse = () => {
      const errorResponse = document.getElementById("mce-error-response")
      const successResponse = document.getElementById("mce-success-response")

      if (errorResponse && errorResponse.style.display !== "none" && errorResponse.textContent) {
        const errorText = errorResponse.textContent.toLowerCase()
        setShowError(true)
        setShowSuccess(false)

        // Translate common Mailchimp errors to Arabic
        if (errorText.includes("already subscribed")) {
          setErrorMessage("لقد تواصلت معنا سابقاً. سنرد عليك قريباً")
        } else if (errorText.includes("valid email") || errorText.includes("enter a value")) {
          setErrorMessage("يرجى إدخال بريد إلكتروني صحيح")
        } else if (errorText.includes("required")) {
          setErrorMessage("يرجى ملء الحقول المطلوبة")
        } else if (errorText.includes("too many")) {
          setErrorMessage("تم إرسال عدد كبير من الطلبات. يرجى المحاولة لاحقاً")
        } else {
          setErrorMessage("حدث خطأ. يرجى المحاولة مرة أخرى")
        }
      }

      if (successResponse && successResponse.style.display !== "none" && successResponse.textContent) {
        setShowSuccess(true)
        setShowError(false)
        const form = document.getElementById("mc-embedded-subscribe-form") as HTMLFormElement
        if (form) form.reset()
      }
    }

    const interval = setInterval(checkMailchimpResponse, 500)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <main className="flex-grow pt-32 pb-16 bg-gradient-to-b from-white to-blue-50/30">
      <div className="mx-auto px-4 container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">تواصل معنا</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في تحسين ظهور موقعك في محركات البحث
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-webskeet-blue/5 to-transparent">
              <CardTitle className="text-2xl text-center">أرسل لنا رسالة</CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              {showSuccess ? (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-green-700">شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowSuccess(false)
                      setShowError(false)
                    }}
                    className="px-8 py-3 bg-webskeet-blue text-white rounded-lg hover:bg-webskeet-blue/90 transition-all"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <>
                  {showError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-red-800">خطأ في الإرسال</p>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Mailchimp Form */}
                  <div id="mc_embed_shell">
                    <style jsx>{`
                      #mc_embed_signup {
                        background: transparent !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        clear: none !important;
                      }
                      #mc_embed_signup form {
                        padding: 0 !important;
                        margin: 0 !important;
                      }
                      #mc_embed_signup h2,
                      #mc_embed_signup .indicates-required,
                      #mc_embed_signup .optionalParent p,
                      #mc_embed_signup .brandingLogo {
                        display: none !important;
                      }
                      #mc_embed_signup .mc-field-group {
                        width: 100% !important;
                        padding-bottom: 0 !important;
                        min-height: auto !important;
                        margin-bottom: 1.25rem !important;
                      }
                      #mc_embed_signup label {
                        display: block !important;
                        font-weight: 600 !important;
                        color: #374151 !important;
                        margin-bottom: 0.5rem !important;
                        text-align: right !important;
                        font-size: 0.9rem !important;
                      }
                      #mc_embed_signup .asterisk {
                        color: #ef4444 !important;
                        margin-right: 0.25rem !important;
                      }
                      #mc_embed_signup input[type="email"],
                      #mc_embed_signup input[type="text"] {
                        width: 100% !important;
                        padding: 0.75rem !important;
                        border: 2px solid #e5e7eb !important;
                        border-radius: 0.5rem !important;
                        font-size: 1rem !important;
                        transition: all 0.3s !important;
                        direction: rtl !important;
                        background: white !important;
                      }
                      #mc_embed_signup input[type="email"]:focus,
                      #mc_embed_signup input[type="text"]:focus {
                        outline: none !important;
                        border-color: #2563eb !important;
                        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1) !important;
                      }
                      #mc_embed_signup .button {
                        width: 100% !important;
                        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
                        color: white !important;
                        padding: 0.875rem 2rem !important;
                        border: none !important;
                        border-radius: 0.5rem !important;
                        font-size: 1.125rem !important;
                        font-weight: 600 !important;
                        cursor: pointer !important;
                        transition: all 0.3s !important;
                        margin-top: 0.5rem !important;
                      }
                      #mc_embed_signup .button:hover {
                        transform: translateY(-2px) !important;
                        box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3) !important;
                        background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%) !important;
                      }
                      #mc_embed_signup .clear {
                        display: block !important;
                      }
                      #mce-error-response,
                      #mce-success-response {
                        display: none !important;
                      }
                    `}</style>

                    <div id="mc_embed_signup">
                      <form
                        action="https://dawenly.us9.list-manage.com/subscribe/post?u=06494959efc4f17721cdd07b3&id=d035fbca50&f_id=008cc2e1f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_self"
                        noValidate
                      >
                        <div id="mc_embed_signup_scroll">
                          <h2>Subscribe</h2>
                          <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                          </div>

                          {/* Email Field */}
                          <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                              البريد الإلكتروني <span className="asterisk">*</span>
                            </label>
                            <input
                              type="email"
                              name="EMAIL"
                              className="required email"
                              id="mce-EMAIL"
                              required
                              placeholder="example@email.com"
                            />
                          </div>

                          {/* First Name Field */}
                          <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">الاسم</label>
                            <input type="text" name="FNAME" className="text" id="mce-FNAME" placeholder="اسمك الكامل" />
                          </div>

                          {/* Company/Message Field */}
                          <div className="mc-field-group">
                            <label htmlFor="mce-COMPANY">رسالتك</label>
                            <input
                              type="text"
                              name="COMPANY"
                              className="text"
                              id="mce-COMPANY"
                              placeholder="اكتب رسالتك هنا..."
                            />
                          </div>

                          {/* Hidden tag field */}
                          <div hidden>
                            <input type="hidden" name="tags" value="253" />
                          </div>

                          {/* Response containers */}
                          <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                          </div>

                          {/* Honeypot for spam protection */}
                          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                            <input
                              type="text"
                              name="b_06494959efc4f17721cdd07b3_d035fbca50"
                              tabIndex={-1}
                              defaultValue=""
                            />
                          </div>

                          {/* Submit button */}
                          <div className="optionalParent">
                            <div className="clear foot">
                              <input
                                type="submit"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                                value="إرسال الرسالة"
                              />
                              <p style={{ margin: "0px auto" }}>
                                <a
                                  href="http://eepurl.com/i8iN8E"
                                  title="Mailchimp - email marketing made easy and fun"
                                >
                                  <span
                                    style={{
                                      display: "inline-block",
                                      backgroundColor: "transparent",
                                      borderRadius: "4px",
                                    }}
                                  >
                                    <img
                                      className="refferal_badge"
                                      src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                      alt="Intuit Mailchimp"
                                      style={{
                                        width: "220px",
                                        height: "40px",
                                        display: "flex",
                                        padding: "2px 0px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    />
                                  </span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Simple Info Section */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-gray-600">
            نرد على جميع الاستفسارات خلال <strong className="text-webskeet-blue">24 ساعة</strong> في أيام العمل
          </p>
        </div>
      </div>
    </main>
  )
}
