import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const jsToBottomNoModule = () => {
  return {
    name: "no-attribute",
    //@ts-ignore
    transformIndexHtml(html) {
      html = html.replace(`type="module" crossorigin`, "");
      //@ts-ignore
      const scriptTag = html.match(/<script[^>]*>(.*?)<\/script[^>]*>/)[0];
      html = html.replace(scriptTag, "");
      html = html.replace("<!-- # INSERT SCRIPT HERE -->", scriptTag);
      return html;
    },
  };
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsToBottomNoModule()],
});
