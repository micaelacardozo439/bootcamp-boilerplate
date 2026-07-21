const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('ventanilla municipal abierta!');
});
app.get('/informacion', (req, res) => {
    res.send('aqui de ve la informacion de contacto');
});
app.get('/contacto', (req, res) => {
    res.send(`
        Información de contacto
        Municipalidad de Goya
        Teléfono: 3794-000000
        Email: contacto@municipio.gob.ar
        Horario: Lunes a viernes de 7:00 a 13:00 hs`);
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});