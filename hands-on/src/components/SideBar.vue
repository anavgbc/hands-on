<template>
  <ul class="menu">
    <span id="logo">
      <font-awesome-icon icon="fa-solid fa-shuffle" />
      <h3>Hands on!</h3>
    </span>
    <router-link to="/home" @click="handleClick">
      <li>
        <font-awesome-icon icon="fa-solid fa-house" />
        Home
      </li>
    </router-link>
  </ul>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouse, faMusic, faShuffle);

export default {
  name: "SideBar",
  data() {
    return {};
  },
  components: { FontAwesomeIcon },
  methods: {
    handleClick() {
      this.$emit("refreshPage", true);
    },
  },
};
</script>

<style scoped>
.menu {
  width: 16%;
  background-color: rgba(25, 25, 26, 0.468);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding: 0px 10px;
  margin-top: 0px;
  padding-top: 20px;
}

.menu a {
  padding: 15px 0px;
  text-align: start;
  width: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #b2b6b6;
  justify-content: center;
}

.menu a:hover {
  background-color: rgb(55, 58, 62);
  cursor: pointer;
  color: white;
}

.menu svg {
  padding-right: 10px;
  transition: transform 0.3s ease-in-out;
}

#logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  font-size: 14px;
}
#logo svg {
  padding-left: 0;
}
#logo svg:hover {
  padding-left: 0;
}
.menu svg:hover {
  transform: rotate(360deg);
  color: #1f3f4d;
}

@media (max-width: 390px) {
  .menu {
    display: none;
  }
}
</style>
