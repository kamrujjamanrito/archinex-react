"use server";

export async function submitComment(formData: FormData) {
  const name = formData.get("review-name");
  const email = formData.get("review-email");
  const message = formData.get("review-message");
  const rememberInfo = formData.get("remember-info");

  console.log("Comment:", {
    name,
    email,
    message,
    rememberInfo: Boolean(rememberInfo),
  });
}
