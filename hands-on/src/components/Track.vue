<template>
  <li class="track">
    <span>{{ track.track_number }}</span>
    <div class="track--info">
      <p>{{ track.name }}</p>
      <span>{{ track.artists[0].name }}</span>
    </div>
    <div class="track--details">
      <button class="redirect--btn" @click="playTrack(track.uri)">
        <font-awesome-icon icon="fa-solid fa-headphones" />
      </button>
      <span v-if="track.explicit" id="explicit--track">E</span>
      <span id="duration"
        >{{ Math.floor(track.duration_ms / 60000) }}:{{
          ((track.duration_ms % 60000) / 1000).toFixed(0)
        }}
      </span>
    </div>
  </li>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeadphones);

export default {
  name: "AlbumTracks",
  data() {
    return {
      uri: "",
    };
  },
  components: { FontAwesomeIcon },
  props: {
    track: { type: Object },
  },
  methods: {
    playTrack(uri) {
      this.$emit("selectedTrack", uri);
    },
  },
};
</script>

<style scoped>
.track {
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: flex-start;
  padding-bottom: 20px;
  padding-left: 10px;
  overflow: hidden;
}

.track:hover {
  background-color: rgb(55, 58, 62);
  cursor: pointer;
}

.track--info p {
  max-width: 14ch;
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.track p {
  width: 80%;
  text-align: start;
  margin-right: 5px;
}

.track--details {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.redirect--btn {
  background-color: transparent;
  border: none;
  color: white;
  margin-right: 8px;
}
.redirect--btn:hover {
  color: gray;
  cursor: pointer;
}

.track--info {
  margin-left: 50px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
}

#explicit--track {
  margin-right: 15px;
  font-size: 10px;
  color: gray;
}

@media (max-width: 288px) {
  .track--info {
    overflow: hidden;
  }

  .track--info p,
  .track--info span {
    max-width: 8ch;
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
