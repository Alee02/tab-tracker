<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div v-for="song in songs"
          :key="song.title">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>

</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: [
        {
          songs: null
        }
      ]
    }
  },
  mounted: {

  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover{
  color: red;
}
</style>
