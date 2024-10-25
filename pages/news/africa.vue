<template>
  <v-layout>
    <v-flex>
      <newnav></newnav>
      <v-col v-for="i in 4" v-show="loading" :key="i" cols="12">
        <v-sheet :color="`grey darken-2`" class="">
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
      </v-col>
      <v-col v-for="n in news" :key="n.link._text" cols="12">
        <v-card class="mx-auto">
          <v-img :src="n.enclosure._attributes.url" height="150px"></v-img>

          <v-card-title>
            {{ n.title._text }}
          </v-card-title>

          <v-card-subtitle>
            {{ n.description._text.substring(0, 140) }}...
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text :href="n.link._text" target="_blank"
              >Read More...</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn icon :href="n.link._text" target="_blank"
              ><v-icon>mdi-open-in-new</v-icon></v-btn
            >
            <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios'
import newnav from '../../components/NewsNav.vue'
export default {
  components: {
    newnav
  },
  data() {
    return {
      show: false,
      errors: [],
      news: [],
      loading: true
    }
  },
  mounted() {
    this.loadNews()
  },
  methods: {
    loadNews() {
      axios
        .get(
          `https://www.africanews.com/feed/rss`
        )
        .then((response) => {
          const convert = require('xml-js')
          const xml = response.data
          let result = convert.xml2json(xml, { compact: true, spaces: 4 })
          result = JSON.parse(result)
          this.news = this.filterByValue(result.rss.channel.item)
          this.loading = false
        })
        .catch((e) => {
          this.errors.push(e)
        })
    },
    filterByValue(array) {
      return array.filter(
        (data) =>
          JSON.stringify(data)
            .toLowerCase()
            .includes('corona') ||
          JSON.stringify(data)
            .toLowerCase()
            .includes('covid')
      )
    }
  }
}
</script>
