<template>
  <div class="search">
    <input
      v-model="query"
      @keydown.enter="searchData"
      type="text"
      placeholder="O que você quer ouvir?"
    />
    <button @click="searchData">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMagnifyingGlass);

export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  components: { FontAwesomeIcon },

  methods: {
    searchData() {
      this.$emit("searchValue", this.query);
      this.query = "";
    },
  },
};
</script>

<style scoped>
.search {
  border: 1px solid rgba(136, 126, 126, 0.374);
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search input {
  width: 80%;
  background-color: transparent;
  outline: 0;
  border: none;
  padding: 12px;
  color: rgb(136, 126, 126);
}

.search button {
  background-color: transparent;
  border: none;
  color: #b2b6b6;
  margin-right: 15px;
  font-size: 10px;
}
.search button:hover {
  color: #ffff;
  cursor: pointer;
}
</style>
