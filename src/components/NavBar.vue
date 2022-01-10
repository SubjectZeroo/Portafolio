<template>
  <nav
    class="bg-white border-gray-200 px-7 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div class="mx-auto max-w-7xl flex flex-wrap justify-between items-center">
      <router-link :to="{ name: 'Home' }" href="#" class="flex">
        <img class="mr-3 h-12" src="../assets/logo.png" alt="logo-page" />
        <!-- <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Js.</span> -->
      </router-link>
      <button
        @click="isOpen = !isOpen"
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          :class="!isOpen ? '' : 'hidden'"
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          :class="isOpen ? '' : 'hidden'"
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        :class="isOpen ? '' : 'hidden'"
        class="w-full md:block md:w-auto"
        id="mobile-menu"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold"
        >
          <li>
            <router-link
              class="relative flex flex-row items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-green-950 border-l-4 border-transparent pr-6"
              :to="{ name: 'Home' }"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-base tracking-wide truncate">Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="relative flex flex-row items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-green-950 border-l-4 border-transparent pr-6"
              :to="{ name: 'Projects' }"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </span>
              <span class="ml-2 text-base tracking-wide truncate"
                >Proyectos</span
              >
            </router-link>
          </li>
          <li>
            <div class="flex flex-row items-center justify-center">
              <a
                href="https://www.dropbox.com/s/j4q1rzr3gl63g86/Jafeht_Soturno_Resume_10-01-2022-14-00-43.pdf?dl=0"
                target="_blank"
                title="CV"
                class="bg-green-950 hover:bg-green-400 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CV</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style></style>
