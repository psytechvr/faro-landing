import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = requestLocale || "en"

  // Handle case where locale might still be a Promise
  if (typeof locale !== "string") {
    locale = "en"
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
