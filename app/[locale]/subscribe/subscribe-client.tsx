"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Music, CheckCircle2, Youtube } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import Script from "next/script"
import type { Locale } from "@/i18n/config"

const translations = {
  en: {
    profileName: "Mahmoud Ali",
    profileTitle: "SEO Expert",
    profileDesc: "I help businesses improve their search engine visibility through content optimization, link building, and technical performance development.",
    socialYoutube: "YouTube",
    socialLinkedin: "LinkedIn",
    socialApplePodcast: "Apple Podcast",
    socialSpotifyPodcast: "Spotify Podcast",
    mainTitle: "Join Our Newsletter",
    mainDesc: "Get the latest updates and exclusive tips in the world of SEO and backlinks",
    benefitsTitle: "When you subscribe you will get:",
    benefit1: "Exclusive tips for building high-quality backlinks",
    benefit2: "Updates on search algorithm changes",
    benefit3: "Exclusive opportunities for strong backlinks",
    benefit4: "Special offers and discounts on our services",
    successTitle: "Subscribed Successfully!",
    successDesc: "Thank you for joining our mailing list",
    successInfo: "We will send you the latest content and tips soon",
    successButton: "Subscribe with Another Address",
    errorTitle: "Subscription Error",
    emailPlaceholder: "Enter your email address",
    subscribeButton: "Subscribe Now",
    privacyNote: "We will not send you unsolicited messages, and you can unsubscribe at any time.",
    // Mailchimp error translations
    errorAlreadySubscribed: "You are already subscribed to our mailing list",
    errorValidEmail: "Please enter a valid email address",
    errorRequired: "Email address is required",
    errorTooMany: "Too many requests sent. Please try again later",
    errorGeneric: "An error occurred. Please try again",
  },
  ar: {
    profileName: "محمود علي",
    profileTitle: "خبير سيو",
    profileDesc: "أساعد الشركات على تحسين الظهور في محركات البحث من خلال تحسين المحتوى، بناء الروابط، وتطوير الأداء التقني.",
    socialYoutube: "يوتيوب",
    socialLinkedin: "لينكد إن",
    socialApplePodcast: "أبل بودكاست",
    socialSpotifyPodcast: "سبوتيفاي بودكاست",
    mainTitle: "انضم إلى نشرتنا البريدية",
    mainDesc: "احصل على آخر المستجدات والنصائح الحصرية في عالم الـ SEO والروابط الخلفية",
    benefitsTitle: "عند الاشتراك ستحصل على:",
    benefit1: "نصائح حصرية لبناء روابط خلفية عالية الجودة",
    benefit2: "تحديثات عن تغييرات خوارزميات البحث",
    benefit3: "فرص حصرية للحصول على روابط خلفية قوية",
    benefit4: "عروض وخصومات خاصة على خدماتنا",
    successTitle: "تم الاشتراك بنجاح!",
    successDesc: "شكرا\u064B لانضمامك إلى قائمتنا البريدية",
    successInfo: "سنرسل لك أحدث المحتوى والنصائح قريبا\u064B",
    successButton: "الاشتراك بعنوان آخر",
    errorTitle: "خطأ في الاشتراك",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    subscribeButton: "اشترك الآن",
    privacyNote: "لن نرسل لك رسائل غير مرغوب فيها، ويمكنك إلغاء الاشتراك في أي وقت.",
    // Mailchimp error translations
    errorAlreadySubscribed: "أنت مشترك بالفعل في قائمتنا البريدية",
    errorValidEmail: "يرجى إدخال بريد إلكتروني صحيح",
    errorRequired: "البريد الإلكتروني مطلوب",
    errorTooMany: "تم إرسال عدد كبير من الطلبات. يرجى المحاولة لاحقا\u064B",
    errorGeneric: "حدث خطأ. يرجى المحاولة مرة أخرى",
  },
}

export default function SubscribeClient({ locale }: { locale: Locale }) {
  const t = translations[locale]

  const [mailchimpScriptLoaded, setMailchimpScriptLoaded] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // Add Mailchimp styles to the page
    const linkElement = document.createElement("link")
    linkElement.rel = "stylesheet"
    linkElement.type = "text/css"
    linkElement.href = "//cdn-images.mailchimp.com/embedcode/classic-061523.css"
    document.head.appendChild(linkElement)

    // Monitor Mailchimp responses
    const checkMailchimpResponse = () => {
      const errorResponse = document.getElementById("mce-error-response")
      const successResponse = document.getElementById("mce-success-response")

      if (errorResponse && errorResponse.style.display !== "none" && errorResponse.textContent) {
        const errorText = errorResponse.textContent.toLowerCase()
        setShowError(true)
        setShowSuccess(false)

        // Translate common Mailchimp errors
        if (errorText.includes("already subscribed")) {
          setErrorMessage(t.errorAlreadySubscribed)
        } else if (errorText.includes("valid email") || errorText.includes("enter a value")) {
          setErrorMessage(t.errorValidEmail)
        } else if (errorText.includes("required")) {
          setErrorMessage(t.errorRequired)
        } else if (errorText.includes("too many")) {
          setErrorMessage(t.errorTooMany)
        } else {
          setErrorMessage(t.errorGeneric)
        }
      }

      if (successResponse && successResponse.style.display !== "none" && successResponse.textContent) {
        setShowSuccess(true)
        setShowError(false)
        // Clear the form
        const form = document.getElementById("mc-embedded-subscribe-form") as HTMLFormElement
        if (form) form.reset()
      }
    }

    // Check immediately and set up interval
    const interval = setInterval(checkMailchimpResponse, 500)

    return () => {
      clearInterval(interval)
      // Clean up when component unmounts
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement)
      }
    }
  }, [t])

  // Social links
  const socialLinks = [
    {
      name: t.socialYoutube,
      icon: <Youtube className="h-5 w-5" />,
      url: "https://www.youtube.com/@ma77moud_ali",
    },
    {
      name: t.socialLinkedin,
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/mahmoud-ali-817a9b122/",
    },
    {
      name: t.socialApplePodcast,
      icon: <Music className="h-5 w-5" />,
      label: t.socialApplePodcast,
      url: "https://podcasts.apple.com/ae/podcast/%D8%B3%D9%8A%D8%B1%D8%B4-%D8%A8%D9%84%D8%B3/id1777099129",
    },
    {
      name: t.socialSpotifyPodcast,
      icon: <Music className="h-5 w-5" />,
      label: t.socialSpotifyPodcast,
      url: "https://open.spotify.com/show/2sZeC8SCrcF6saTUa8dNlY",
    },
  ]

  return (
    <main className="flex-grow pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-6 text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <Avatar className="w-20 h-20 border-4 border-webskeet-blue/20 mb-3">
                <AvatarImage src="/images/mahmoud-ali-profile.jpeg" alt={t.profileName} />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-medium text-gray-700">{t.profileName}</h2>
              <p className="text-sm text-gray-500">{t.profileTitle}</p>
              <p className="text-xs text-gray-600 mt-1 max-w-md">
                {t.profileDesc}
              </p>

              {/* Social media links */}
              <div className="flex flex-wrap items-center gap-3 mt-4 justify-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-webskeet-blue hover:bg-webskeet-blue/10 transition-all px-3 py-2 rounded-full bg-webskeet-blue/5"
                    title={link.name}
                  >
                    {link.icon}
                    {link.label && <span className="text-xs font-medium">{link.label}</span>}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-12 h-12 bg-webskeet-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="h-6 w-6 text-webskeet-blue" />
            </div>
            <h1 className="text-2xl font-bold mb-2">{t.mainTitle}</h1>
            <p className="text-md text-gray-600 mb-4">
              {t.mainDesc}
            </p>
          </div>

          <div className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 rounded-lg p-4 mb-6">
            <h2 className="font-bold text-lg mb-2">{t.benefitsTitle}</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className={`${locale === "ar" ? "ml-2" : "mr-2"} text-webskeet-gold font-bold`}>{"\u2713"}</span>
                {t.benefit1}
              </li>
              <li className="flex items-center">
                <span className={`${locale === "ar" ? "ml-2" : "mr-2"} text-webskeet-gold font-bold`}>{"\u2713"}</span>
                {t.benefit2}
              </li>
              <li className="flex items-center">
                <span className={`${locale === "ar" ? "ml-2" : "mr-2"} text-webskeet-gold font-bold`}>{"\u2713"}</span>
                {t.benefit3}
              </li>
              <li className="flex items-center">
                <span className={`${locale === "ar" ? "ml-2" : "mr-2"} text-webskeet-gold font-bold`}>{"\u2713"}</span>
                {t.benefit4}
              </li>
            </ul>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6 text-center animate-in fade-in slide-in-from-top duration-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{t.successTitle}</h3>
              <p className="text-green-700 mb-3">{t.successDesc}</p>
              <p className="text-sm text-green-600 mb-4">{t.successInfo}</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-sm font-medium"
              >
                {t.successButton}
              </button>
            </div>
          )}

          {/* Error Message */}
          {showError && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3 animate-in fade-in slide-in-from-top duration-500">
              <span className="text-2xl">{"\u26A0\uFE0F"}</span>
              <div className="flex-1">
                <p className="font-semibold text-red-800 mb-1">{t.errorTitle}</p>
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
              <button onClick={() => setShowError(false)} className="text-red-500 hover:text-red-700 font-bold">
                {"\u2715"}
              </button>
            </div>
          )}

          {/* Mailchimp Form */}
          <div id="mc_embed_shell">
            <div id="mc_embed_signup" className="bg-transparent w-full max-w-full">
              <form
                action="https://dawenly.us9.list-manage.com/subscribe/post?u=06494959efc4f17721cdd07b3&amp;id=d035fbca50&amp;f_id=008dc2e1f0"
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

                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <Input
                      type="email"
                      name="EMAIL"
                      className="required email h-12 rounded-md focus:ring-2 focus:ring-webskeet-blue/20 focus:border-webskeet-blue transition-all duration-200"
                      id="mce-EMAIL"
                      required
                      placeholder={t.emailPlaceholder}
                    />
                  </div>

                  <div hidden>
                    <input type="hidden" name="tags" value="252" />
                  </div>

                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                    <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                  </div>

                  <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                    <input type="text" name="b_06494959efc4f17721cdd07b3_d035fbca50" tabIndex={-1} defaultValue="" />
                  </div>

                  <div className="optionalParent">
                    <div className="clear foot">
                      <Button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button bg-webskeet-blue hover:bg-webskeet-blue/90 text-white w-full h-12 px-6 rounded-md font-medium transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow"
                      >
                        {t.subscribeButton}
                      </Button>
                      <p style={{ margin: "0px auto" }}>
                        <a href="http://eepurl.com/i8iN8E" title="Mailchimp - email marketing made easy and fun">
                          <span
                            style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}
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

          <p className="text-sm text-gray-500 mt-4 text-center">
            {t.privacyNote}
          </p>
        </div>
      </div>

      {/* Mailchimp Scripts */}
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        onLoad={() => setMailchimpScriptLoaded(true)}
        strategy="lazyOnload"
      />
      {mailchimpScriptLoaded && (
        <Script id="mailchimp-config" strategy="lazyOnload">
          {`
            (function($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[0]='EMAIL';
              ftypes[0]='email';
              fnames[1]='FNAME';
              ftypes[1]='text';
              fnames[2]='LNAME';
              ftypes[2]='text';
              fnames[3]='ADDRESS';
              ftypes[3]='address';
              fnames[4]='PHONE';
              ftypes[4]='phone';
              fnames[5]='BIRTHDAY';
              ftypes[5]='birthday';
              fnames[6]='COMPANY';
              ftypes[6]='text';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `}
        </Script>
      )}

      {/* Custom Styles for Mailchimp Form */}
      <style jsx global>{`
        /* Hide Mailchimp default elements */
        #mc_embed_signup:not(.footer-newsletter) h2,
        #mc_embed_signup:not(.footer-newsletter) .indicates-required,
        #mc_embed_signup:not(.footer-newsletter) .mc-field-group label,
        #mc_embed_signup:not(.footer-newsletter) .optionalParent p {
          display: none !important;
        }

        /* Mailchimp form container styles */
        #mc_embed_signup:not(.footer-newsletter) {
          font-family: var(--font-tajawal), sans-serif !important;
          width: 100% !important;
          max-width: 100% !important;
          clear: both;
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        #mc_embed_signup:not(.footer-newsletter) form {
          max-width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        #mc_embed_signup:not(.footer-newsletter) .mc-field-group {
          width: 100% !important;
          padding-bottom: 0 !important;
          min-height: auto !important;
          margin-bottom: 1rem !important;
        }

        /* Hide Mailchimp response messages (we show our own) */
        #mc_embed_signup:not(.footer-newsletter) #mce-responses {
          display: none !important;
        }

        #mc_embed_signup:not(.footer-newsletter) #mce-error-response,
        #mc_embed_signup:not(.footer-newsletter) #mce-success-response {
          display: none !important;
        }

        /* Ensure all Mailchimp elements stay within bounds */
        #mc_embed_signup:not(.footer-newsletter) div,
        #mc_embed_signup:not(.footer-newsletter) span,
        #mc_embed_signup:not(.footer-newsletter) input,
        #mc_embed_signup:not(.footer-newsletter) select,
        #mc_embed_signup:not(.footer-newsletter) textarea,
        #mc_embed_signup:not(.footer-newsletter) label {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        /* Custom input styles */
        #mc_embed_signup:not(.footer-newsletter) input[type="email"] {
          font-family: var(--font-tajawal), sans-serif !important;
        }

        /* Custom button styles */
        #mc_embed_signup:not(.footer-newsletter) .button,
        #mc_embed_signup:not(.footer-newsletter) #mc-embedded-subscribe {
          background-color: #1e3a8a !important;
          font-family: var(--font-tajawal), sans-serif !important;
          font-weight: 600 !important;
          padding: 0 1.5rem !important;
          height: 48px !important;
          transition: all 0.3s ease !important;
          font-size: 1rem !important;
          cursor: pointer !important;
          white-space: nowrap !important;
          border: none !important;
          line-height: 48px !important;
          width: 100% !important;
          border-radius: 0.375rem !important;
        }

        #mc_embed_signup:not(.footer-newsletter) .button:hover,
        #mc_embed_signup:not(.footer-newsletter) #mc-embedded-subscribe:hover {
          background-color: #1e3a8acc !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        }

        /* Animation utilities */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromTop {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-in {
          animation: fadeIn 0.5s ease-out, slideInFromTop 0.5s ease-out;
        }
      `}</style>
    </main>
  )
}
