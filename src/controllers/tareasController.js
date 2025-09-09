const tareasService = require("../services/tareasService");

//Se crean los controladores para obtener las tareas y una tarea por id
const getAllTareas = async (req, res) => {

    try {
    const allTareas = await tareasService.getAllTareas();
        if (allTareas) {
            res.send({ status: 'Ok', data: allTareas });
        } else {
            res.status(404).send({ status: 'Error', message: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener las tareas:', error.message);
        res.status(500).send({ status: 'Error', message: 'Hubo un problema al obtener las tareas' });
    }

};

const getTareaId = async (req, res) => {

    const { tareaId } = req.params; 

    try {
        const tarea = await tareasService.getTareaId(tareaId); 
        if (tarea) {
            res.send({ status: 'Ok', data: tarea });
        } else {
            res.status(404).send({ status: 'Error', message: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener la tarea:', error.message);
        res.status(500).send({ status: 'Error', message: 'Hubo un problema al obtener la tarea' });
    }
};


//Se exportan los modulos
module.exports = {
    getAllTareas,
    getTareaId,
};