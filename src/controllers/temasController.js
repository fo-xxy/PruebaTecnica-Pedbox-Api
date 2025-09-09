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
        res.status(500).send({ status: 'Error', message: 'Hubo un problema al obtener los temas' });
    }

};

//Tema por id
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
        res.status(500).send({ status: 'Error', message: 'Hubo un problema al obtener la tema' });
    }
};


//Este es el endpoint para descargar los temas desde la url
const getTemasURl = async (req, res) => {
  try {
    const temas = await temasService.getTemasURl();

    if (temas && temas.length > 0) {
      res.status(200).send({ status: 'Ok', data: temas });
    } else {
      res.status(404).send({ status: 'Error', message: 'Tema no encontrada' });
    }
  } catch (error) {
    res.status(500).send({ status: 'Error', message: 'Hubo un problema al obtener los temas' });
  }

};


//Se exportan los modulos
module.exports = {
    getAllTemas,
    getTemaId,
    getTemasURl
};