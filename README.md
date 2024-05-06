# Despliegue de Aplicación Node.js con MongoDB en Docker

Este repositorio contiene los archivos necesarios para desplegar una aplicación Node.js junto con una base de datos MongoDB en un contenedor de Docker.

## Descripción

La aplicación Node.js proporciona una API para interactuar con la base de datos MongoDB. MongoDB es una base de datos NoSQL ampliamente utilizada en aplicaciones modernas debido a su flexibilidad y escalabilidad. Docker es una plataforma de contenedores que facilita el despliegue de aplicaciones en entornos aislados y portables.

Este proyecto combina Node.js, MongoDB y Docker para proporcionar una forma sencilla de desplegar una aplicación completa con persistencia de datos en cualquier máquina que ejecute Docker.

## Instrucciones de Uso

Este archivo contiene la configuración y la lógica para conectar y poblar la base de datos MongoDB.

1. Configuración:

 - Asegúrate de tener configurado el archivo `config.js` con los datos de conexión a la base de datos MongoDB.

2. Ejecución:

 - Este archivo se ejecuta automáticamente al iniciar la aplicación. Se conectará a la base de datos MongoDB y poblará la base de datos con datos de ejemplo si es necesario.


### Requisitos Previos

- Docker instalado en tu sistema. Puedes descargar Docker (aquí)[https://www.docker.com/products/docker-desktop/].

## Pasos para Desplegar la Aplicación Node.js con MongoDB en Docker

1. Clona este repositorio en tu máquina local:
```git clone https://github.com/tu_usuario/nombre_del_repositorio.git```

2. Instalar **node y mongodb** para hacer prueba en local
 
 - Pasos para instalar nvm para tener la versión de node como la de npm, (link)[https://medium.com/@diego.coder/instalar-nvm-node-version-manager-en-windows-80d6768fa183]
 -Pasos para instalar mongoDB, (link)[https://www.mongodb.com/docs/manual/installation/]


3. Instala las dependencias y prueba desplegando
``` npm install ```
``` npm run dev ```

4. Edita el archivo docker-compose.yml si deseas cambiar el nombre del contenedor, los puertos o cualquier otra configuración.

5. Ejecuta Docker Compose para iniciar los contenedores de Node.js y MongoDB:
``` docker-compose up -d ```
 
 - Para poder borrar los contenedores puedes hacerlo dentro de la app de docker o puede utilizar este comando:``` docker-compose down ```
 - Para ver la lista de contenedores: ```docker ps -a```

6. ¡Listo! Ahora tienes una aplicación Node.js desplegada en Docker que se conecta a una base de datos MongoDB. Puedes acceder a la aplicación en **http://localhost:puerto**, donde puerto es el puerto que especificaste en el archivo **docker-compose.yml**.

# Endpoints Disponibles

- **/api/students**: Gestiona operaciones CRUD sobre estudiantes.
- **/api/scores**: Gestiona operaciones CRUD sobre las notas de los estudiantes.

# Esquemas y Datos de Ejemplo

Este directorio contiene los esquemas de la base de datos y datos de ejemplo para estudiantes y notas.

## Estructura de Directorios

- `schema/`: Contiene los esquemas de la base de datos MongoDB.
- `data/`: Contiene datos de ejemplo para poblar la base de datos MongoDB.

# Licencia
Este proyecto está bajo la **Licencia MIT**.

Si te ha resultado útil este repositorio :wrench: recuerda que puedes ponerle una estrellita :star:
