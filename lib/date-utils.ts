/**
 * Format a date string to a readable format
 * @param dateString - The date string to format
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export function formatDate(dateString: string, locale = "en-US") {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch (error) {
    console.error("Error formatting date:", error)
    return "Invalid Date"
  }
}

/**
 * Format a date with time
 * @param dateString - The date string to format
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns Formatted date and time string
 */
export function formatDateTime(dateString: string, locale = "en-US") {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch (error) {
    console.error("Error formatting date and time:", error)
    return "Invalid Date"
  }
}
