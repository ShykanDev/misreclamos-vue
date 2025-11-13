<template>
  <MainLayout>
    <template #main>
      <section class="flex justify-center items-center p-4 min-h-screen bg-gray-50">
        <div
          class="p-8 w-full bg-white rounded-xl border border-b-4 border-l-2 border-blue-600 shadow-md max-w9xl md:p-10">
          <header class="mb-8 text-center">
            <div class="flex justify-center mb-4">
              <v-icon name="fa-shield-alt" class="text-5xl text-blue-600" />
            </div>
            <h1 class="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">Política de Privacidad</h1>
            <p class="text-sm text-gray-500">Última actualización: 8 de octubre de 2025</p>
          </header>

          <main class="space-y-8 text-gray-700">
            <!-- Introducción -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-info-circle" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Introducción</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  En nuestro sitio web, entendemos que la privacidad y la protección de los datos personales de nuestros
                  usuarios no son solo una obligación legal, sino un compromiso ético fundamental. Nos esforzamos
                  diariamente por tratar toda la información que nos confías con la máxima responsabilidad,
                  transparencia y seguridad. Cada dato que recopilamos es utilizado exclusivamente para los fines que se
                  detallan en este documento, garantizando siempre que su manejo se realice bajo los más altos
                  estándares de confidencialidad y respeto.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Nuestra política de privacidad ha sido diseñada para informarte de manera clara y accesible sobre
                  cómo, cuándo y por qué procesamos tus datos personales. Queremos que te sientas seguro y en control de
                  tu información, por lo que te invitamos a leer detenidamente cada sección para entender plenamente tus
                  derechos y nuestras prácticas.
                </p>
              </div>
            </section>

            <!-- Datos que se recopilan -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-user-shield" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Datos que se recopilan</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  Para ofrecerte nuestros servicios de manera eficiente y personalizada, solo solicitamos y almacenamos
                  los datos esenciales necesarios para el registro y la autenticación de usuarios. Actualmente, estos
                  datos se limitan a tu <strong>correo electrónico</strong> y tu <strong>contraseña</strong>, los cuales
                  son indispensables para crear y gestionar tu cuenta dentro de la plataforma.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Es importante destacar que no recopilamos ni almacenamos información adicional sin tu consentimiento
                  explícito. Cada dato que nos proporcionas es tratado con el mayor cuidado, y nunca solicitamos
                  información sensible o innecesaria que pueda comprometer tu privacidad o seguridad.
                </p>
              </div>
            </section>

            <!-- Seguridad y encriptación -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-lock" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Seguridad y encriptación</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  La seguridad de tus datos es una de nuestras principales prioridades. Para proteger tu información,
                  implementamos medidas de seguridad robustas y actualizadas, que incluyen el cifrado de contraseñas
                  mediante algoritmos modernos y seguros. Además, toda la comunicación entre tu dispositivo y nuestros
                  servidores se realiza a través del protocolo <strong>HTTPS (SSL)</strong>, lo que garantiza que tus
                  datos viajen de manera encriptada y protegida contra accesos no autorizados.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Nuestro sistema cumple con estándares internacionales de seguridad y privacidad, y realizamos
                  auditorías periódicas para asegurar que todas las medidas de protección estén funcionando
                  correctamente. Esto nos permite ofrecerte un entorno seguro y confiable en todo momento.
                </p>
              </div>
            </section>

            <!-- Uso de la información -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-user-cog" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Uso de la información</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  Los datos que recopilamos son utilizados de manera exclusiva para los siguientes propósitos, siempre
                  con el objetivo de mejorar tu experiencia y garantizar el correcto funcionamiento de la plataforma:
                </p>
                <ul class="pl-6 mt-3 space-y-2 leading-relaxed list-disc">
                  <li>
                    <strong>Crear y gestionar tu cuenta de usuario:</strong> Tus datos nos permiten generar y mantener
                    tu perfil dentro de la aplicación, asegurando que puedas acceder a todos los servicios disponibles
                    de manera personalizada.
                  </li>
                  <li>
                    <strong>Autenticar tu identidad al iniciar sesión:</strong> Utilizamos tu correo electrónico y
                    contraseña para verificar tu identidad cada vez que accedes a la plataforma, protegiendo así tu
                    cuenta contra accesos no autorizados.
                  </li>
                  <li>
                    <strong>Mejorar la experiencia dentro de la plataforma:</strong> Analizamos el uso de la aplicación
                    de manera agregada y anónima para identificar áreas de mejora y ofrecerte un servicio más intuitivo
                    y eficiente.
                  </li>
                </ul>
              </div>
            </section>

            <!-- Gestión de tu información personal -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-envelope" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Gestión de tu información personal</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  En nuestra aplicación, creemos firmemente que tú debes tener el control total sobre tu información
                  personal. Por ello, te ofrecemos la posibilidad de eliminar tu cuenta en cualquier momento
                  directamente desde la sección de <strong>configuración</strong>, un proceso sencillo y transparente
                  que garantiza la eliminación permanente de tus datos de nuestros sistemas.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Si en algún momento deseas actualizar tu correo electrónico, nombre u otra información personal,
                  puedes hacerlo fácilmente desde tu perfil. También puedes ponerte en contacto con nuestro equipo a
                  través de <a href="mailto:informes@prasadam.mx"
                    class="text-blue-600 hover:underline">informes@prasadam.mx</a> para solicitar
                  cualquier cambio o actualización en tus datos. Estamos aquí para ayudarte y asegurarnos de que tu
                  información siempre esté al día y sea precisa.
                </p>
              </div>
            </section>

            <!-- Análisis y métricas -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-chart-bar" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Análisis y métricas</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  Con el fin de optimizar constantemente nuestros servicios, utilizamos herramientas de análisis web que
                  nos permiten recopilar estadísticas anónimas sobre el uso de la plataforma. Estos datos, que en ningún
                  caso están vinculados a información personal identificable, nos ayudan a entender mejor cómo
                  interactúas con la aplicación y a identificar oportunidades para mejorar su funcionalidad y
                  rendimiento.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Las métricas que obtenemos son siempre agregadas y anónimas, lo que significa que no podemos
                  asociarlas con tu identidad ni con la de ningún usuario en particular. Nuestra única intención es
                  utilizar esta información para ofrecerte una experiencia cada vez más satisfactoria y adaptada a tus
                  necesidades.
                </p>
              </div>
            </section>

            <!-- Terceros -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-user-friends" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Compartir información con terceros</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  En nuestra aplicación, nos tomamos muy en serio la confidencialidad de tus datos personales. Por ello,
                  queremos dejar claro que <strong>no compartimos</strong> tu información con terceros, a menos que sea
                  estrictamente necesario para el funcionamiento técnico de la plataforma. En esos casos excepcionales,
                  nos aseguramos de que todos nuestros proveedores y colaboradores cumplan con los mismos estándares de
                  privacidad y seguridad que nosotros.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Cada vez que trabajamos con un tercero, establecemos acuerdos legales que garantizan la protección de
                  tus datos y limitan su uso exclusivamente a los fines acordados. Tu privacidad es nuestra prioridad, y
                  nunca vendemos ni compartimos tu información con fines publicitarios o comerciales.
                </p>
              </div>
            </section>

            <!-- Cambios en la política -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-file-contract" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Cambios en la política de privacidad</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  Esta política de privacidad puede ser actualizada periódicamente para reflejar cambios en nuestras
                  prácticas internas o en la normativa aplicable. Cada vez que realicemos una modificación,
                  actualizaremos la fecha de la última revisión al inicio del documento y, en caso de cambios
                  significativos, te notificaremos mediante los canales habituales de comunicación.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Te recomendamos revisar esta política de forma regular para mantenerte informado sobre cómo protegemos
                  tu información. Tu continua utilización de la plataforma después de cualquier cambio constituirá la
                  aceptación de la política actualizada.
                </p>
              </div>
            </section>

            <!-- Contacto -->
            <section class="flex space-x-4">
              <div class="hidden md:block">
                <v-icon name="fa-envelope" class="mt-1 text-2xl text-blue-500" />
              </div>
              <div class="flex-1">
                <h2 class="flex items-center mb-3 space-x-2 text-xl font-semibold text-gray-800">
                  <span>Contacto</span>
                </h2>
                <p class="leading-relaxed text-justify">
                  Si tienes alguna pregunta, inquietud o comentario sobre nuestra política de privacidad, no dudes en
                  ponerte en contacto con nosotros. Estamos disponibles para ayudarte y resolver cualquier duda que
                  puedas tener. Puedes escribirnos en cualquier momento a <a
                    href="mailto:informes@grupochimex.com"
                    class="text-blue-600 hover:underline">informes@grupochimex.com</a>, y nuestro
                  equipo responderá a la brevedad posible.
                </p>
                <p class="mt-3 leading-relaxed text-justify">
                  Valoramos tu confianza y estamos comprometidos a proteger tu privacidad en todo momento. Tu
                  satisfacción y seguridad son fundamentales para nosotros, y haremos todo lo posible para garantizar
                  que tu experiencia con nuestra aplicación sea positiva y libre de preocupaciones.
                </p>
              </div>
            </section>
          </main>

          <footer class="pt-6 mt-12 text-sm text-center text-gray-500 border-t border-gray-200">
            <p>© {{ new Date().getFullYear() }} misreclamos.com Todos los derechos reservados.</p>
          </footer>
        </div>
      </section>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
