"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, User, Mail, Calendar } from "lucide-react"

export default function ManageSubscriptionsClient() {
  const { toast } = useToast()
  const [subscribers, setSubscribers] = useState<Array<{ email: string; date: string }>>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // عند تحميل الصفحة، استرجاع المشتركين من التخزين المحلي
    try {
      const storedSubscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]")
      setSubscribers(storedSubscribers)
    } catch (error) {
      console.error("خطأ في استرداد بيانات المشتركين:", error)
      toast({
        title: "خطأ في استرداد البيانات",
        description: "لم نتمكن من استرداد بيانات المشتركين.",
      })
    } finally {
      setLoading(false)
    }
  }, [toast])

  const handleClearSubscribers = () => {
    if (window.confirm("هل أنت متأكد من أنك تريد مسح جميع المشتركين المحليين؟")) {
      localStorage.removeItem("newsletter_subscribers")
      setSubscribers([])
      toast({
        title: "تم المسح بنجاح",
        description: "تم مسح جميع ب��انات المشتركين المحليين.",
      })
    }
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return "تاريخ غير صالح"
    }
  }

  return (
    <main className="flex-grow pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-webskeet-blue">إدارة المشتركين المحليين</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <span>ملاحظة مهمة</span>
              </CardTitle>
              <CardDescription>
                هذه الصفحة تعرض المشتركين المخزنين محليًا فقط (عندما يفشل الاتصال بـ Mailchimp). للاطلاع على قائمة
                المشتركين الكاملة، يرجى الدخول إلى لوحة تحكم Mailchimp الخاصة بك.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-sm text-amber-800">
                  هؤلاء المشتركين بحاجة إلى إضافتهم يدويًا إلى قائمة Mailchimp الخاصة بك أو إعادة تكوين الاتصال مع API
                  الخاص بـ Mailchimp.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open("https://admin.mailchimp.com", "_blank")}
              >
                فتح لوحة تحكم Mailchimp
              </Button>
            </CardFooter>
          </Card>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-gray-800">المشتركين المحليين</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">إجمالي المشتركين: {subscribers.length}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleClearSubscribers}
                    disabled={subscribers.length === 0}
                  >
                    مسح الكل
                  </Button>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin w-8 h-8 border-4 border-webskeet-blue border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600">جاري تحميل البيانات...</p>
              </div>
            ) : subscribers.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">#</TableHead>
                      <TableHead>البريد الإلكتروني</TableHead>
                      <TableHead>تاريخ الاشتراك</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers.map((subscriber, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span>{subscriber.email}</span>
                        </TableCell>
                        <TableCell className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{formatDate(subscriber.date)}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="p-12 text-center">
                <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-1">لا يوجد مشتركين</h3>
                <p className="text-gray-500">لم يتم تخزين أي مشتركين محليًا بعد.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
