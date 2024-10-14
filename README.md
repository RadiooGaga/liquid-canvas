# PROYECTO 11 - REACT BASICS - VITE

# ADAPTACION

# Proyecto 12 - REACT ADVANCED - VITE
Este proyecto está basado en el proyecto 11 de react basics, con implementación de nuevos hooks 
para la optimización del código, como:

 
- El useRef, que he utilizado para que se guarde la referencia de los datos y almacenarlos en caché
  en las peticiones a la API, para así no volver a cargar los datos si ya estaban recuperados.

- React.memo para memorizar componentes que reciben drink o drinks como props, con el objetivo de evitar su re-renderizado innecesario. Esto contribuye a mejorar el rendimiento de la aplicación.

- useReducer; he implementado este hook para gestionar de manera más eficiente los estados comunes relacionados con las llamadas a la API. Esto proporciona una estructura más clara y escalable para manejar los diferentes estados (carga, éxito, error...) de las solicitudes.

- También, un custom hook que permite filtrar las búsquedas basadas en cada query y su método de búsqueda. Este hook encapsula la lógica de recuperación y filtrado de datos para simplificar su uso en los componentes.

