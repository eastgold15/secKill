/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", //包含了src文件夹下所有的vue,js等等文件
  ],
  theme: {
    extend: {
      height: {
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
      },
    },
  },
  plugins: [],
};
