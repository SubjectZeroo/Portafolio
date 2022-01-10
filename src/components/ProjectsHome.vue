<template>
  <section class="px-12 py-12 mx-auto max-w-7xl sm:px-12 md:px-12">
    <div class="header flex items-end justify-between mb-12">
      <div class="title">
        <p class="text-4xl font-bold text-gray-600 mb-4">Proyectos</p>
        <p class="text-2xl font-light text-gray-400">
          Proyectos en los que he trabajado o creado con fines de aprendizaje
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in getProjectsPreview.slice(0, 3)"
        :key="project.id"
        :project="project"
      />
    </div>
    <div class="text-center mt-10">
      <router-link
        :to="{ name: 'Projects' }"
        class="bg-green-950 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Ver Mas
      </router-link>
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
    getProjectsPreview: function () {
      return projects;
    },
  },
};
</script>

<style></style>
