<template>
  <div id="app">
    <section class="section">
      <h2 class="section__title">Push</h2>
      <div class="line-separator"></div>
    </section>
    <section class="section">
      <h2 class="section__title">Pull</h2>
      <div class="line-separator"></div>
    </section>
    <section class="section">
      <h2 class="section__title">Legs</h2>
      <div class="line-separator"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:600,800&subset=latin-ext");

html {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-image: url("assets/gym-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 800;
  font-size: 14px;
}

.section {
  flex: 1 1 34%;
}
</style>
