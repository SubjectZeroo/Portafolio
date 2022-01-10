<template>
  <div id="app" class="font-ubuntu">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,Footer,
  },
};
</script>

<style>
  @layer base {
    body {
      font-family: 'Ubuntu', serif;
    }
  }
</style>
