
const tareasService  = require("../services/tareasService");

//Se crean los controladores para obtener las tareas y una tarea por id
const getAllTareas = async (req, res) => {
    const allTareas = await tareasService.getAllTareas();
    res.send({status: 'OK', data: allTareas});
};

const getTareaId = (req, res) => {
        const getTareaId = tareasService.getTareaId;

    res.send(`Obtener tarea ${req.params.tareaId}`);
};


//Se exportan los modulos
module.exports = {
    getAllTareas,
    getTareaId,
};