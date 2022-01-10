<template>
  <div>
    <Banner />
    <ProjectsHome />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import ProjectsHome from "@/components/ProjectsHome.vue";
export default {
  name: "home",
  components: {
    Banner,
    ProjectsHome,
  },
};
</script>
<style></style>
