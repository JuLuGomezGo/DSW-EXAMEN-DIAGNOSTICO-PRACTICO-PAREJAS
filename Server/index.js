const express = require('express');
const app = express();
app.use(express.json());

let tareas = [];
let nextId = 1;

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
    const { titulo, descripcion } = req.body;
    if (!titulo) return res.status(400).json({ error: 'El título es obligatorio.' });
    const tarea = {
        id: nextId++,
        titulo,
        descripcion: descripcion || '',
        completada: false,
        fechaCreacion: new Date()
    };
    tareas.push(tarea);
    res.status(201).json(tarea);
});

// Leer todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Leer una tarea específica por su ID
app.get('/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada.' });
    res.json(tarea);
});

// Actualizar una tarea existente
app.put('/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada.' });
    const { titulo, descripcion, completada } = req.body;
    if (titulo !== undefined) tarea.titulo = titulo;
    if (descripcion !== undefined) tarea.descripcion = descripcion;
    if (completada !== undefined) tarea.completada = completada;
    res.json(tarea);
});

// Eliminar una tarea por su ID
app.delete('/tareas/:id', (req, res) => {
    const index = tareas.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Tarea no encontrada.' });
    tareas.splice(index, 1);
    res.json({ mensaje: 'Tarea eliminada.' });
});

// Estadísticas
app.get('/tareas/estadisticas', (req, res) => {
    if (tareas.length === 0) {
        return res.json({
            total: 0,
            masReciente: null,
            masAntigua: null,
            completadas: 0,
            pendientes: 0
        });
    }
    const masReciente = tareas.reduce((a, b) => a.fechaCreacion > b.fechaCreacion ? a : b);
    const masAntigua = tareas.reduce((a, b) => a.fechaCreacion < b.fechaCreacion ? a : b);
    const completadas = tareas.filter(t => t.completada).length;
    const pendientes = tareas.length - completadas;
    res.json({
        total: tareas.length,
        masReciente,
        masAntigua,
        completadas,
        pendientes
    });
});

// Manejo de rutas no existentes
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada.' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});