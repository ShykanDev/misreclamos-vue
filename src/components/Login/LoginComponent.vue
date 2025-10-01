<template>

  <div class="flex justify-center items-center p-4 min-h-screen bg-gradient-to-br from-pink-50 to-red-50 login_bg">
    <div class="p-10 space-y-6 w-full max-w-5xl bg-white rounded-2xl shadow-2xl">
      <!-- Título -->
      <h2 class="text-3xl font-bold text-center text-pink-600">Iniciar Sesión</h2>

      <!-- Formulario -->
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Campo de Email -->
        <div>
          <label for="email" class="block mb-1 text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="px-4 py-3 w-full rounded-xl border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="ejemplo@correo.com"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="mt-2 text-sm text-red-500">
            {{ errors.email }}
          </p>
        </div>

        <!-- Campo de Contraseña -->
        <div>
          <label for="password" class="block mb-1 text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="px-4 py-3 w-full rounded-xl border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="••••••••"
            :class="{ 'border-red-500': errors.password }"
          />
          <p v-if="errors.password" class="mt-2 text-sm text-red-500">
            {{ errors.password }}
          </p>
        </div>

        <!-- Botón de Login -->
        <button
          type="submit"
          class="px-4 py-3 w-full font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-xl transition-all hover:from-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-300"
        >
          Iniciar Sesión
        </button>

        <div>
          <p class="text-center">Si es usted nuevo <Router-Link to="/register" class="font-bold text-pink-600">Registrese ahora</Router-Link></p>
        </div>
      </form>
      <div v-if="showVerifyEmail"
    class="flex fixed inset-0 z-40 flex-col justify-center items-center p-4 bg-black/50"
  >
    <!-- Card principal -->
    <div
      class="relative p-8 mt-16 space-y-6 w-full max-w-4xl bg-white rounded-2xl border-2 border-yellow-300 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
    <button @click="showVerifyEmail = false" class="absolute top-4 right-4 px-2 py-1 font-bold text-pink-600 rounded-full border border-pink-600 border-dashed cursor-pointer hover:bg-pink-600 hover:text-white">Cerrar</button>
      <!-- Icono de advertencia -->
      <div class="flex justify-center items-center mx-auto w-16 h-16 bg-yellow-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <!-- Título -->
      <h2 class="text-2xl font-bold text-center text-gray-800">
        Verificación de correo pendiente
      </h2>

      <!-- Mensaje principal -->
      <p class="text-center text-gray-600">
        Para completar su registro, necesita verificar su dirección de correo electrónico.
      </p>

      <!-- Instrucciones -->
      <div class="p-4 mt-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-center text-blue-700">
          <strong>1.</strong> Revise su bandeja de entrada (o spam) en <strong>{{ email }}</strong>.<br>
          <strong>2.</strong> Busque el correo de verificación enviado por nuestro sistema.<br>
          <strong>3.</strong> Haga clic en el enlace de verificación.<br>
          <strong>4.</strong> ¡Listo! Su cuenta se validará automáticamente.
        </p>
      </div>

      <!-- Disclaimer de seguridad -->
      <div class="p-3 mt-4 text-xs text-center text-gray-500 bg-rose-50 rounded-lg">
        <p class="">
          <strong class="text-rose-600">Nota de seguridad:</strong><br>
          Este proceso es obligatorio para proteger su cuenta y garantizar que solo usted tenga acceso.
          Nunca comparta su enlace de verificación con terceros.
        </p>
      </div>

      <!-- Botón de reenviar correo (opcional) -->
    </div>
  </div>

  <article class="flex flex-col justify-center items-center w-full">
    <p class="text-sm text-center text-gray-500">¿Olvidó su contraseña?</p>
    <button @click="toggleResetPassword" class="px-4 py-2 mx-auto mt-2 font-bold text-pink-700 rounded-xl border-2 border-dashed transition-all cursor-pointer w-sm hover:from-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-300">{{ (showResetPassword) ? 'Cancelar' : 'Restablecer Contraseña' }}</button>
  </article>
  <!--Reset Password
  -->
  <section v-if="showResetPassword" class="flex flex-col justify-center items-center p-4 bg-red-50 rounded-xl">
    <h4>Restablecer Contraseña</h4>
    <p>Por favor, ingrese su correo electrónico y le enviaremos un enlace para restablecer su contraseña.</p>
    <form @submit.prevent="handleResetPassword">
      <input v-model="email" class="px-4 py-2 w-full rounded-xl border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500" type="email" placeholder="Correo electrónico">
      <button class="px-4 py-2 mt-2 w-full font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-xl transition-all hover:from-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-300" type="submit">Enviar</button>
    </form>
  </section>

    </div>
  </div>


</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail   } from 'firebase/auth';

import 'notyf/notyf.min.css';
import { Notyf } from 'notyf';
import { useLogginStore } from '@/stores/loggin';
import { useRouter } from 'vue-router';
const router = useRouter();
const showResetPassword = ref(false);

const toggleResetPassword = () => {
  showResetPassword.value = !showResetPassword.value;
}


const notyf = new Notyf ({
  position: {
    x: 'center',
    y: 'center'
  },
  duration: 6000,
  dismissible: true,
});
    // Estado del formulario
    const email = ref('');
    const password = ref('');
    const errors = ref<{ email?: string; password?: string }>({});
    const isUserEmailVerified = ref(false);
    const showVerifyEmail = ref(false);
    // Validación de errores
    const validateForm = () => {
      errors.value = {};
      let isValid = true;

      if (!email.value) {
        errors.value.email = 'El correo electrónico es obligatorio.';
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errors.value.email = 'Ingresa un correo electrónico válido.';
        isValid = false;
      }

      if (!password.value) {
        errors.value.password = 'La contraseña es obligatoria.';
        isValid = false;
      } else if (password.value.length < 6) {
        errors.value.password = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
      }

      return isValid;
    };


    const auth = getAuth();
    // Manejo del login
    const handleLogin = () => {
      if (validateForm()) {
          signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;
            isUserEmailVerified.value = user.emailVerified;
            if (!isUserEmailVerified.value) {
              showVerifyEmail.value = true;
            }
            useLogginStore().setUserEmailVerified(user.emailVerified);
            useLogginStore().setUserLoggedIn(true);
            notyf.success(`Le damos la bienvenida ${user.displayName}`);
            console.log(user)
            router.push('/');
          })

          .catch((error) => {
            const errorCode = error.code;
            notyf.error(`Error al iniciar sesión, error: ${errorCode}`);
            console.log(`ErrorCode: ${errorCode}`);
          });
      } else {
        console.log('Formulario inválido');
        notyf.error('Formulario inválido');
      }
    };

    const handleResetPassword = async() => {
      try {
          await sendPasswordResetEmail(auth, email.value);
          console.log('Correo enviado');
      } catch (error) {
          console.log(error);
          notyf.error(`Error al enviar correo, error: ${error}`);
          }
    }

</script>

<style scoped>
.login_bg {
  background-color: #fef8ff;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e200ff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
