<template>
  <li class="track">
    <span>{{ track.track_number }}</span>
    <div class="track--info">
      <p>{{ track.name }}</p>
      <span>{{ track.artists[0].name }}</span>
    </div>
    <span v-if="track.explicit" id="explicit--track">E</span>
    <span
      >{{ Math.floor(track.duration_ms / 60000) }}:{{
        ((track.duration_ms % 60000) / 1000).toFixed(0)
      }}</span
    >
  </li>
</template>

<script>
export default {
  name: "AlbumTracks",
  data() {
    return {};
  },
  components: {},
  props: {
    track: { type: Object },
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
}

.track:hover {
  background-color: rgb(55, 58, 62);
  cursor: pointer;
}

.track p {
  width: 50%;
  text-align: start;
}

.track--info {
  margin-left: 60px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#explicit--track {
  margin-right: 15px;
  font-size: 10px;
  color: gray;
}
</style>
