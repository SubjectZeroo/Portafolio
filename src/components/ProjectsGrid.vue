<template>
  <section class="px-12 py-12 mx-auto max-w-7xl sm:px-12 md:px-12">
    <div class="header flex items-end justify-between mb-12">
      <div class="title">
        <p class="text-4xl font-bold text-gray-600 mb-4">Proyectos</p>
        <p class="text-2xl font-light text-gray-400">
          Siempre estoy trabajando en nuevos proyectos. Puedes encontrarlos en
          mi
          <a class="text-green-950" href="https://github.com/SubjectZeroo"
            >GitHub</a
          >
          .
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in getProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../data/projects";
export default {
  components: { ProjectSingle },
  data: () => {
    return {
      projects: [],
    };
  },
  computed: {
    getProjects: function () {
      return projects;
    },
  },
};
</script>

<style></style>