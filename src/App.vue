<template>
  <div id="app">
    <header-side></header-side>
    <card-container></card-container>
    <download-side></download-side>
    <footer-side></footer-side>
  </div>
</template>

<script>
import HeaderSide from "./components/HeaderSide";
import CardContainer from "./components/CardContainer";
import DownloadSide from "./components/DownloadSide";
import FooterSide from "./components/FooterSide";

export default {
  name: "App",
  components: {
    HeaderSide,
    CardContainer,
    DownloadSide,
    FooterSide,
  },
};
</script>

<style></style>
