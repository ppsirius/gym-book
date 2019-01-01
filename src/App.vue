<template>
  <div class="app" ref="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&subset=latin-ext");

:root {
  --gutter: 20px;
  --color-primary: #fff;
}

html,
body,
.app {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
