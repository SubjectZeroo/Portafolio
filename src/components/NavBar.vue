<template>
  <header class="bg-gray-800">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-5 dark:bg-gray-800">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="#" class="flex">
          <!-- <svg
            class="mr-3 h-10"
            viewBox="0 0 52 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
              fill="#76A9FA"
            ></path>
            <path
              d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
              fill="#A4CAFE"
            ></path>
            <path
              d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
              fill="#1C64F2"
            ></path>
          </svg> -->
          <span
            class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >JS.</span
          >
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
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
            class="hidden w-6 h-6"
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
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 transition-colors duration-300 md:hover:text-green-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 transition-colors duration-300 md:hover:text-green-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >About</a
              >
            </li>  
          </ul>
        </div>
      </div>
    </nav>

    <!-- Section Hero  -->
    <div
      class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-24"
    >
      <div class="grid justify-center items-center order-1 col-span-1">
        <img
          class="lg:h-80 md:h-64 h-40 rounded-full"
          src=""
          alt=""
        />
      </div>
      <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
        <h1 class="text-4xl text-white text-center md:text-left font-bold mb-6">
          Hi, I am Jafeht
        </h1>
        <p class="text-xl text-white text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quod quaerat provident et fugiat ipsum modi repellat libero aperiam ex, odit obcaecati quia in recusandae, ipsam, delectus amet dolorem magnam!
        </p>
        <!-- <button
          class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400"
        >
          Download Resume
        </button> -->
      </div>
    </div>
    <!-- <section class="flex items-center justify-center" style="height: 500px">
      <div class="text-center">
        <p class="text-xl font-medium tracking-wider text-gray-300">
          Lorem ipsum dolor
        </p>
        <h2 class="mt-6 text-3xl font-bold text-white md:text-5xl">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit
        </h2>

        <div class="flex justify-center mt-8">
          <a
            class="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500"
            href="#"
            >Get In Touch</a
          >
        </div>
      </div>
    </section> -->
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
