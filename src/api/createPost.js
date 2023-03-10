import httpClient from "./httpClient";

const createPost = (text, imageFile = null) => {
  const formData = new FormData();
  formData.append("text", text);

  if (imageFile) {
    formData.append(imageFile);
  }

  return httpClient.post("/create-post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default createPost;
