To-Do App — Base de Datos Local Simulada
Descripción General

Esta es una aplicación web simple desarrollada con HTML, CSS y JavaScript.
Permite gestionar tareas utilizando una base de datos simulada en memoria mediante un arreglo JavaScript.

Incluye funciones de:

Crear tareas

Editar tareas

Eliminar tareas con confirmación

Marcar tareas como completadas

Renderizado dinámico

Validaciones con SweetAlert2

Tecnologías Utilizadas

HTML5

CSS3

JavaScript ES6+

SweetAlert2

Google Fonts (Poppins)

Estructura del Proyecto
/
│── index.html
│
│── css/
│ └── style.css
│
└── js/
└── script.js

Funcionalidades
Agregar Tareas

Se valida que el campo no esté vacío antes de agregar una nueva tarea.

Marcar como Completada

Las tareas pueden cambiar su estado utilizando el método map para mantener la inmutabilidad.

Editar Tareas

Se permite modificar el texto de una tarea mediante prompt y validaciones.

Eliminar Tareas

La tarea se elimina del arreglo utilizando filter.
Incluye una alerta de confirmación mediante SweetAlert2.

Renderizado Dinámico

Cada modificación en los datos ejecuta la función renderTasks, que actualiza el DOM.

Arquitectura de Datos

Cada tarea se almacena con la siguiente estructura:

{
id: Date.now(),
text: "Descripción de la tarea",
done: false
}

La aplicación usa:

Inmutabilidad mediante map y filter

Spread operator para agregar elementos

Funciones puras para manipulación de datos

Instalación y Uso

No requiere dependencias ni configuraciones adicionales.

Descargar o clonar el proyecto.

Mantener la estructura de carpetas.

Abrir el archivo index.html en cualquier navegador moderno.

Mejoras Futuras

Persistencia mediante LocalStorage

Uso de IndexedDB

Conexión a un backend real

Interfaz mejorada con frameworks (React, Vue)

Agregar categorías, prioridades o fechas límite

Licencia

Este proyecto se distribuye bajo la licencia MIT.
