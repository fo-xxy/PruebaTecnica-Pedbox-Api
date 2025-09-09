const express = require("express");
const router = express.Router();
const tareasController = require("../../controllers/tareasController");


//Aquí se llaman los endpoints
router
    .get("/", tareasController.getAllTareas)

    .get("/:tareaId", tareasController.getTareaId)

module.exports = router;