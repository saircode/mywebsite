<script setup lang="ts">
const experiences = [
  {
    company: 'Shockdav',
    position: 'Desarrollador Web Full Stack',
    type: 'Jornada completa',
    location: 'Remoto (Alberta, Canadá)',
    period: 'jul. 2022 – actualidad',
    current: true,
    description: [
      'Desarrollo y mantenimiento de una aplicación web utilizando Vue.js en el frontend y Python en el backend.',
      'Implementación de mejoras de rendimiento y optimización de funcionalidades existentes, enfocadas en escalabilidad y mantenibilidad del sistema.',
      'Colaboración activa con equipos remotos para la entrega continua de nuevas funcionalidades y correcciones.',
      'Enfoque constante en la experiencia de usuario, mejorando flujos, tiempos de respuesta y estabilidad general de la aplicación.',
      'Participación en la toma de decisiones técnicas y refactorización de componentes críticos.'
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS']
  },
  {
    company: 'InnovaaTech',
    position: 'Desarrollador Web Full Stack',
    type: 'Jornada completa',
    location: 'Híbrido (Medellín, Colombia)',
    period: 'oct. 2021 – feb. 2023',
    current: false,
    description: [
      'Participación en la implementación de una plataforma de software a medida para una empresa del sector inmobiliario.',
      'Desarrollo de funcionalidades clave que soportaban procesos centrales del negocio.',
      'Integración de soluciones tecnológicas alineadas con objetivos de transformación digital.',
      'Trabajo bajo metodologías ágiles (SCRUM), participando en sprints, planificación y retrospectivas.',
      'Fortalecimiento de buenas prácticas de desarrollo, trabajo en equipo y comunicación técnica.'
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'SCRUM']
  },
  {
    company: 'Array TIC S.A.S',
    position: 'Desarrollador Web Full Stack',
    type: 'Jornada completa',
    location: 'Colombia',
    period: 'mar. 2018 – may. 2021',
    current: false,
    description: [
      'Desarrollo backend personalizado utilizando PHP y Laravel para múltiples proyectos.',
      'Diseño e implementación de API REST y lógica de negocio para distintos sectores, incluyendo salud, gobierno y educación.',
      'Trabajo con bases de datos MySQL y SQL Server, optimizando consultas y estructuras de datos.',
      'Desarrollo frontend con Vue.js e integración con servicios backend.',
      'Experiencia en entornos Linux, control de versiones con Git, despliegues y manejo de infraestructura en AWS y GCP.',
      'Participación en procesos de despliegue continuo y mantenimiento de aplicaciones en producción.'
    ],
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'SQL Server', 'AWS', 'GCP']
  }
]

const education = [
  {
    title: 'Licenciado en Informática y Medios Audiovisuales',
    institution: 'Universidad de Córdoba',
    period: '2013 – 2018',
    description: 'Gracias a mi formación, en todos los lugares donde he trabajado, me he destacado por mi enfoque integral, liderando equipos y compartiendo mis conocimientos.'
  }
]

const achievements = [
  {
    title: 'Fondo Emprender SENA',
    year: '2020',
    description: 'Gané la convocatoria del Fondo Emprender del SENA, lo cual ha sido fundamental para mi desarrollo en el ámbito del emprendimiento empresarial. Actualmente, soy el fundador y CEO de mi propia empresa.'
  }
]

const skills = {
  frontend: ['Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  backend: ['Python', 'PHP', 'Laravel', 'Node.js', 'REST APIs'],
  database: ['MySQL', 'PostgreSQL', 'SQL Server', 'Redis'],
  devops: ['Git', 'Docker', 'AWS', 'GCP', 'Linux', 'CI/CD']
}
</script>

<template>
  <div class="py-20">
    <!-- Header -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="text-center">
        <h1 class="section-title mb-4">Experiencia</h1>
        <p class="section-subtitle max-w-2xl mx-auto">
          +6 años de experiencia desarrollando soluciones tecnológicas para empresas en diferentes países y sectores.
        </p>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <span class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        Experiencia Profesional
      </h2>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>

        <div class="space-y-12">
          <article
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative pl-8 md:pl-20"
          >
            <!-- Timeline dot -->
            <div :class="[
              'absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-950',
              exp.current ? 'bg-green-500' : 'bg-primary-600'
            ]"></div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.position }}</h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">{{ exp.company }}</p>
                </div>
                <div class="text-right">
                  <div class="flex items-center gap-2">
                    <span v-if="exp.current" class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                      Actual
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ exp.period }}</span>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ exp.location }}</p>
                </div>
              </div>

              <ul class="space-y-2 mb-4">
                <li
                  v-for="(item, i) in exp.description"
                  :key="i"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                >
                  <svg class="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ item }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in exp.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <span class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </span>
        Formación Académica
      </h2>

      <div class="space-y-6">
        <article
          v-for="(edu, index) in education"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div class="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ edu.title }}</h3>
              <p class="text-primary-600 dark:text-primary-400 font-medium">{{ edu.institution }}</p>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ edu.period }}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400">{{ edu.description }}</p>
        </article>
      </div>
    </section>

    <!-- Achievements -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <span class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </span>
        Logros y Reconocimientos
      </h2>

      <div class="space-y-6">
        <article
          v-for="(achievement, index) in achievements"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div class="flex flex-wrap items-start justify-between gap-4 mb-3">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ achievement.title }}</h3>
            <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
              {{ achievement.year }}
            </span>
          </div>
          <p class="text-gray-600 dark:text-gray-400">{{ achievement.description }}</p>
        </article>
      </div>
    </section>

    <!-- Skills -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <span class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </span>
        Tecnologías
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Frontend -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in skills.frontend"
              :key="skill"
              class="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-lg border border-primary-200 dark:border-primary-800"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Backend -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in skills.backend"
              :key="skill"
              class="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-lg border border-primary-200 dark:border-primary-800"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Database -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Bases de Datos</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in skills.database"
              :key="skill"
              class="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-lg border border-primary-200 dark:border-primary-800"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- DevOps -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">DevOps & Herramientas</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in skills.devops"
              :key="skill"
              class="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-lg border border-primary-200 dark:border-primary-800"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Download CV -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">¿Necesitas una versión descargable?</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">Descarga mi CV en formato PDF para tenerlo a la mano.</p>
        <a
          href="/cv-sair-sanchez.pdf"
          download
          class="btn-primary"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar CV
        </a>
      </div>
    </section>
  </div>
</template>
