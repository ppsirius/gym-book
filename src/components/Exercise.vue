<template>
  <li class="exercise">
    <span class="exercise__name">{{name}}</span>
    <div class="exercise__details">
      <div class="details__quantity">{{quantity}}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Exercise",
  props: {
    name: String,
    quantity: String,
    type: String
  }
};
</script>

<style lang="scss">
.exercise {
  display: flex;
  align-items: flex-end;
  margin: 18px 0;
  padding: 0 var(--gutter);

  &__name {
    padding-right: 10px;
    flex: 1 1 100%;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .details__quantity {
    font-size: 18px;
    line-height: 1;
  }
}
</style>