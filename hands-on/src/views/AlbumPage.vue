<template>
  <div class="container--album">
    <SideBar />
    <main>
      <Header @refreshPage="handleRefresh" />
      <div v-if="albumInfo" class="album--info">
        <img :src="img" alt="album-cover" />
        <div class="about">
          <h3>{{ albumInfo.name }}</h3>
          <span>
            <p>{{ albumInfo.release_date }}</p>
            <p>{{ albumInfo.total_tracks }} faixas</p>
          </span>
        </div>
      </div>
      <ul class="tracks">
        <template v-for="track in tracks" :key="track.id">
          <AlbumTracks :track="track" />
        </template>
      </ul>
    </main>
  </div>
</template>

<script>
import AlbumTracks from "../components/Track.vue";
import SideBar from "../components/SideBar.vue";
import Header from "../components/Header.vue";

export default {
  name: "AlbumPage",
  data() {
    return {
      tracks: [],
      albumInfo: {},
      img: "",
    };
  },
  components: { AlbumTracks, SideBar, Header },
  beforeCreate() {
    const url = window.location.href.split("/");
    const id = url[url.length - 1];

    const token = localStorage.getItem("token");

    this.$http
      .get(`/v1/albums/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.tracks = res.data.tracks.items;
        this.albumInfo = res.data;
        this.img = res.data.images[0].url;
      });
  },
  methods: {},
};
</script>

<style scoped>
.container--album {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.container--album main {
  width: 100%;
  margin-left: 40px;
  min-height: 100vh;
  height: auto;
  overflow: auto;
}
.container--album {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.tracks {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.album--info {
  height: 20%;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
}

.album--info img {
  border-radius: 5px;
}

.about {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 20px;
}

.about span {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media (max-width: 600px) {
  .album--info {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .album--info img {
    width: 40%;
  }

  .about span {
    justify-content: space-evenly;
  }

  .about {
    /* flex-direction: column; */
  }
}
</style>
