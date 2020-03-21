<template>
  <v-layout>
    <v-flex class="text-center">
      <v-card>
        <v-bottom-navigation fixed height="60" style="top: 56px;">
          <v-tabs v-model="tab" centered icons-and-text>
            <v-tab href="#tab-1">
              Confirmed
              <h2>{{ confirms }}</h2>
            </v-tab>
            <v-tab href="#tab-2">
              Deaths
              <h2>{{ deaths }}</h2>
            </v-tab>
            <v-tab href="#tab-3">
              Recoveries
              <h2>{{ recovered }}</h2>
            </v-tab>
          </v-tabs>
        </v-bottom-navigation>
        <v-bottom-navigation fixed height="45" style="top: 120px;">
          <v-text-field
            v-model="search"
            label="Search Country"
            prepend-inner-icon="mdi-magnify"
            clearable
            @keyup="filterByValue(search)"
          ></v-text-field>
        </v-bottom-navigation>
        <v-divider style="margin-bottom: 105px;"></v-divider>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat style="text-align: left">
              <v-list>
                <v-list-item v-for="i in 10" v-show="loading" :key="i">
                  <v-sheet :color="`grey darken-2`" width="100%">
                    <v-skeleton-loader
                      class="mx-auto"
                      type="table-heading, actions"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-list-item>
                <v-list-group
                  v-for="country in countries"
                  :key="country.country_name"
                  no-action
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="country.country_name"
                      ></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text
                        v-text="country.cases"
                      ></v-list-item-action-text>
                    </v-list-item-action>
                  </template>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card flat style="text-align: left">
              <v-list>
                <v-list-group
                  v-for="country in countries"
                  :key="country.country_name"
                  no-action
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="country.country_name"
                      ></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text
                        v-text="country.deaths"
                      ></v-list-item-action-text>
                    </v-list-item-action>
                  </template>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-3">
            <v-card flat style="text-align: left">
              <v-list>
                <v-list-group
                  v-for="country in countries"
                  :key="country.country_name"
                  no-action
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="country.country_name"
                      ></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text
                        v-text="country.total_recovered"
                      ></v-list-item-action-text>
                    </v-list-item-action>
                  </template>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      confirms: 0,
      deaths: 0,
      recovered: 0,
      newCases: 0,
      newDeats: 0,
      tab: null,
      text: '',
      countries_stat: null,
      countries: null,
      errors: [],
      search: '',
      loading: true
    }
  },
  mounted() {
    this.loadStats()
  },
  methods: {
    loadStats() {
      axios
        .get(
          `https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php`,
          {
            headers: {
              'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
              'x-rapidapi-key':
                '5e267bfa9cmshcf4eb1857ee9eb0p1dfc62jsnc0504cefedf9'
            }
          }
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.confirms = response.data.total_cases
          this.deaths = response.data.total_deaths
          this.recovered = response.data.total_recovered
          this.newCases = response.data.new_cases
          this.newDeats = response.data.new_deaths
        })
        .catch((e) => {
          this.errors.push(e)
        })

      axios
        .get(
          `https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php`,
          {
            headers: {
              'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
              'x-rapidapi-key':
                '5e267bfa9cmshcf4eb1857ee9eb0p1dfc62jsnc0504cefedf9'
            }
          }
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.countries_stat = response.data.countries_stat
          this.countries = response.data.countries_stat
          this.loading = false
        })
        .catch((e) => {
          this.errors.push(e)
        })
    },
    filterByValue(text) {
      if (text.length > 2) {
        this.countries = this.countries_stat.filter(
          (data) =>
            JSON.stringify(data)
              .toLowerCase()
              .includes('corona') ||
            JSON.stringify(data)
              .toLowerCase()
              .includes(text.toLowerCase())
        )
      } else {
        this.countries = this.countries_stat
      }
    }
  }
}
</script>
