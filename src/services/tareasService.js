const Tareas = require("../database/Tareas");

const getAllTareas = async  () => {
    const allTareas =   await Tareas.getAllTareas();  
    return allTareas;
};

const getTareaId = async (tareaId) => {

    const tareaById = await Tareas.getTareaById(tareaId);
    return tareaById;

}

module.exports = {
    getAllTareas,
    getTareaId
};