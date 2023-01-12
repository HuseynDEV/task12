<template>
  <div class='card-container grid md:px-[130px] px-[40px] -translate-y-[60px] '>
    <card-item
      v-for="data in cardData"
      :key="data.name"
      :data="data"
    ></card-item>
  </div>
</template>

<script>
import { data } from "../data";
import CardItem from "./CardItem";
export default {
  components: {
    CardItem,
  },
  data() {
    return {
      cardData: data,
    };
  },
};
</script>

<style scoped></style>
