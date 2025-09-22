<template>
  <div class="flex justify-center items-start register">
    <div class="w-full">
      <!-- Card del formulario -->
      <section v-if="isLoading"
        class="flex fixed inset-0 z-40 justify-center items-center p-4 w-full min-h-screen bg-black/60">
        <LoaderA class=""></LoaderA>
      </section>

      <div class="flex justify-center items-center p-4 min-h-screen">
        <div class="p-8 w-full bg-white rounded-3xl border border-pink-600 border-dotted shadow-2xl">
          <!-- Header con efecto de degradado y borde sutil -->
          <div class="mb-8 text-center">
            <h2
              class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
              Cree su cuenta
            </h2>
            <p class="mt-2 text-gray-500 text-md">
              Unase y disfrute de todos los beneficios
            </p>
          </div>

          <!-- Formulario con inputs mejorados -->
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <!-- Campo: Nombre -->
            <div class="space-y-1">
              <label for="name" class="block font-medium text-pink-600 text-md">
                <v-icon name="md-textrotationnone-round" class="text-pink-600"></v-icon>
                Nombre completo
              </label>
              <input v-model="form.name" type="text" id="name"
                class="px-5 py-3 w-full placeholder-gray-400 rounded-xl border border-gray-200 transition-all duration-300 outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-200"
                placeholder="Ej: Juan Pérez" required />
            </div>

            <!-- Campo: Email -->
            <div class="space-y-1">
              <label for="email" class="block font-medium text-pink-600 text-md">
                <v-icon name="md-alternateemail-outlined" class="text-pink-600"></v-icon>
                Correo electrónico
              </label>
              <input v-model="form.email" type="email" id="email"
                class="px-5 py-3 w-full placeholder-gray-400 rounded-xl border border-gray-200 transition-all duration-300 outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-200"
                placeholder="Ej: juan@example.com" required />
            </div>

            <!-- Campo: Contraseña -->
            <div class="space-y-1">
              <label for="password" class="block font-medium text-pink-600 text-md">
                Contraseña
              </label>
              <input v-model="form.password" type="password" id="password"
                class="px-5 py-3 w-full placeholder-gray-400 rounded-xl border border-gray-200 transition-all duration-300 outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-200"
                placeholder="••••••••" required />
            </div>

            <!-- Campo: Confirmar Contraseña -->
            <div class="space-y-1">
              <label for="confirmPassword" class="block font-medium text-pink-600 text-md">
                Confirmar contraseña
              </label>
              <input v-model="form.confirmPassword" type="password" id="confirmPassword"
                class="px-5 py-3 w-full placeholder-gray-400 rounded-xl border border-gray-200 transition-all duration-300 outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-200"
                placeholder="••••••••" required />
            </div>

            <!-- Botón de enviar con efecto hover y gradiente -->
            <button type="submit"
              class="w-full py-3.5 mt-4 text-white font-bold bg-gradient-to-r from-rose-600 to-purple-600 rounded-xl shadow-lg hover:from-rose-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2">
              Registrarse
            </button>
          </form>
          <ResetPassword v-if="showReset"  @callClose="closeModal"  />

          <!-- Enlace a Login con estilo moderno -->
          <div class="mt-6 text-center">
            <p class="mb-1.5" @click="openModal">¿Olvidó su contraseña?</p>
            <p class="text-gray-500 text-md">
              ¿Ya tienes cuenta?

              <router-link to="/login"
                class="font-medium text-rose-600 transition-colors duration-200 hover:text-rose-700">
                Inicia sesión
              </router-link>
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateCurrentUser, updateProfile } from 'firebase/auth';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import LoaderA from '@/animations/Loaders/LoaderA.vue';
import ResetPassword from '@/modals/Register/ResetPassword.vue';

// Create an instance of Notyf
const notyf = new Notyf({
  position: { x: 'right', y: 'top' },
});


interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const form = ref<FormData>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const isLoading = ref(false);

const auth = getAuth();

const userName = ref('Alejandro');
const success = ref(false);

const emmits = defineEmits(['callToggle']);


const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.password || !form.value.confirmPassword) {
    notyf.error('Todos los campos son obligatorios');
    return;
  }
  if (form.value.password !== form.value.confirmPassword) {
    notyf.error('Las contraseñas no coinciden');
    return;
  }
  else {
    try {
      isLoading.value = true;
      const userCredential = await createUserWithEmailAndPassword(auth, form.value.email, form.value.password);
      await updateProfile(userCredential.user, { displayName: form.value.name })
      await sendEmailVerification(userCredential.user);
      userName.value = form.value.name;
      isLoading.value = false;
      success.value = true;
      emmits('callToggle', userName.value);
    } catch (error) {
      console.log(error);
      notyf.error('Ocurrió un error al registrar el usuario, intentelo de nuevo y verifique sus datos');
      isLoading.value = false;
    }
  }
};

const showReset = ref(false);

const closeModal = ()=>{
  showReset.value = false;
}

const openModal = () => {
  showReset.value = true;
}
</script>

<style scoped>
.register {
  background-color: #fef8ff;
}

.register {
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23c9299c' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")
}

;
</style>
