const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "My wallpaper",
      myColor: "text-primary fs-1 text-center",
      myImage: "img/vue-blog-cover-2.webp",
      mainStyle:
        "background-image: url(img/my-wallpaper.jpg); background-size: cover; background-repeat: no-repeat; background-position: center center",
    };
  },
}).mount("#app");
