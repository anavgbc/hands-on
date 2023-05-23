<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      // clientId: "edfa1a4a582c4e8bb0e2c2e9ebe633b6",
      // redirectUri: "http://localhost:8080/logged",
      // scopes: ["user-read-private", "user-read-email"],
      // clientSecret: "dd082e40208b4961bba35c39cc017af8",
      // albums: [],
      // detail: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding: 0;
  margin: 0;
  background-color: rgba(32, 32, 33, 0.91);

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
}
</style>
