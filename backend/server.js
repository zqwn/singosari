const express = require('express');
const sequelize = require('./config/db');
const Asset = require('./models/Asset');

const app = express();
app.use(express.json()); // Agar API bisa menerima data JSON

// Endpoint 1: Ambil semua data aset (GET)
app.get('/api/assets', async (req, res) => {
    const assets = await Asset.findAll();
    res.json(assets);
});

// Endpoint 2: Tambah aset baru (POST)
app.post('/api/assets', async (req, res) => {
    try {
        const newAsset = await Asset.create(req.body);
        res.status(201).json(newAsset);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Sinkronisasi Database (Otomatis buat tabel jika belum ada)
sequelize.sync().then(() => {
    app.listen(3000, () => console.log('API berjalan di http://localhost:3000'));
});
