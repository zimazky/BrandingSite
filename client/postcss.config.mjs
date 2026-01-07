const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            white: "#FFFFFF",
            black: "#000000",
            gray: "#808080",
          },
          fontFamily: {
            sans: ["var(--font-anton)"],
            mono: ["var(--font-roboto-mono)"],
          },
        },
      },
    },
  },
};

export default config;

