import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
        unknown: '#24273a',
        shadow: '#24273a'
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
          error: "#ed8796",
          normal: '#A8A77A',
          fire: '#EE8130',
          water: '#6390F0',
          electric: '#F7D02C',
          grass: '#7AC74C',
          ice: '#96D9D6',
          fighting: '#C22E28',
          poison: '#A33EA1',
          ground: '#E2BF65',
          flying: '#A98FF3',
          psychic: '#F95587',
          bug: '#A6B91A',
          rock: '#B6A136',
          ghost: '#735797',
          dragon: '#6F35FC',
          dark: '#705746',
          steel: '#B7B7CE',
          fairy: '#D685AD',
          unknown: '#24273a',
          shadow: '#24273a'
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
