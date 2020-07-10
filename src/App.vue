<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>-->

<template>
 <v-app >
    
   <v-content>
    <router-view></router-view>
   </v-content>
 </v-app>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

*{
  font-family: 'Noto Sans TC', sans-serif;
}



</style>
