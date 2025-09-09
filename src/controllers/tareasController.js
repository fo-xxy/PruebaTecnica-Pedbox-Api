
//Se crean los controladores para obtener las tareas y una tarea por id
const getAllTareas = (req, res) => {
    res.send('Obtener todas las tareas');
};

const getTareaId = (req, res) => {
    res.send(`Obtener tarea ${req.params.tareaId}`);
};


//Se exportan los modulos
module.exports = {
    getAllTareas,
    getTareaId,
};