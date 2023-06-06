import axios from "axios";

export const api = axios.create({
  baseURL: "https://notepads.eduardovelho.com",
});

api.post("https://notepads.eduardovelho.com", {
  title: "Um novo título",
  subtitle: "Um novo subtítulo",
  content: "Um novo conteúdo",
});
