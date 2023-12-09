const express = require('express');
const app = express();
const puerto = 80;
const PacientesController = require('./controllers/PacientesController');
const ConsultasController = require('./controllers/ConsultasController');
const HistorialMedicoController = require('./controllers/HistorialMedicoController');
const DietaController = require('./controllers/DietaController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/Pacientes', PacientesController.indexGet);
app.get('/Pacientes/:id([0-9]+)', PacientesController.itemGet);
app.post('/Pacientes', PacientesController.indexPost);
app.patch('/Pacientes/:id([0-9]+)', PacientesController.itemPatch);

app.get('/Consultas', ConsultasController.indexGet);
app.get('/Consultas/:id([0-9]+)', ConsultasController.itemGet);
app.post('/Consultas', ConsultasController.indexPost);
app.patch('/Consultas/:id([0-9]+)', ConsultasController.itemPatch);

app.get('/HistorialMedico', HistorialMedicoController.indexGet);
app.get('/HistorialMedico/:id([0-9]+)', HistorialMedicoController.itemGet);
app.post('/HistorialMedico', HistorialMedicoController.indexPost);
app.patch('/HistorialMedico/:id([0-9]+)', HistorialMedicoController.itemPatch);

app.get('/Dieta', DietaController.indexGet);
app.get('/Dieta/:id([0-9]+)', DietaController.itemGet);
app.post('/Dieta', DietaController.indexPost);
app.patch('/Dieta/:id([0-9]+)', DietaController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});