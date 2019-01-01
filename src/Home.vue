<template>
  <div :class="['home', { open: accordionIsOpen }]">
    <section class="section" ref="section" @click="handleClick">
      <h2 class="section__title">Push</h2>
    </section>
    <section class="section" ref="section" @click="handleClick">
      <h2 class="section__title">Pull</h2>
    </section>
    <section class="section" ref="section" @click="handleClick">
      <h2 class="section__title">Legs</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      accordionIsOpen: false
    };
  },
  methods: {
    handleClick: function(e) {
      this.accordionIsOpen = true;
      // Oldschool method
      let elements = document.querySelectorAll("section");
      elements.forEach(elem => elem.classList.remove("section--active"));
      e.currentTarget.classList.add("section--active");
    }
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
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

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(180deg, #0a2f57 0%, #0c5576 100%);
    mix-blend-mode: multiply;
    opacity: 0.8;
  }

  &.open {
    .section {
      flex: 0 1 7%;

      &--active {
        flex: 1 1 70%;

        .section__title {
          font-size: 36px;
        }
      }

      &__title {
        transform: translateY(0);
        font-size: 24px;
      }
    }
  }

  .section {
    position: relative;
    flex: 0 1 34%;
    transition: all 0.3s ease-in;
    border-bottom: 2px solid var(--color-primary);

    &:last-child {
      border-bottom: none;
    }

    &__title {
      padding-left: var(--gutter);
      font-size: 36px;
      margin: 0;
      transform: translateY(23vh);
      transition: flex 0.5s cubic-bezier(0.61, -0.19, 0.7, -0.11),
        transform 0.3s ease-in, font-size 0.3s ease-in;
    }
  }
}
</style>

