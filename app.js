const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let turnos = [
    { id: 1, paciente: 'Juan Perez', dni: '439493949', especialidad: 'Radiología' },
    { id: 2, paciente: 'María García', dni: '440404040', especialidad: 'Cardiología' },
    { id: 3, paciente: 'Pedro López', dni: '441414141', especialidad: 'Neurología' },
    { id: 4, paciente: 'Ana Torres', dni: '442424242', especialidad: 'Dermatología' },
];

// Obtener todos los turnos
app.get('/api/v1/turnos', (req, res) => {
    res.status(200).json({
        total: turnos.length,
        data: turnos
    });
});

// Crear un nuevo turno
app.post('/api/v1/turnos', (req, res) => {
    const { paciente, dni, especialidad } = req.body;

    if (!paciente || !dni || !especialidad) {
        return res.status(400).json({
            error: 'Faltan datos obligatorios'
        });
    }

    const nuevoTurno = {
        id: turnos.length + 1,
        paciente,
        dni,
        especialidad
    };

    turnos.push(nuevoTurno);
    res.status(201).json({
        message: 'Turno creado exitosamente',
        data: nuevoTurno
    });
});
app.delete('/api/v1/turnos/:id', (req, res) => {
    const turnoId = parseInt(req.params.id);
    const turnoExiste = turnos.some(t => t.id === parseInt(turnoId));

    if (!turnoExiste) {
        return res.status(404).json({ error: 'Turno no encontrado' });
    }

    turnos = turnos.filter(t => t.id !== turnoId);
    res.status(200).json({
        message: 'Turno eliminado exitosamente',
        data: turnos
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});