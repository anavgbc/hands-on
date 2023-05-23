<template>
  <div id="landingpage">
    <div class="container">
      <span id="logo">
        <font-awesome-icon icon="fa-solid fa-shuffle" />
        <h2>Hands on!</h2>
      </span>
      <p>Faça login para começar</p>
      <button class="btn login" @click="authenticate">Autenticar</button>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { data } from "../../src/data";

library.add(faShuffle);

export default {
  name: "LandingPage",
  data: () => {
    return {
      clientId: data.VUE_APP_CLIENTID,
      redirectUri: "http://localhost:8080/home",
      scopes: ["user-read-private", "user-read-email"],
      clientSecret: data.VUE_APP_CLIENT_SECRET,
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
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
}

.container {
  height: 45%;
  width: 35%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#logo h2 {
  margin-left: 10px;
}

#logo svg {
  transition: transform 0.3s ease-in-out;
  font-size: 20px;
}
#logo svg:hover {
  transform: rotate(360deg);
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
.container p {
  color: #142e39;
}
.container p:hover {
  color: #1f3f4d;
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
</style>
