<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>-->
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
    <v-footer :fixed="fixed" app>
      <v-card flat tile width="100%" class="lighten-1 text-center">
        <v-card-text>
          <v-row no-gutters>
            <v-col>
              <v-btn class="mx-4" icon to="/" router>
                <v-icon size="24px">mdi-test-tube</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-clock</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-newspaper-variant-multiple</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="mx-4" icon to="/stats" router>
                <v-icon size="24px">mdi-chart-areaspline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Corona Ap'
    }
  },
  computed: {}
}
</script>
<style scoped>
.v-footer {
  padding: 0;
}
</style>
