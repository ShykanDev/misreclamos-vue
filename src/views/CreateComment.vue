<template>
  <MainLayout>
    <template #main>
      <section class="flex justify-center items-center p-6 min-h-screen transition-all duration-300 bgStyle"
      :class="{ 'bg-black/45': isDark, 'bg-white/95': !isDark }"
      >
  <div @mouseenter="isDark = true" @mouseleave="isDark = false" class="p-8 mx-auto rounded-2xl border-2 border-purple-400 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-5 hover:bg-purple-50/80 hover:backdrop-blur-none w-2xl hover:w-[80%] hover:shadow-2xl md:p-12">
    <!-- Título -->
    <h2 class="mb-2 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 md:text-4xl">
      Añadir un nuevo reclamo para la categoría <span class="font-bold text-pink-500">{{ category }}</span>
    </h2>
    <!-- Subtítulo -->
    <p class="mb-8 font-medium text-center text-gray-600">
      Tu opinión nos ayuda a <span class="text-pink-500">mejorar</span>.
    </p>

    <!-- Formulario -->
    <form class="space-y-6">
      <!-- Campo: Nombre -->
      <div class="space-y-2">
        <label for="title" class="block text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-pink-600">Título</label>
        <input
          type="text"
          id="title"
          class="px-4 py-3 w-full bg-white rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent hover:border-pink-200 hover:shadow-sm"
          placeholder="Me prometieron que me daban un descuento de 20%"
        />
      </div>

      <!-- Campo: Categoría -->
      <div class="space-y-2">
        <label for="category" class="block text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-pink-600">Categoría</label>
        <select
          id="category"
          class="px-4 py-3 w-full bg-white rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 group focus:ring-pink-500 focus:border-transparent hover:border-pink-200 hover:shadow-sm"
        >
          <option value="" disabled selected>Seleccione una categoría</option>
          <option class="text-gray-700 group-hover:text-pink-600" v-for="category in fullCategories" :key="category.name" :value="category.name">
            {{ category.name }}
          </option>
        </select>
      </div>

      <!-- Campo: Descripción -->
      <div class="space-y-2">
        <label for="comment" class="block text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-pink-600">Descripción</label>
        <textarea
          id="comment"
          rows="5"
          class="px-4 py-3 w-full bg-white rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent hover:border-pink-200 hover:shadow-sm"
          placeholder="E.g: Todo comienza cuando la empresa (x) no cumple con sus promesas, debido a que..."
        ></textarea>
      </div>

      <label class="custum-file-upload" for="file">
  <div class="icon">
  <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
  </div>
  <div class="text">
     <span>Haga clic para subir una imagen</span>
     </div>
     <input type="file" id="file">
  </label>

      <!-- Recordatorio -->
      <div class="p-4 rounded-lg border-l-4 border-pink-500 transition-colors duration-200 bg-pink-50/80 hover:bg-pink-100 hover:border-pink-600">
        <p class="text-sm font-medium text-pink-700">
          <strong class="font-bold">Importante:</strong> Sé respetuoso. Los comentarios son revisados por nuestro equipo.
        </p>
      </div>

      <!-- Botón de envío -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="px-8 py-3 font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg transition-all duration-200 transform hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm"
        >
          Enviar reclamo
        </button>
      </div>
    </form>
  </div>
</section>
  </template>
</MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = route.params.category || '';
const isDark = ref(false);
const fullCategories = [
  { name: "Abarrotes y Bebidas", icon: "fa-shopping-basket", examples: ["La Europea", "Super Salados", "Bodega Aurrerá Express", "Tiendas 3B"] },
  { name: "Vinos o Vinaterías", icon: "fa-wine-bottle", examples: ["La Vinoteca", "Vinos Sin-Fronteras", "Bodegas de Santo Tomás", "Casa Madero"] },
  { name: "Cerveza o Cervecerías", icon: "fa-beer", examples: ["Cervecería Minerva", "Cucapá", "Tempranillo", "Insurgente"] },
  { name: "Leche y/o Sustitutos", icon: "gi-milk-carton", examples: ["Lala", "Alpura", "Nestlé", "Santa Clara"] },
  { name: "Alimentos", icon: "fa-bread-slice", examples: ["Bimbo", "Gamesa", "Sabritas", "Marinela"] },
  { name: "Aseguradoras", icon: "fa-shield-alt", examples: ["GNP", "AXA", "MetLife", "Zurich"] },
  { name: "Automotriz", icon: "fa-car", examples: ["Toyota", "Nissan", "Volkswagen", "General Motors"] },
  { name: "Bancos", icon: "bi-bank2", examples: ["Banamex", "BBVA", "Santander", "HSBC"] },
  { name: "Banquetes", icon: "fa-utensils", examples: ["Salones García", "Banquetes El Globo", "Salones Fiesta", "Banquetes Laredo"] },
  { name: "Beneficencias y Fundaciones", icon: "fa-heart", examples: ["UNICEF México", "Cruz Roja Mexicana", "Teletón", "Fondo UNO"] },
  { name: "Combustibles", icon: "fa-gas-pump", examples: ["Pemex", "BP", "Shell", "Gulf"] },
  { name: "Comida y Restaurantes", icon: "fa-utensils", examples: ["Sanborns", "Vips", "Toks", "Applebee's"] },
  { name: "Construcción y/o constructoras", icon: "md-build-sharp", examples: ["Cemex", "Home Depot", "Comex", "Grupo Lamosa"] },
  { name: "Consumibles", icon: "fa-soap", examples: ["Scotch-Brite", "Cloralex", "Fábrica de Jabón La Corona", "Kimberly-Clark"] },
  { name: "Deportes", icon: "fa-futbol", examples: ["Sport City", "Martí", "Decathlon", "Nike Store"] },
  { name: "Educación", icon: "fa-graduation-cap", examples: ["UNAM", "Tec de Monterrey", "UVM", "UNITEC"] },
  { name: "Electrónicos", icon: "gi-electrical-resistance", examples: ["Liverpool Electrónicos", "Best Buy", "Sams Club", "Coppel"] },
  { name: "Energías Limpias", icon: "fa-leaf", examples: ["Iberdrola", "Enel Green Power", "Acciona Energía", "Engie"] },
  { name: "Eventos", icon: "fa-ticket-alt", examples: ["Ticketmaster", "Boletia", "Superboletos", "Eticket"] },
  { name: "Farmacéutico", icon: "fa-pills", examples: ["Farmacias del Ahorro", "Farmacias Benavides", "Farmacias Similares", "Farmacias Guadalajara"] },
  { name: "Ferretería, llantas y automotriz", icon: "la-tools-solid", examples: ["Home Depot", "Lumen", "Toks Ferretería", "Llanticas"] },
  { name: "Gobierno", icon: "fa-landmark", examples: ["IMSS", "INFONAVIT", "SAT", "SEP"] },
  { name: "Hospedaje", icon: "fa-bed", examples: ["Hoteles City Express", "Fiesta Americana", "Marriott", "NH Collection"] },
  { name: "Joyería y Relojes", icon: "fa-gem", examples: ["Toussaint", "Pandora", "Swatch", "Rolex"] },
  { name: "Juguetes", icon: "fa-gamepad", examples: ["Toys", "Lego Store", "KidZania", "Juguetibici"] },
  { name: "Tiendas en Línea", icon: "fa-shopping-cart", examples: ["Mercado Libre", "Amazon México", "Linio", "Liverpool en Línea"] },
  { name: "Membresías", icon: "fa-id-card", examples: ["Costco", "Sam's Club", "Smart Fit", "Cinépolis"] },
  { name: "Papelería", icon: "fa-sticky-note", examples: ["Office Depot", "Office Max", "Lumen", "Plaza Papelera"] },
  { name: "Paquetería y Correos", icon: "fa-truck", examples: ["FedEx", "DHL", "Estafeta", "Correos de México"] },
  { name: "Persona Física", icon: "fa-user", examples: ["Consultores Independientes", "Freelancers", "Artesanos", "Profesionistas"] },
  { name: "Productos Generales", icon: "fa-box-open", examples: ["Walmart", "Soriana", "Chedraui", "La Comer"] },
  { name: "Redes Sociales", icon: "io-share-social-sharp", examples: ["Facebook", "Instagram", "Twitter", "TikTok"] },
  { name: "Religión", icon: "fa-church", examples: ["Arquidiócesis de México", "Iglesia Cristiana", "Sinagoga Histórica", "Mezquita Tarek Ibn Ziyad"] },
  { name: "Ropa, Calzado y Zapatos", icon: "gi-clothes", examples: ["Zara", "H&M", "Liverpool", "Suburbia"] },
  { name: "Salud", icon: "fa-hospital", examples: ["Hospital Ángeles", "Médica Sur", "ABC Medical Center", "Star Médica"] },
  { name: "Salud y Belleza Estética", icon: "fa-spa", examples: ["Belcolade", "Dermatológicos MD", "Clínicas de Belleza", "HairX"] },
  { name: "Servicios", icon: "fa-concierge-bell", examples: ["Uber", "Didi", "Rappi", "Airbnb"] },
  { name: "Servicios de Streaming", icon: "fa-film", examples: ["Netflix", "Disney+", "Spotify", "Amazon Prime Video"] },
  { name: "Software", icon: "fa-code", examples: ["Microsoft", "Adobe", "Autodesk", "SAP"] },
  { name: "Supermercados y Autoservicios", icon: "fa-cart-plus", examples: ["Walmart", "Soriana", "Chedraui", "Superama"] },
  { name: "Tecnología", icon: "fa-microchip", examples: ["Apple", "Samsung", "HP", "Dell"] },
  { name: "Telecomunicaciones", icon: "fa-phone-alt", examples: ["Telmex", "Movistar", "AT&T", "Unefon"] },
  { name: "Tiendas Departamentales", icon: "fa-store", examples: ["Liverpool", "Palacio de Hierro", "Sears", "Suburbia"] },
  { name: "Todo para bebé", icon: "fa-baby", examples: ["Baby's Room", "Bebé Store", "Kids Corner", "Toys R Us Bebé"] },
  { name: "Transportes", icon: "fa-bus", examples: ["ADO", "ETN", "Omnibus de México", "Volaris"] },
  { name: "Turismo", icon: "md-travelexplore-sharp", examples: ["Cancún Travel", "Best Day", "Despegar", "Kayak"] },
  { name: "Veterinaria y Zootecnia", icon: "io-paw-sharp", examples: ["Hospital Veterinario UNAM", "Mascotitas", "Petco", "Veterinaria San Francisco"] },
  { name: "Otro", icon: "", examples: ["Hospital Veterinario UNAM", "Mascotitas", "Petco", "Veterinaria San Francisco"] }
];

const selectedCategory = ref('');

const onSubmit = () => {
  console.log('Formulario enviado');
};

</script>

<style scoped>
.bgStyle{
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%236c0098' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
}


/* From Uiverse.io by Yaya12085 */
.custum-file-upload {
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0,0,0,0.1);
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 80px;
  fill: rgba(75, 85, 99, 1);
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
  display: none;
}
</style>
