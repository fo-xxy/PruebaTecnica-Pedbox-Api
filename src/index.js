const express = require('express');
const v1TareasRouter = require("./v1/routes/temasRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//Se instancia las rutas del api
app.use("/api/v1/tareas", v1TareasRouter);


app.listen(PORT, () => {
console.log(`Estas en el servidor con puerto ${PORT}`);
});

