import sveltePreprocess from "svelte-preprocess";
import generatePrerenderRoutes from "./generatePrerenderRoutes.js";
// Pick one of the adapters listed below
// or install and use others
import node from "@sveltejs/adapter-node";
import vercel from "@sveltejs/adapter-vercel";
import netlify from "@sveltejs/adapter-netlify";
import staticAdptr from "@sveltejs/adapter-static";
import WindiCSS from "vite-plugin-windicss";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use your desired adapter
    adapter: vercel(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#app",
    vite: () => ({
      // Purges too much, disabled for now
      // plugins: [process.env.NODE_ENV === 'production' && optimizeCss()],
      server: {
        watch: {
          ignored: ["./gui/", "./create-sveltepress-app", "./pandoc/"]
        }
      },
      plugins: [WindiCSS()]
    })
  },
  preprocess: [
    sveltePreprocess({
      scss: true,
      sass: true
    })
  ]
};

if (config.kit?.adapter?.name === "@sveltejs/adapter-static") {
  config.kit.prerender = {
    crawl: true,
    enabled: true,
    pages: generatePrerenderRoutes()
  };
}

export default config;
