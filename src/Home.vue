<template>
  <div :class="['home', { open: accordionIsOpen }]">
    <section class="section" @click="handleClick">
      <h2 class="section__title">Push</h2>
      <div class="section__content">
        <ul>
          <Exercise
            v-for="exercise in exercises"
            v-show="exercise.type  === 'Push'"
            :key="exercise.name"
            :name="exercise.name"
            :quantity="exercise.quantity"
            :type="exercise.type"
          />
        </ul>
      </div>
    </section>
    <section class="section" @click="handleClick">
      <h2 class="section__title">Pull</h2>
      <div class="section__content">
        <ul>
          <Exercise
            v-for="exercise in exercises"
            v-show="exercise.type  === 'Pull'"
            :key="exercise.name"
            :name="exercise.name"
            :quantity="exercise.quantity"
            :type="exercise.type"
          />
        </ul>
      </div>
    </section>
    <section class="section" @click="handleClick">
      <h2 class="section__title">Legs</h2>
      <div class="section__content">
        <ul>
          <Exercise
            v-for="exercise in exercises"
            v-show="exercise.type  === 'Legs'"
            :key="exercise.name"
            :name="exercise.name"
            :quantity="exercise.quantity"
            :type="exercise.type"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Exercise from "./components/Exercise";

export default {
  name: "Home",
  components: { Exercise },
  data: function() {
    return {
      accordionIsOpen: false,
      exercises: [
        {
          type: "Push",
          name: "Wyciskanie sztangi leżąc na ławce",
          quantity: "3x10"
        },
        {
          type: "Push",
          name: "Wyciskanie hantli skos",
          quantity: "3x10"
        },
        {
          type: "Push",
          name: "Rozpiętki skos",
          quantity: "3x10"
        },
        {
          type: "Push",
          name: "Wyciskanie żołnierskie",
          quantity: "3x8"
        },
        {
          type: "Push",
          name: "Wznosy bokiem hantli",
          quantity: "3x12"
        },
        {
          type: "Push",
          name: "Francuz, hantle zza głowy",
          quantity: "3x8"
        },
        {
          type: "Pull",
          name: "Wiosłowanie sztangą w opadzie",
          quantity: "3x8"
        },
        {
          type: "Pull",
          name: "Wiosłowanie hantlem w podporze",
          quantity: "3x10"
        },
        {
          type: "Pull",
          name: "Podciąganie na drążku",
          quantity: "3x8"
        },
        {
          type: "Pull",
          name: "Wznosy w opadzie tułowia / facepull",
          quantity: "3x12"
        },
        {
          type: "Pull",
          name: "Wznosy bokiem na bramie",
          quantity: "3x12"
        },
        {
          type: "Pull",
          name: "Uginanie przedramion ze sztangą",
          quantity: "3x8"
        },
        {
          type: "Legs",
          name: "Przysiad ze sztangą",
          quantity: "3x10"
        },
        {
          type: "Legs",
          name: "Martwy ciąg",
          quantity: "3x8"
        },
        {
          type: "Legs",
          name: "Przysiad bułgarski",
          quantity: "3x10"
        },
        {
          type: "Legs",
          name: "Uginanie nóg leżąc",
          quantity: "3x10"
        },
        {
          type: "Legs",
          name: "Hip Trust",
          quantity: "3x8"
        }
      ]
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

        .section__content {
          display: block;
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
    overflow: hidden;
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

    &__content {
      display: none;
      padding: var(--gutter) / 2 0;
    }
  }
}
</style>

