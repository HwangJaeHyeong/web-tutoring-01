import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    "/v1/search/news.json": "https://openapi.naver.com",
    "/news/articleView.html": {
      target: "https://www.straightnews.co.kr",
      changeOrigin: true,
    },
    "/view.php": {
      target: "http://www.lawissue.co.kr",
      changeOrigin: true,
    },
    "/news": {
      target: "https://www.insight.co.kr",
      changeOrigin: true,
    },
    "/news/view.php": {
      target: "https://medicalworldnews.co.kr",
      changeOrigin: true,
    },
    "/mnews/article": {
      target: "https://n.news.naver.com",
      changeOrigin: true,
    },
    "/news/view": {
      target: "http://www.mediapen.com",
      changeOrigin: true,
    },
  },
});
