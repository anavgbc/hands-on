<template>
  <div id="header">
    <span>
      <SearchBar @searchValue="searchData" />
    </span>
    <div v-if="user" class="user--info">
      <button class="btn" @click="handleClick">
        <font-awesome-icon icon="fa-solid fa-house" />
      </button>
      <button class="btn" @click="logOut">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/routes/routes";
import SearchBar from "../components/SearchBar.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouse, faArrowRightFromBracket);

export default {
  name: "HeaderComponent",
  data: () => {
    return {
      user: {},
      image: "",
    };
  },
  components: { SearchBar, FontAwesomeIcon },

  methods: {
    searchData(query) {
      this.$emit("searchValue", query);
    },

    logOut() {
      localStorage.clear();
      router.push({ path: "/" });
    },
    handleClick() {
      router.push({ path: "/home" });
    },
  },
};
</script>

<style scoped>
#header {
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  padding: 10px 15px;
  justify-content: space-between;
  color: white;
  align-items: center;
}
#header span {
  width: 60%;
}

@media (max-width: 380px) {
  #header {
    justify-content: space-evenly;
  }
  #header span {
    width: 50%;
  }
}

.user--info img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
}
.user--info {
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.btn {
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  margin-left: 5px;
  background-color: #b2b6b6;
}
.btn:hover {
  cursor: pointer;
  background-color: #ffff;
  color: #1f3f4d;
}
</style>
