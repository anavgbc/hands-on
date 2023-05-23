<template>
  <div class="container">
    <span v-if="query">
      <h2>{{ `Exibindo resultados para ${query}` }}</h2>
    </span>
    <template v-if="albums.length">
      <div class="list">
        <SingleAlbum v-for="album in albums" :key="album.id" :album="album" />
      </div>
    </template>
  </div>
</template>

<script>
import SingleAlbum from "./Album.vue";

export default {
  name: "AlbumList",
  data() {
    return {
      detail: false,
      albumId: "",
      tracks: [],
    };
  },
  components: {
    SingleAlbum,
  },
  props: {
    albums: { type: Array },
    query: String,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.list {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  overflow-y: auto;
}

.container span {
  min-width: 80%;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
}

.details {
  width: 100%;
}

.details ul {
  list-style: none;
  height: 100%;
  min-width: 70%;
}
</style>
