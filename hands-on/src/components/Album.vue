<template>
  <div v-if="!detail" class="album" @click="getTracks(album.id)">
    <div class="container">
      <img :src="album.images[0].url" />
      <p id="album-name">{{ album.name }}</p>
      <div class="album--info">
        <span>{{ album.type }} - </span>
        <p id="album-artist">{{ album.artists[0].name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../routes/routes";

export default {
  name: "SingleAlbum",
  data() {
    return {
      tracks: [],
      detail: false,
    };
  },
  mounted() {},
  methods: {
    getTracks(id) {
      router.push({ name: "AlbumPage", params: { albumId: id } });
    },
  },
  props: {
    album: { type: Object },
  },
};
</script>

<style scoped>
.album {
  width: 25%;
  max-height: 30%;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  margin: 10px;
  background-color: #35393e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.album:hover {
  cursor: pointer;
  background-color: rgb(47, 50, 54);
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.album img {
  max-width: 90%;
  border-radius: 2px solid red;
  border-radius: 8px;
  margin-bottom: 3px;
}

.album p {
  padding: 0;
  margin: 5px;
}

.album--info {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(162, 155, 155);
}

#album-name {
  max-width: 14ch;
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (max-width: 390px) {
  #album-name {
    max-width: 8ch;
  }
}
@media (max-width: 600px) {
  #album-name {
    max-width: 10ch;
  }
  .album {
    width: 40%;
  }
}
@media (min-width: 600px) {
  #album-name {
    max-width: 10ch;
  }
}
@media (max-width: 768px) {
  .album--info span {
    display: none;
  }
}
</style>
