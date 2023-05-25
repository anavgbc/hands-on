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
