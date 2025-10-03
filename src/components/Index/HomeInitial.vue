<template>
  <section
    class="px-4 py-1.5 bg-gradient-to-b from-white to-blue-50 border-b-[1px] border-blue-100 border-dashed sm:px-6 lg:px-8"
  >
    <div class="mx-auto">
      <div class="px-4 py-3 mx-auto sm:px-2 lg:px-3">
        <div class="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <!-- Left Content  -->
          <div class="text-center lg:text-left">
            <div
              class="inline-flex justify-center items-center px-3 py-1 mb-4 text-sm font-medium text-rose-600 bg-rose-50 rounded-full"
            >
              <v-icon name="fa-balance-scale" class="mr-1.5" scale="1.5" />
              Plataforma de reclamos transparente
            </div>
            <h1
              class="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              <span class="block animate-fade-left">Reclame con sus experiencias,</span>
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 animate__animated animate__jackInTheBox animate-delay-500"
              >
                descubra con las de otros
              </span>
            </h1>
            <p class="mb-8 max-w-prose text-lg text-gray-600">
              ¿Tiene un reclamo? Compartea sus experiencias y hagamos visible lo que necesita
              cambiar en servicios, empresas, productos y más.
            </p>

            <!-- Categories -->
            <div class="flex flex-wrap gap-2 justify-center mb-10 lg:justify-start">
              <RouterLink
                :to="{ name: 'all-categories', params: { category: service.name } }"
                v-for="(service, index) in categories"
                :key="index"
                class="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-rose-600 rounded-lg transition-all hover:bg-rose-700 hover:shadow-lg hover:transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                <v-icon :name="service.icon" class="mr-2" />
                {{ service.name }}
              </RouterLink>
            </div>

            <!-- Button -->
            <div class="flex justify-center lg:justify-start">
              <RouterLink
                to="/register"
                class="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg transition-all transform hover:from-rose-700 hover:to-red-900 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                ¡Registro Gratis!
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </RouterLink>
            </div>
          </div>

          <!-- Right Content  -->
          <div class="relative">
            <div class="overflow-hidden relative rounded-2xl">
              <div class="absolute inset-0 z-10"></div>
              <img
                src="../../assets/img/grito.png"
                alt="Personas expresando sus reclamos"
                class="object-cover relative z-20 w-full rounded-2xl filter drop-shadow-xl animate-fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const categories = [
  {
    name: 'Bancos',
    icon: 'bi-bank2',
  },
  {
    name: 'Gobierno',
    icon: 'ri-government-line',
  },
  {
    name: 'Redes Sociales',
    icon: 'io-chatbubbles',
  },
  {
    name: 'Paquetería y Correos',
    icon: 'bi-mailbox2',
  },
  {
    name: 'Salud',
    icon: 'md-healthandsafety',
  },
  {
    name: 'Transportes',
    icon: 'fa-bus-alt',
  },
  {
    name: 'Streaming',
    icon: 'md-livetv-twotone',
  },
  {
    name: 'Hospedaje',
    icon: 'ri-hotel-line',
  },
  {
    name: 'Comida y Restaurantes',
    icon: 'io-restaurant',
  },
]
</script>

<style scoped></style>
