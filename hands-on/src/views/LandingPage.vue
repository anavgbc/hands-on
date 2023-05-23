<template>
  <div id="landingpage">
    <div class="container">
      <span id="logo">
        <font-awesome-icon icon="fa-solid fa-shuffle" />
        Hands on!
      </span>
      <h3>Vamos começar!</h3>
      <button class="btn login" @click="authenticate">Autenticar</button>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShuffle);

export default {
  name: "LandingPage",
  data: () => {
    return {
      clientId: process.env.VUE_APP_CLIENTID,
      redirectUri: "http://localhost:8080/home",
      scopes: ["user-read-private", "user-read-email"],
      clientSecret: process.env.VUE_APP_CLIENT_SECRET,
      albums: [],
      detail: false,
    };
  },
  components: { FontAwesomeIcon },

  methods: {
    authenticate() {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${
        this.clientId
      }&redirect_uri=${this.redirectUri}&scope=${this.scopes.join(
        "%20"
      )}&response_type=code`;

      window.location.href = authUrl;
    },
  },
};
</script>

<style scoped>
#landingpage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  height: 40%;
  width: 35%;
  background-color: rgb(49 49 50 / 91%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logo {
  display: flex;
  flex-direction: row;
}

@media (max-width: 600px) {
  .container {
    width: 80%;
  }
}

@media (max-width: 390px) {
  .container {
    width: 90%;
    height: 60%;
  }
}

.container button {
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  color: white;
  background-color: #176c61;
}
.container button:hover {
  background-color: #156459;
  cursor: pointer;
}
</style>
