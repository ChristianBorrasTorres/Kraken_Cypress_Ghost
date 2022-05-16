# Kraken_Cypress_Ghost
Sexta semana de la materia Pruebas Automatizadas de Software, en la que se realizaran pruebas sobre las versiones de Ghost 4.47.2 (versión sobre la que se trabajó en la semana anterior) y 4.10.0 con las herramientas Kraken y Cypress implementando la captura de interfaz gráfica para realizar pruebas de regresión visual de 10 escenarios seleccionados (5 Cypress y 5 Kraken), esto con la herramienta de Resemble JS. 
## Funcionalidades bajo prueba:
- Crear una página con estado publicado, los pasos para ello son realizar el login, crear la página con su nombre y algún tipo de contenido, para finalmente regresar a la pantalla principal garantizando su creación.
- Crear un borrador de la página, se realza el login, se crea la página sin un nombre, ni con contenido, retornando luego a la pantalla principal, garantizando su creación como borrador.
- Editar una página, nuevamente se hace login, se cambia una página previamente existente, en su título y contenido, se regresa nuevamente a la página principal.
- Eliminar una página, se hace login, eliminamos una página y se observan los cambios en la página principal.
- Crear un tag, editarlo, asignarlo a un post, quitarlo de un post, y eliminar el tag.
- Previsualizar un post y una página.
- Filtrar posts por post publicados.
- Publicar post programado con la opción por defecto.
## Escenarios seleccionados para pruebas de regresión visual
- Eliminar página: Como usuario inicio sesión, creo una página y la elimino.
- Asignar Tag a post: Como usuario inicio sesión, creo un tag, y lo asigno a un post.
- Eliminar tag de post: Como usuario inicio sesión, creo un tag, lo asigno a un post, y lo quito otra vez.
- Programar publicación de post: Como usuario inicio sesión, hago post y programo publicacion.
- Crear y publicar post: Como usuario inicio sesión, hago post y publico.
## Kraken
### Instrucciones para ejecutar los escenarios en Kraken
- Clonar este repositorio en una carpeta vacía.
- Ubicarse en el directorio raíz del repositorio local _/KRAKEN_CYPRESS_GHOST_ ejecutar el comando npm init para que la carpeta node_modules se genere luego, ejecutar el comando npm install kraken-node.
- Cambiar en el archivo properties.json tanto el nombre de usuario USERNAME como la contraseña PASSWORD por la del GHOST local. Adicionalmente verificar el puerto en el cual se tiene desplegada la versión de Ghost y editarlo en el archivo en cuestión de ser necesario. Para el caso se tenía la versión 4.10.0 desplegada en el puerto 3001:

![capturaPuertoConfig](https://user-images.githubusercontent.com/98660561/168514208-1a1b04fd-49af-4f68-9132-5e1b17775bfc.PNG)

- En el directorio _features_ se tienen diferentes archivos que contienen los escenarios agrupados de acuerdo a cada funcionalidad tanto para la versión 4.10.0 como la versión 4.47.2, las correspondientes a la primera se distinguen con una terminación en su nombramiento así: _escenariosXXXXModificadosV410_, respecto a la segunda se tiene el siguiente nombramiento: _escenariosXXXX_.
![CapturaFeatures](https://user-images.githubusercontent.com/98660561/168515238-35913a23-c813-4a6a-961e-c4f7ccf3535a.PNG)
- Como se evidenció en el ítem anterior se tienen separados los archivos debido a que la herramienta no permitió la ejecución de múltiples _features_, por lo que para ejecutar un archivo con los escenarios se debe renombrar el mismo colocando al final _.feature_, cabe señalar que sólo puede haber __UN__ archivo con éste nombramiento:

![image](https://user-images.githubusercontent.com/98660561/168515850-cfa19e8b-fe03-4fa8-a06b-96529083ad11.png)

Se puede apreciar en la imagen anterior que el único archivo con el nombramiento _.feature_ es el llamado _escenariosPageYTagModificadosV410.feature_ por lo que al ejecutarse la herramienta se correrán los escenarios contenidos en éste. Debe repetirse el procedimiento con __CADA__ __UNO__ de los archivos.
- Los 5 escenarios modificados para ser ejecutados en la versión 4.10.0 están distribuidos en dos archivos: el archivo llamado _escenariosPageYTagModificadosV410.feature_ contiene los escenarios de Eliminación de página, Creación, asignación y eliminación de Tag. El archivo llamado _escenariosPostModificadosV410_ contiene los escenarios de Creación y publicación de post y el de programar publicación de post. Dicha separación se realizó porque al tener los escenarios seleccionados en el mismo archivo las pruebas no se ejecutaban con éxito, caso contrario al tenerlos separados.
- Tener instalado ADB, o tenerlo en el path del computador.
- Ubicarse sobre el directorio _/Kraken_ y ejecutar el comando npx kraken-node run.
### Estrategia para toma de screenshots
Para la herramienta en cuestión no fue necesario realizar ajustes pues de manera automática toma los screenshots luego de cada paso, lo único que se hizo fue la selección de los screenshots de tal manera que tuvieran correspondencia con los tomados con Cypress  y así tener una comparación coherente.

## Cypress
### Instrucciones para ejecutar los escenarios en Cypress
- Instalar la versión de node 16.14.2
- Clonar este repositorio en una carpeta vacía.
- Abra un terminal y ejecute el comando npm install -g cypress
- En el archivo cypress.json cambiar el usuario y constraseña del GHOST local. Adicionalmente revisar el puerto sobre el cual se tiene desplegada la aplicación de Ghost, para el caso se tenía la versión 4.10.0 desplegada en el puerto 3001:

![image](https://user-images.githubusercontent.com/98660561/168518369-6c034c54-885a-4d54-b3f2-01e292809e24.png)

- En el directorio _./integration_ donde se encuentran todos los escenarios agrupados de acuerdo a las funcionalidades se creó una carpeta llamada _escenariosModificadosV4.10.0_ donde se alojaron los 5 escenarios seleccionados para la prueba de regresión visual y que fueron ajustados para que se ejecutaran en la versión 4.10.0  de Ghost.

![image](https://user-images.githubusercontent.com/98660561/168520089-0c7b109e-0992-480c-afcc-d42772d1f31b.png)

- Corra las pruebas con el comando cypress run.
- Cada uno de los escenarios tendrá un archivo con video y pantallazos que permiten visualizar las pruebas.


### Estrategia para toma de screenshots
Para Cypress la estrategia utilizada fue tomar los screenshots al finalizar cada paso, si bien fue una estrategia repetitiva fue la que más se ajustó a las necesidades:

![image](https://user-images.githubusercontent.com/98660561/168518672-7ad6bb35-ec72-4fc6-8525-0822572ecccc.png)

## Resemble JS
Los archivos asociados al desarrollo y documentación de las pruebas de regresión visual se encuentran alojados en el directorio llamado _/regression_test_resemble_.

![image](https://user-images.githubusercontent.com/98660561/168520776-c9f3ff20-d74a-4dff-8f92-bacca0477240.png)


Para la revisión de los reportes generados de cada prueba se debe ingresar al directorio mencionado anteriormente, luego se muestran directorios con cada uno de los escenarios seleccionados:

![image](https://user-images.githubusercontent.com/98660561/168520898-9e984789-ec2c-4fc0-9d21-8c77c7b14ab0.png)

Dentro de cada directorio a su vez se encuentran los archivos con el código fuente junto con los reportes. Para acceder a los reportes se debe ingresar a la carpeta _/results_ y allí seleccionar el archivo _report.html_.

![image](https://user-images.githubusercontent.com/98660561/168521887-14181335-0ae9-4c65-accc-7b05e7a8e5a6.png)

### Estrategia para prueba de regresión visual
Para la realización de las pruebas de regresion visual, se procedio a:
 - Seleccionar 5 features que puedieran ser sensibles a tener cambios entre una versión y otra.
 - Ubicar las capturas de pantalla de cada feature, separadas en una carpeta por cada feature dentro de la cual habra una carpeta "before" y una carpeta "after" dentro de las cuales se ubicaran cada una de las capturas dependiendo de la versión a la que pertenezca.
 - Instalar los paquetes de resembleJS usando npm.
 - Desarrollar el script que a traves del uso de resembleJS permita compara dos capturas de pantalla correspondientes a una misma feature, generando asi una imagen que se alojara en una nueva carpeta denominada "compare", en la cual se mostrara la diferencia entre una versión y otra, asi como tambien un resumen escrito donde se muestra porcentajes de variación a nivel de dimensiones.
 - Incluir en el script funciones que permitan la generación del reporte en html, que se alojara en una nueva carpeta "results", en el que se mostrara las imagenes correspondientes a cada version, y la imagen que muestra el diferencial entre una versión y otra, asi como tambien el resumen escrito sobre la variación a nivel de dimensiones.
