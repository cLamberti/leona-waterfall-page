<template>
  <header class="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-white font-bold text-2xl hover:text-blue-200 transition">
            Leona Waterfall
          </a>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-white hover:text-blue-200 transition font-medium">Inicio</a>
          <a href="#" class="text-white hover:text-blue-200 transition font-medium">Servicios</a>
          <a href="#" class="text-white hover:text-blue-200 transition font-medium">Galería</a>
          <a href="#" class="text-white hover:text-blue-200 transition font-medium">Contacto</a>
        </div>

        <!-- Botón CTA Desktop -->
        <div class="hidden md:block">
          <button class="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
            Reservar
          </button>
        </div>

        <!-- Botón Menú Mobile -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-white hover:text-blue-200 transition focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menú Mobile -->
      <div
        v-if="isOpen"
        class="md:hidden pb-4 space-y-2 animate-in fade-in duration-200"
      >
        <a href="#" class="block text-white hover:bg-blue-700 px-3 py-2 rounded transition">
          Inicio
        </a>
        <a href="#" class="block text-white hover:bg-blue-700 px-3 py-2 rounded transition">
          Servicios
        </a>
        <a href="#" class="block text-white hover:bg-blue-700 px-3 py-2 rounded transition">
          Galería
        </a>
        <a href="#" class="block text-white hover:bg-blue-700 px-3 py-2 rounded transition">
          Contacto
        </a>
        <button class="w-full bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition mt-2">
          Reservar
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
@media (max-width: 768px) {
  header {
    position: sticky;
    top: 0;
  }
}
</style>