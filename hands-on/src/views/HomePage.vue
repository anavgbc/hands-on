<template>
  <div id="home">
    <SideBar @refreshPage="handleRefresh" :albums="albums" />
    <main class="container-page">
      <Header
        @searchValue="getAlbuns"
        @refreshPage="handleRefresh"
        :token="token"
      />
      <template v-if="randomAlbums.length">
        <h3>Descubra novos sons</h3>
        <AlbumList :albums="randomAlbums" :query="this.querySearch" />
      </template>
      <AlbumList :albums="albums" :query="this.querySearch" />
    </main>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import AlbumList from "../components/AlbumList.vue";
import Header from "../components/Header.vue";
import { apiToken } from "../services/axios";
import router from "@/routes/routes";
import { data } from "../../src/data";

export default {
  name: "HomePage",
  data: () => {
    return {
      clientId: data.VUE_APP_CLIENTID,
      clientSecret: data.VUE_APP_CLIENT_SECRET,
      redirectUri: "http://localhost:8080/home",
      querySearch: "",
      albums: [],
      tracks: [],
      token: "",
      refresh: false,
      randomAlbums: [],
    };
  },
  components: { AlbumList, SideBar, Header },
  methods: {
    getAlbuns(query) {
      const token = localStorage.getItem("token");
      this.querySearch = query;

      this.$http
        .get("/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: query,
            type: "album",
            limit: 10,
          },
        })
        .then((res) => {
          this.randomAlbums = [];
          this.albums = res.data.albums.items;
        });
    },

    getRandomAlbums(tokenAccess) {
      const query = this.getRandomStrings();

      this.$http
        .get("/v1/search", {
          headers: {
            Authorization: `Bearer ${tokenAccess}`,
          },
          params: {
            q: query,
            type: "album",
            limit: 10,
          },
        })
        .then((res) => (this.randomAlbums = res.data.albums.items));
    },

    getRandomStrings() {
      const characters = "abcdefhijklnopqrstuvwyz";
      let result = "";

      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      return result;
    },

    handleRefresh(value) {
      this.refresh = value;
      this.querySearch = "";
      this.getRandomAlbums(this.token);
      this.refresh = false;
    },
  },
  created() {
    const code = localStorage.getItem("@code");

    const credentials = `${this.clientId}:${this.clientSecret}`;
    const encodedCredentials = btoa(credentials);

    if (code) {
      const isAuth = localStorage.getItem("token");

      if (isAuth) {
        this.token = isAuth;
        this.getRandomAlbums(this.token);
      } else {
        apiToken
          .post(
            "",
            {
              grant_type: "authorization_code",
              code: code,
              redirect_uri: this.redirectUri,
            },
            {
              headers: {
                Authorization: `Basic ${encodedCredentials}`,
              },
            }
          )
          .then((res) => {
            localStorage.setItem("token", res.data.access_token);
            this.token = res.data.access_token;
            this.getRandomAlbums(this.token);

            router.push({ path: "/home" });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.container-page {
  width: 80%;
  min-height: 100vh;
  height: auto;
  overflow: auto;
}

@media (max-width: 390px) {
  .container-page {
    width: 100%;
  }
}
</style>
