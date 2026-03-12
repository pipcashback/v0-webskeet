import type { Metadata } from "next"
import ManageSubscriptions from "./manage-subscriptions"

export const metadata: Metadata = {
  title: "إدارة الاشتراكات - ويب سكيت",
  description: "قم بإدارة اشتراكاتك في خدمات ويب سكيت، تحديث بياناتك، أو إلغاء الاشتراك من النشرة الإخبارية",
  alternates: {
    canonical: "https://webskeet.com/manage-subscriptions",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function ManageSubscriptionsPage() {
  return <ManageSubscriptions />
}
