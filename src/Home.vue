<template>
  <div class="home">
    <section class="section" ref="section" @click="handleClick">
      <h2 class="section__title">Push</h2>
      <div class="section__line-separator"></div>
    </section>
    <section class="section" ref="section" @click="handleClick">
      <h2 class="section__title">Pull</h2>
      <div class="section__line-separator"></div>
    </section>
    <section class="section" ref="section" @click="handleClick">
      <h2 class="section__title">Legs</h2>
      <div class="section__line-separator"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleClick: function(e) {
      // this.$refs.app.classList.add("app--open");
      // this.$refs.section.classList.remove("section--active");
      // e.target.classList.add("section--active");
    }
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-primary);
  background-image: url("assets/gym-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 800;
  font-size: 14px;

  &--open {
    .section {
      flex: 0 1 7%;
    }
  }
}

.section {
  flex: 0 1 34%;
  transition: all 0.3s ease-in;

  &:last-child {
    .section__line-separator {
      display: none;
    }
  }

  &--active {
    flex: 1 1 70%;
  }

  &__title {
    padding-left: var(--gutter);
    font-size: 36px;
    // padding-top: 21vh;
    padding-bottom: 16px;
    margin: 0;
    // transform: translateY(16vh);
  }

  &__line-separator {
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
  }
}
</style>

