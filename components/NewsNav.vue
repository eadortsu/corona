<template>
  <div>
    <v-bottom-navigation
      fixed
      height="60"
      style="top: 56px;padding-bottom: 64px;"
    >
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
  </div>
</template>
