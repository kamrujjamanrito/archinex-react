"use server";

export async function searchPosts(formData: FormData) {
  const keyword = formData.get("search-field-post")?.toString().trim();
  console.log("Search Keyword:", keyword);
}
