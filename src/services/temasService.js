const Temas = require("../database/Temas");
const TemasUrl = require("../database/InsertTareasBD");


//Instancias o interfaces para llamar los servicios

const getAllTemas = async  () => {
    const allTemas =   await Temas.getAllTemas();  
    return allTemas;
};

const getTemaId = async (temaId) => {

    const temaById = await Temas.getTemaById(temaId);
    return temaById;

}

const getTemasURl = async  () => {
    const allTemas =   await TemasUrl.consultarTemas(); 
    
    return allTemas;
};

module.exports = {
    getAllTemas,
    getTemaId,
    getTemasURl
};