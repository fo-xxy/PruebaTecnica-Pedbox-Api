const temasService = require("../services/temasService");

//Se crean los controladores para obtener los temas y un tema por id
const getAllTemas = async (req, res) => {

    try {
    const allTemas = await temasService.getAllTemas();
        if (allTemas) {
            res.send({ status: 'Ok', data: allTemas });
        } else {
            res.status(404).send({ status: 'Error', message: 'Tema no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener los temas:', error.message);
        res.status(500).send({ status: 'Error', message: 'Hubo un problema al obtener los temas' });
    }

};

const getTemaId = async (req, res) => {

    const { temaId } = req.params; 

    try {
        const tema = await temasService.getTemaId(temaId); 
        if (tema) {
            res.send({ status: 'Ok', data: tema });
        } else {
            res.status(404).send({ status: 'Error', message: 'Tema no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener el tema:', error.message);
        res.status(500).send({ status: 'Error', message: 'Hubo un problema al obtener la tema' });
    }
};


//Se exportan los modulos
module.exports = {
    getAllTemas,
    getTemaId,
};