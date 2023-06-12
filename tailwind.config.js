export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "caveat": "'Caveat', cursive"
      },
      colors:{
        "blueAses": '#1fb6ff',
        "redAses": '#C10000',
        "beje1": "#DCCFB5",
        "beje2": "#D99E68",
        "beje3": "##D9745F",
        "yellow-ases": "#A37000",
        "cyan-ases": "#096F78",


      },
      backgroundImage: theme => ({
                "pattern-homeSlogan":"url('/src/assets/home-slogan.png')",
                })
    },
  },
  plugins: [],
}