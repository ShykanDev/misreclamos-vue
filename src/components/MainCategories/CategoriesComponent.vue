<template>
  <div class="bgCustom">
    <div class="flex sticky top-5 z-30 rounded-2xl items-left">
      <h4
        class="inline-block px-1 mb-6 text-2xl font-semibold text-rose-800 bg-white border-b-2 border-rose-500 backdrop-blur-md"
      >
        Categorías
      </h4>
    </div>
    <article class="max-w-4xl h-full">
      <ul class="flex overflow-y-scroll flex-col gap-2 items-left">
        <RouterLink
          :to="{ name: 'all-categories', params: { category: category.name } }"
          v-for="category in fullCategories"
          :key="category.name"
          class="relative p-3 text-2xl rounded-lg border border-rose-100 transition-colors duration-200 hover:bg-white group hover:border-rose-300 hover:cursor-pointer"
          :class="{
            'bg-rose-700 text-white hover:bg-rose-800 hover:text-rose-800 ':
              category.name == route.params.category,
            'bg-white/80 text-rose-700 hover:bg-rose-800 hover:text-rose-800 hover:border-rose-800':
              category.name != route.params.category,
          }"
        >
          <!--Chip de categorías-->
          <span
            v-show="category.name != route.params.category"
            class="inline-block absolute -top-2 left-2 px-2 py-1 text-xs font-semibold text-rose-600 bg-white rounded-full border-t-2 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 border-t-rose-100"
          >
            Haga click para ver las quejas
          </span>
          <span class="flex gap-2 items-center transition-all duration-200">
            <v-icon :name="category.icon" class="group-hover:scale-110" scale="1.5" />
            <span class="transition-all duration-100 group-hover:translate-x-10">{{
              category.name
            }}</span>
          </span>
          <div
            class="absolute top-0 right-0 invisible z-20 p-2 w-56 text-2xl bg-white rounded-lg border border-rose-200 shadow-md opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100"
          >
            <ul class="space-y-1">
              <h5 class="font-semibold text-rose-800">Ejemplos para {{ category.name }}</h5>
              <RouterLink
                :to="{ name: 'all-categories', params: { category: category.name } }"
                class="px-2 py-1 text-sm text-white bg-rose-600 rounded transition-colors hover:bg-white hover:text-rose-800 hover:border-rose-800 hover:border hover:cursor-pointer"
                >Ver todos</RouterLink
              >
              <li
                v-for="example in category.examples"
                :key="example"
                class="px-2 py-1 text-sm text-rose-800 rounded transition-colors hover:bg-white hover:cursor-pointer"
              >
                {{ example }}
              </li>
              <button
                class="flex items-center px-2 py-1 text-sm text-white bg-rose-800 rounded-3xl transition-colors hover:bg-rose-700 hover:cursor-pointer"
              >
                <v-icon name="md-add-round" scale="1" />
                <RouterLink :to="{ name: 'create-comment', params: { category: category.name } }"
                  >Nuevo reclamo para {{ category.name }}</RouterLink
                >
              </button>
            </ul>
          </div>
        </RouterLink>
      </ul>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const fullCategoriesOriginal = [
  {
    name: 'Abarrotes y Bebidas',
    icon: '',
    examples: ['La Europea', 'Super Salados', 'Bodega Aurrerá Express', 'Tiendas 3B'],
  },
  {
    name: 'Vinos o Vinaterías',
    icon: '',
    examples: ['La Vinoteca', 'Vinos Sin-Fronteras', 'Bodegas de Santo Tomás', 'Casa Madero'],
  },
  {
    name: 'Cerveza o Cervecerías',
    icon: '',
    examples: ['Cervecería Minerva', 'Cucapá', 'Tempranillo', 'Insurgente'],
  },
  {
    name: 'Leche y/o Sustitutos',
    icon: 'gi-milk-carton',
    examples: ['Lala', 'Alpura', 'Nestlé', 'Santa Clara'],
  },
  { name: 'Alimentos', icon: '', examples: ['Bimbo', 'Gamesa', 'Sabritas', 'Marinela'] },
  { name: 'Aseguradoras', icon: '', examples: ['GNP', 'AXA', 'MetLife', 'Zurich'] },
  { name: 'Automotriz', icon: '', examples: ['Toyota', 'Nissan', 'Volkswagen', 'General Motors'] },
  { name: 'Bancos', icon: '', examples: ['Banamex', 'BBVA', 'Santander', 'HSBC'] },
  {
    name: 'Banquetes',
    icon: '',
    examples: ['Salones García', 'Banquetes El Globo', 'Salones Fiesta', 'Banquetes Laredo'],
  },
  {
    name: 'Beneficencias y Fundaciones',
    icon: '',
    examples: ['UNICEF México', 'Cruz Roja Mexicana', 'Teletón', 'Fondo UNO'],
  },
  { name: 'Combustibles', icon: '', examples: ['Pemex', 'BP', 'Shell', 'Gulf'] },
  { name: 'Comida y Restaurantes', icon: '', examples: ['Sanborns', 'Vips', 'Toks', "Applebee's"] },
  {
    name: 'Construcción y/o constructoras',
    icon: '',
    examples: ['Cemex', 'Home Depot', 'Comex', 'Grupo Lamosa'],
  },
  {
    name: 'Consumibles',
    icon: '',
    examples: ['Scotch-Brite', 'Cloralex', 'Fábrica de Jabón La Corona', 'Kimberly-Clark'],
  },
  { name: 'Deportes', icon: '', examples: ['Sport City', 'Martí', 'Decathlon', 'Nike Store'] },
  { name: 'Educación', icon: '', examples: ['UNAM', 'Tec de Monterrey', 'UVM', 'UNITEC'] },
  {
    name: 'Electrónicos',
    icon: '',
    examples: ['Liverpool Electrónicos', 'Best Buy', 'Sams Club', 'Coppel'],
  },
  {
    name: 'Energías Limpias',
    icon: '',
    examples: ['Iberdrola', 'Enel Green Power', 'Acciona Energía', 'Engie'],
  },
  { name: 'Eventos', icon: '', examples: ['Ticketmaster', 'Boletia', 'Superboletos', 'Eticket'] },
  {
    name: 'Farmacéutico',
    icon: '',
    examples: [
      'Farmacias del Ahorro',
      'Farmacias Benavides',
      'Farmacias Similares',
      'Farmacias Guadalajara',
    ],
  },
  {
    name: 'Ferretería, llantas y automotriz',
    icon: '',
    examples: ['Home Depot', 'Lumen', 'Toks Ferretería', 'Llanticas'],
  },
  { name: 'Gobierno', icon: '', examples: ['IMSS', 'INFONAVIT', 'SAT', 'SEP'] },
  {
    name: 'Hospedaje',
    icon: '',
    examples: ['Hoteles City Express', 'Fiesta Americana', 'Marriott', 'NH Collection'],
  },
  { name: 'Joyería y Relojes', icon: '', examples: ['Toussaint', 'Pandora', 'Swatch', 'Rolex'] },
  { name: 'Juguetes', icon: '', examples: ['Toys', 'Lego Store', 'KidZania', 'Juguetibici'] },
  {
    name: 'Tiendas en Línea',
    icon: '',
    examples: ['Mercado Libre', 'Amazon México', 'Linio', 'Liverpool en Línea'],
  },
  { name: 'Membresías', icon: '', examples: ['Costco', "Sam's Club", 'Smart Fit', 'Cinépolis'] },
  {
    name: 'Papelería',
    icon: '',
    examples: ['Office Depot', 'Office Max', 'Lumen', 'Plaza Papelera'],
  },
  {
    name: 'Paquetería y Correos',
    icon: '',
    examples: ['FedEx', 'DHL', 'Estafeta', 'Correos de México'],
  },
  {
    name: 'Persona Física',
    icon: '',
    examples: ['Consultores Independientes', 'Freelancers', 'Artesanos', 'Profesionistas'],
  },
  {
    name: 'Productos Generales',
    icon: '',
    examples: ['Walmart', 'Soriana', 'Chedraui', 'La Comer'],
  },
  { name: 'Redes Sociales', icon: '', examples: ['Facebook', 'Instagram', 'Twitter', 'TikTok'] },
  {
    name: 'Religión',
    icon: '',
    examples: [
      'Arquidiócesis de México',
      'Iglesia Cristiana',
      'Sinagoga Histórica',
      'Mezquita Tarek Ibn Ziyad',
    ],
  },
  { name: 'Ropa, Calzado y Zapatos', icon: '', examples: ['Zara', 'H&M', 'Liverpool', 'Suburbia'] },
  {
    name: 'Salud',
    icon: '',
    examples: ['Hospital Ángeles', 'Médica Sur', 'ABC Medical Center', 'Star Médica'],
  },
  {
    name: 'Salud y Belleza Estética',
    icon: '',
    examples: ['Belcolade', 'Dermatológicos MD', 'Clínicas de Belleza', 'HairX'],
  },
  { name: 'Servicios', icon: '', examples: ['Uber', 'Didi', 'Rappi', 'Airbnb'] },
  {
    name: 'Servicios de Streaming',
    icon: '',
    examples: ['Netflix', 'Disney+', 'Spotify', 'Amazon Prime Video'],
  },
  { name: 'Software', icon: '', examples: ['Microsoft', 'Adobe', 'Autodesk', 'SAP'] },
  {
    name: 'Supermercados y Autoservicios',
    icon: '',
    examples: ['Walmart', 'Soriana', 'Chedraui', 'Superama'],
  },
  { name: 'Tecnología', icon: '', examples: ['Apple', 'Samsung', 'HP', 'Dell'] },
  { name: 'Telecomunicaciones', icon: '', examples: ['Telmex', 'Movistar', 'AT&T', 'Unefon'] },
  {
    name: 'Tiendas Departamentales',
    icon: '',
    examples: ['Liverpool', 'Palacio de Hierro', 'Sears', 'Suburbia'],
  },
  {
    name: 'Todo para bebé',
    icon: '',
    examples: ["Baby's Room", 'Bebé Store', 'Kids Corner', 'Toys', 'R', ' Us Bebé'],
  },
  { name: 'Transportes', icon: '', examples: ['ADO', 'ETN', 'Omnibus de México', 'Volaris'] },
  { name: 'Turismo', icon: '', examples: ['Cancún Travel', 'Best Day', 'Despegar', 'Kayak'] },
  {
    name: 'Veterinaria y Zootecnia',
    icon: '',
    examples: ['Hospital Veterinario UNAM', 'Mascotitas', 'Petco', 'Veterinaria San Francisco'],
  },
]

const fullCategories = [
  {
    name: 'Abarrotes y Bebidas',
    icon: 'fa-shopping-basket',
    examples: ['La Europea', 'Super Salados', 'Bodega Aurrerá Express', 'Tiendas 3B'],
  },
  {
    name: 'Vinos o Vinaterías',
    icon: 'fa-wine-bottle',
    examples: ['La Vinoteca', 'Vinos Sin-Fronteras', 'Bodegas de Santo Tomás', 'Casa Madero'],
  },
  {
    name: 'Cerveza o Cervecerías',
    icon: 'fa-beer',
    examples: ['Cervecería Minerva', 'Cucapá', 'Tempranillo', 'Insurgente'],
  },
  {
    name: 'Leche y/o Sustitutos',
    icon: 'gi-milk-carton',
    examples: ['Lala', 'Alpura', 'Nestlé', 'Santa Clara'],
  },
  {
    name: 'Alimentos',
    icon: 'fa-bread-slice',
    examples: ['Bimbo', 'Gamesa', 'Sabritas', 'Marinela'],
  },
  { name: 'Aseguradoras', icon: 'fa-shield-alt', examples: ['GNP', 'AXA', 'MetLife', 'Zurich'] },
  {
    name: 'Automotriz',
    icon: 'fa-car',
    examples: ['Toyota', 'Nissan', 'Volkswagen', 'General Motors'],
  },
  { name: 'Bancos', icon: 'bi-bank2', examples: ['Banamex', 'BBVA', 'Santander', 'HSBC'] },
  {
    name: 'Banquetes',
    icon: 'fa-utensils',
    examples: ['Salones García', 'Banquetes El Globo', 'Salones Fiesta', 'Banquetes Laredo'],
  },
  {
    name: 'Beneficencias y Fundaciones',
    icon: 'fa-heart',
    examples: ['UNICEF México', 'Cruz Roja Mexicana', 'Teletón', 'Fondo UNO'],
  },
  { name: 'Combustibles', icon: 'fa-gas-pump', examples: ['Pemex', 'BP', 'Shell', 'Gulf'] },
  {
    name: 'Comida y Restaurantes',
    icon: 'fa-utensils',
    examples: ['Sanborns', 'Vips', 'Toks', "Applebee's"],
  },
  {
    name: 'Construcción y/o constructoras',
    icon: 'md-build-sharp',
    examples: ['Cemex', 'Home Depot', 'Comex', 'Grupo Lamosa'],
  },
  {
    name: 'Consumibles',
    icon: 'fa-soap',
    examples: ['Scotch-Brite', 'Cloralex', 'Fábrica de Jabón La Corona', 'Kimberly-Clark'],
  },
  {
    name: 'Deportes',
    icon: 'fa-futbol',
    examples: ['Sport City', 'Martí', 'Decathlon', 'Nike Store'],
  },
  {
    name: 'Educación',
    icon: 'fa-graduation-cap',
    examples: ['UNAM', 'Tec de Monterrey', 'UVM', 'UNITEC'],
  },
  {
    name: 'Electrónicos',
    icon: 'gi-electrical-resistance',
    examples: ['Liverpool Electrónicos', 'Best Buy', 'Sams Club', 'Coppel'],
  },
  {
    name: 'Energías Limpias',
    icon: 'fa-leaf',
    examples: ['Iberdrola', 'Enel Green Power', 'Acciona Energía', 'Engie'],
  },
  {
    name: 'Eventos',
    icon: 'fa-ticket-alt',
    examples: ['Ticketmaster', 'Boletia', 'Superboletos', 'Eticket'],
  },
  {
    name: 'Farmacéutico',
    icon: 'fa-pills',
    examples: [
      'Farmacias del Ahorro',
      'Farmacias Benavides',
      'Farmacias Similares',
      'Farmacias Guadalajara',
    ],
  },
  {
    name: 'Ferretería, llantas y automotriz',
    icon: 'la-tools-solid',
    examples: ['Home Depot', 'Lumen', 'Toks Ferretería', 'Llanticas'],
  },
  { name: 'Gobierno', icon: 'fa-landmark', examples: ['IMSS', 'INFONAVIT', 'SAT', 'SEP'] },
  {
    name: 'Hospedaje',
    icon: 'fa-bed',
    examples: ['Hoteles City Express', 'Fiesta Americana', 'Marriott', 'NH Collection'],
  },
  {
    name: 'Joyería y Relojes',
    icon: 'fa-gem',
    examples: ['Toussaint', 'Pandora', 'Swatch', 'Rolex'],
  },
  {
    name: 'Juguetes',
    icon: 'fa-gamepad',
    examples: ['Toys', 'Lego Store', 'KidZania', 'Juguetibici'],
  },
  {
    name: 'Tiendas en Línea',
    icon: 'fa-shopping-cart',
    examples: ['Mercado Libre', 'Amazon México', 'Linio', 'Liverpool en Línea'],
  },
  {
    name: 'Membresías',
    icon: 'fa-id-card',
    examples: ['Costco', "Sam's Club", 'Smart Fit', 'Cinépolis'],
  },
  {
    name: 'Papelería',
    icon: 'fa-sticky-note',
    examples: ['Office Depot', 'Office Max', 'Lumen', 'Plaza Papelera'],
  },
  {
    name: 'Paquetería y Correos',
    icon: 'fa-truck',
    examples: ['FedEx', 'DHL', 'Estafeta', 'Correos de México'],
  },
  {
    name: 'Persona Física',
    icon: 'fa-user',
    examples: ['Consultores Independientes', 'Freelancers', 'Artesanos', 'Profesionistas'],
  },
  {
    name: 'Productos Generales',
    icon: 'fa-box-open',
    examples: ['Walmart', 'Soriana', 'Chedraui', 'La Comer'],
  },
  {
    name: 'Redes Sociales',
    icon: 'io-share-social-sharp',
    examples: ['Facebook', 'Instagram', 'Twitter', 'TikTok'],
  },
  {
    name: 'Religión',
    icon: 'fa-church',
    examples: [
      'Arquidiócesis de México',
      'Iglesia Cristiana',
      'Sinagoga Histórica',
      'Mezquita Tarek Ibn Ziyad',
    ],
  },
  {
    name: 'Ropa, Calzado y Zapatos',
    icon: 'gi-clothes',
    examples: ['Zara', 'H&M', 'Liverpool', 'Suburbia'],
  },
  {
    name: 'Salud',
    icon: 'fa-hospital',
    examples: ['Hospital Ángeles', 'Médica Sur', 'ABC Medical Center', 'Star Médica'],
  },
  {
    name: 'Salud y Belleza Estética',
    icon: 'fa-spa',
    examples: ['Belcolade', 'Dermatológicos MD', 'Clínicas de Belleza', 'HairX'],
  },
  { name: 'Servicios', icon: 'fa-concierge-bell', examples: ['Uber', 'Didi', 'Rappi', 'Airbnb'] },
  {
    name: 'Servicios de Streaming',
    icon: 'fa-film',
    examples: ['Netflix', 'Disney+', 'Spotify', 'Amazon Prime Video'],
  },
  { name: 'Software', icon: 'fa-code', examples: ['Microsoft', 'Adobe', 'Autodesk', 'SAP'] },
  {
    name: 'Supermercados y Autoservicios',
    icon: 'fa-cart-plus',
    examples: ['Walmart', 'Soriana', 'Chedraui', 'Superama'],
  },
  { name: 'Tecnología', icon: 'fa-microchip', examples: ['Apple', 'Samsung', 'HP', 'Dell'] },
  {
    name: 'Telecomunicaciones',
    icon: 'fa-phone-alt',
    examples: ['Telmex', 'Movistar', 'AT&T', 'Unefon'],
  },
  {
    name: 'Tiendas Departamentales',
    icon: 'fa-store',
    examples: ['Liverpool', 'Palacio de Hierro', 'Sears', 'Suburbia'],
  },
  {
    name: 'Todo para bebé',
    icon: 'fa-baby',
    examples: ["Baby's Room", 'Bebé Store', 'Kids Corner', 'Toys R Us Bebé'],
  },
  { name: 'Transportes', icon: 'fa-bus', examples: ['ADO', 'ETN', 'Omnibus de México', 'Volaris'] },
  {
    name: 'Turismo',
    icon: 'md-travelexplore-sharp',
    examples: ['Cancún Travel', 'Best Day', 'Despegar', 'Kayak'],
  },
  {
    name: 'Veterinaria y Zootecnia',
    icon: 'io-paw-sharp',
    examples: ['Hospital Veterinario UNAM', 'Mascotitas', 'Petco', 'Veterinaria San Francisco'],
  },
  {
    name: 'Otro',
    icon: '',
    examples: ['Hospital Veterinario UNAM', 'Mascotitas', 'Petco', 'Veterinaria San Francisco'],
  },
]

onMounted(() => {
  console.log(route.params.category)
})
</script>

<style scoped>
.bgCustom {
  background-color: #f4f9fe;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233e5675' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
