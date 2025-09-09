const temasController = require('../../controllers/temasController');
const temasService = require('../../services/temasService');  

// Mocks de Jest
jest.mock('../../services/temasService');  

describe('temasController.getTemaId', () => {
  it('Debe devolver un tema cuando este exista', async () => {
    const req = { params: { temaId: '1' } };  // Parámetros de la solicitud
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };  // Mock de la respuesta

    // Mock de la función getTemaId en el servicio
    temasService.getTemaId.mockResolvedValue({ id: '1', name: 'Tema 1' });

    // Llamamos al controlador
    await temasController.getTemaId(req, res);

    // Verificamos que la respuesta fue enviada con el tema correcto
    expect(res.send).toHaveBeenCalledWith({ status: 'Ok', data: { id: '1', name: 'Tema 1' } });
  });

  it('debe devolver un 404 cuando no encuentre este registro', async () => {
    const req = { params: { temaId: '999' } };  // ID no existente
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };

    // Mock de la función getTemaId en el servicio
    temasService.getTemaId.mockResolvedValue(null);  // El servicio devuelve null si no encuentra el tema

    await temasController.getTemaId(req, res);

    // Verificamos que el status 404 fue llamado
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ status: 'Error', message: 'Tema no encontrada' });
  });

  it('Errores inesperados debe manejarlos de la amnera correcta', async () => {
    const req = { params: { temaId: '1' } };
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };

    // Mock de la función getTemaId en el servicio para simular un error
    temasService.getTemaId.mockRejectedValue(new Error('Algo salió mal'));

    await temasController.getTemaId(req, res);

    // Verificamos que el status 500 fue llamado
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ status: 'Error', message: 'Hubo un problema al obtener la tema' });
  });
});


describe('temasController.getAllTemas', () => {

  let res;

  beforeEach(() => {
    // Mock de res.send y res.status
    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis() 
    };
  });

  it('Debe devolver todos los temas', async () => {

    const mockTemas = [{ id: 1, name: 'Tema 1' }, { id: 2, name: 'Tema 2' }];
    temasService.getAllTemas.mockResolvedValue(mockTemas);

    await temasController.getAllTemas({}, res);

    expect(res.send).toHaveBeenCalledWith({ status: 'Ok', data: mockTemas });
  });

  it('debe devolver 404 si no se encuentran temas o si no se puede coenctar al la url de donde se extrae la información', async () => {

    temasService.getAllTemas.mockResolvedValue(null);

    await temasController.getAllTemas({}, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ status: 'Error', message: 'Tema no encontrada' });
  });

  it('Errores inesperados debe manejarlos de la amnera correcta', async () => {

    temasService.getAllTemas.mockRejectedValue(new Error('Algo salió mal'));

    await temasController.getAllTemas({}, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ status: 'Error', message: 'Hubo un problema al obtener los temas' });
  });

});


describe('temasController.getTemasURl', () => {

  let res;

  beforeEach(() => {

    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis() 
    };
  });

  it('Debe devolver todos los temas', async () => {

    const mockTemas = [{ id: 1, name: 'Tema 1' }, { id: 2, name: 'Tema 2' }];
    temasService.getTemasURl.mockResolvedValue(mockTemas);

    await temasController.getTemasURl({}, res);

    expect(res.send).toHaveBeenCalledWith({ status: 'Ok', data: mockTemas });
  });

  it('debe devolver 404 si no se encuentran temas o si no se puede coenctar al la url de donde se extrae la información', async () => {

    temasService.getTemasURl.mockResolvedValue(null);

    await temasController.getTemasURl({}, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ status: 'Error', message: 'Tema no encontrada' });
  });

  it('Errores inesperados debe manejarlos de la amnera correcta', async () => {
    temasService.getTemasURl.mockRejectedValue(new Error('Algo salió mal'));

    await temasController.getTemasURl({}, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ status: 'Error', message: 'Hubo un problema al obtener los temas' });
  });

});


