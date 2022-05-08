# Kraken_Cypress_Ghost
Quinta semana de la materia Pruebas Automatizadas de Software, en la que se realizaran pruebas con las herramientas Kraken y Cypress, con el fin de conocer las ventajas y desventajas en su uso.
## Funcionalidades bajo prueba:
- Crear una página con estado publicado, los pasos para ello son realizar el login, crear la página con su nombre y algún tipo de contenido, para finalmente regresar a la pantalla principal garantizando su creación.
- Crear un borrador de la página, se realza el login, se crea la página sin un nombre, ni con contenido, retornando luego a la pantalla principal, garantizando su creación como borrador.
- Editar una página, nuevamente se hace login, se cambia una página previamente existente, en su título y contenido, se regresa nuevamente a la página principal.
- Eliminar una página, se hace login, eliminamos una página y se observan los cambios en la página principal.
- Crear un tag, editarlo, asignarlo a un post, quitarlo de un post, y eliminar el tag.
## Instrucciones para ejecutar los escenarios en Kraken
- Clonar este repositorio en una carpeta vacía.
- Ejecutar el comando npm init para que la carpeta node_modules se genere.
- Cambiar en la carpeta properties.json tanto el nombre de usuario USERNAME como la contraseña PASSWORD por la del GHOST local.
- Tener instalado ADB, o tenerlo en el path del computador.
- Ejecutar el comando npx kraken-node run.
## Instrucciones para ejecutar los escenarios en Cypress
- Instalar la versión de node 16.14.2
- Clonar este repositorio en una carpeta vacía.
- Abra un terminal y ejecute el comando npm install -g cypress
- En el archivo cypress.json cambiar el usuario y constraseña del GHOST local.
- Corra las pruebas con el comando cypress run
- Cada uno de los escenarios tendra un archivo con video y pantallazos que permiten visualizar las pruebas.
