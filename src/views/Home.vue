<template>
  <section>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div class="flex flex-wrap items-center mx-auto max-w-7xl">
        <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div class="relative w-full max-w-lg">
              <div
                class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              ></div>
              <div
                class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
              ></div>
              <div class="flex justify-center justify-items-center">
                <img
                  class="lg:h-80 md:h-64 h-40 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="Profile Picture"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
        >
          <h1
            class="mb-3 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl text"
          >
            Hola, soy Jafeht!
          </h1>
          <h2
            class="mb-8 text-3xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-3xl text"
          >
            Desarrollador Web
          </h2>
          <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
            ¡Bienvenidos a mi sitio web! aqui puedes encontrar información sobre
            mí y
            <router-link class="text-green-950" :to="{ name: 'projects' }"
              >proyectos</router-link
            >
            en los que he trabajado o creado con fines de aprendizaje.
          </p>
          <span
            class="text-xs font-bold tracking-widest text-green-950 uppercase"
          >
            Encuentrame tambien en
          </span>
          <div class="flex flex-wrap w-full -mx-2 text-left">
            <div class="p-2 mt-4">
              <button title="Github" type="button" class="py-2 px-4 flex justify-center items-center  bg-white text-gray-600 hover:text-white hover:bg-green-950  focus:ring-green-950 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg border-solid border-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </button>
            </div>
            <div class="p-2 mt-4">
              <button title="LInkedin" type="button" class="py-2 px-4 flex justify-center items-center  bg-white text-gray-600 hover:text-white hover:bg-green-950 focus:ring-green-950 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg border-solid border-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {},
};
</script>
<style>
.text {
  font-family: Ubuntu;
  background-image: linear-gradient(to right, #83eca8, #38b2ac, #63b3ed);
	background-size: 300%;
	font-weight: 900;
	font-size: 5vw;
	letter-spacing: -5px;
  line-height: 1.33;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: animated_text 10s ease-in-out infinite;
	-moz-animation: animated_text 10s ease-in-out infinite;
	-webkit-animation: animated_text 10s ease-in-out infinite;
}

@keyframes animated_text {
	0% { background-position: 0px 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0px 50%; }
}
</style>

