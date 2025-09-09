const express = require("express");
const router = express.Router();
const temasController = require("../../controllers/temasController");


//Aquí se llaman los endpoints
router
    .get("/DescargarTemas", temasController.getTemasURl)

    .get("/", temasController.getAllTemas)

    .get("/:temaId", temasController.getTemaId)



module.exports = router;