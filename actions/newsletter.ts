"use server";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("newsletter-email");
  console.log("Newsletter Subscription:", { email });
}
