const Temas = require("../database/Temas");

const getAllTemas = async  () => {
    const allTemas =   await Temas.getAllTemas();  
    return allTemas;
};

const getTemaId = async (temaId) => {

    const temaById = await Temas.getTemaById(temaId);
    return temaById;

}

module.exports = {
    getAllTemas,
    getTemaId
};