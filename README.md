Api para descargar y consultar los temas, ya sea todos o por id

En la carpeta Docuemntacion api hay una colección de postman con 3 endposint, los cuales son:

descargarTemas
GetAllTemas
GetTemaId



para ejecutar el api solo es necesario que abran la terminal del visual code y ejecuten este comando

npm run dev  

y una vez esten en el navegador esta sería la url completa

http://localhost:3000/api/v1/temas/                 -> Consulta todas los temas
http://localhost:3000/api/v1/temas/121h8r           -> Consulta tema por id
http://localhost:3000/api/v1/temas/descargarTemas   -> descarga los temas a la base de datos

Por defecto deje el puerto 3000, pero en el front puede que genere un problema al abrirlo ya que por defecto tambien abre el 3000, pero si le dan en la opción abrir con otro puerto, no habria problema.


La base de datos está en la carpeta database con el nombre de esquimaBD.sql


