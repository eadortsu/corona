<template>
  <v-layout>
    <v-flex>
      <v-bottom-navigation fixed height="60" style="top: 56px;">
        <v-btn value="recent" to="/news" router>
          <span>World</span>
          <v-img src="/world.png" :contain="true" width="24"></v-img>
        </v-btn>

        <v-btn value="favorites" to="/news/africa" router>
          <span>Africa</span>
          <v-img src="/africa.png" :contain="true" width="24"></v-img>
        </v-btn>

        <v-btn value="nearby" to="/news/ghana" router>
          <span>Ghana</span>
          <v-img src="/gh.png" :contain="true" width="24"></v-img>
        </v-btn>
      </v-bottom-navigation>
      <v-divider style="margin-bottom: 53px"></v-divider>
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
            <!-- <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>-->
          </v-card-actions>

          <!--<v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>-->
        </v-card>
      </v-col>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios'
export default {
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
          `https://cors-anywhere.herokuapp.com/https://www.africanews.com/feed/rss`
        )
        .then((response) => {
          const convert = require('xml-js')
          // JSON responses are automatically parsed.
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
