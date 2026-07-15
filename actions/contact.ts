"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("user-name");
  const email = formData.get("user-email");
  const website = formData.get("user-web");
  const message = formData.get("user-message");
  console.log("Contact Form:", {
    name,
    email,
    website,
    message,
  });
}
