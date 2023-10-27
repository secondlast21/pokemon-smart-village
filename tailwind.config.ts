import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {

      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eff1f5", //putih abu latte
          secondary: "#6c6f85", //abu muda
          accent: "#a6e3a1", // hijau mocca
          neutral: "#4c4f69", // abu tua latte
          "base-100": "#24273a", // putih abu latte
          info: "#04a5e5", // biru langit latte
          success: "#40a02b", // hijau latte
          warning: "#df8e1d", // kuning latte
          error: "#ce5050",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
