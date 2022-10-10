module.exports = {
theme: {
    extend: {
      colors: {
        'b-body': '#001F3A',
        'b-blue': '#4F03FA',
        'b-yellow': '#F3BA2F',
        'b-pink': '#FC5596',
        'b-gray': '#082640',
        't-border': '#102D46'
      },
    },
  },
   purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'

  variants: {
    extend: {},
  },
  plugins: []

};
