<template>
  <div class="container--album">
    <SideBar />
    <main>
      <Header />
      <div v-if="albumInfo" class="album--info">
        <img :src="img" alt="album-cover" />
        <div class="about">
          <h3>{{ albumInfo.name }}</h3>
          <h3>{{ artist }}</h3>
          <span>
            <p>{{ getDate(albumInfo.release_date) }}</p>
            <p>{{ albumInfo.total_tracks }} faixas</p>
          </span>
        </div>
      </div>
      <ul class="tracks">
        <template v-for="track in tracks" :key="track.id">
          <AlbumTracks :track="track" @selectedTrack="playTrack" />
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
      artist: "",
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
        this.artist = res.data.artists[0].name;
      });
  },
  methods: {
    getDate(date) {
      if (date) {
        const dateList = date.split("-");
        const getDate = new Date(date);

        const month = getDate.toLocaleString("en-US", {
          month: "short",
        });

        if (dateList.length > 1) {
          return `${month}, ${dateList[2]}`;
        } else {
          return `${dateList[0]}`;
        }
      }
    },
    playTrack(uri) {
      window.location.href = uri;
    },
  },
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
  height: 30%;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
}

.album--info img {
  border-radius: 5px;
  /* width: 20%; */
}

.about {
  max-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
}
.about h3 {
  margin: 10px;
}

.about span {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  color: gray;
}

.about p {
  margin: 0px 10px;
}

@media (max-width: 600px) {
  .about h3 {
    max-width: 20ch;
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .album--info {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .album--info img {
    margin-top: 50px;
    max-height: 70%;
  }

  .about span {
    justify-content: space-evenly;
  }

  .about span p {
    margin: 0px 5px;
  }
}
</style>
