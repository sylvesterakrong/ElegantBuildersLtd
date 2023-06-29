/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/assets/building.jpg')",
        "footer-bg": "url('/assets/workers.jpg')",
        "content-bg": "url('/assets/workforce.jpg')",
        "services-bg": "url('/assets/pliers.jpg')",
      },
    },
  },
  plugins: [],
};
