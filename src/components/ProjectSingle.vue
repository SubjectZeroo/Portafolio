<template>
  <div
    class="flex flex-col flex-1 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden mt-6">
    <div class="relative pb-48 overflow-hidden">
      <img
        :src="project.img"
        :alt="project.title"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <div class="flex-1 px-6 py-3">
      <h2 class="mt-2 mb-2 font-bold text-green-950 ">
        {{ project.title }}
      </h2>
      <p class="text-sm tracking-tight text-gray-600">
        {{ project.description }}
      </p>
    </div>
    <div class="inline-flex items-center px-6 py-3">
      <a
        :href="project.url"
        target="_blank"
        title="Github"
        type="button"
        class="inline-block bg-white hover:bg-green-950 text-gray-600 font-bold py-2 px-4 rounded-lg border-solid border-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style></style>
