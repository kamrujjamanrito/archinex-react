"use server";

export async function subscribeNewsletter(formData: FormData) {
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const email = formData.get("email");

  console.log("Newsletter Subscription:", {
    firstName,
    lastName,
    email,
  });
}
