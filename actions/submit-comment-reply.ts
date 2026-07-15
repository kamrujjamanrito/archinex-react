"use server";

export async function submitCommentReply(formData: FormData) {
  const message = formData.get("reply-message");
  console.log("Reply Comment:", {
    message,
  });
}
