const app = Vue.createApp({
  data() {
    return {
      name: "Egnate",
      age: 19,
      imgSrc:
        "https://www.azquotes.com/picture-quotes/quote-i-have-gazed-on-the-face-of-agamemnon-heinrich-schliemann-80-46-47.jpg",
    };
  },
  methods: {
    randomNum() {
      return Math.floor(Math.random() * 2);
    },
  },
});

app.mount("#assignment");
