<template>
  <div>
    <Banner />
    <CardProjects />
   
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import CardProjects from "@/components/CardProjects.vue";
export default {
  name: "home",
  components: {
    Banner, CardProjects
  },
};
</script>
<style>

</style>
