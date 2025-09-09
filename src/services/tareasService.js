const Tareas = require("../database/Tareas");

const getAllTareas = async  () => {
    const allTareas =   await Tareas.getAllTareas();  // Ejecutamos la función getAllTareas
    return allTareas;
};
const getTareaId = () => {
    return;
}

module.exports = {
    getAllTareas,
    getTareaId
};