/* @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    colors: {
        text: "#cccfd7",
        bg: "#0f172a",
        primary: "#c2e0ff",
        secondary: "#003459",
        accent: "#940000",
    },
    fontFamily: {
        mplus_1: ["var(--font-mplus-1)"],
    },
    extend: {},
    },
    plugins: [],
};
