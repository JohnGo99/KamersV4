// Installeer de benodigde modules met: npm install express mysql body-parser cors
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Verbind met de MySQL-database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Git#Konijn#Beer#678',
    database: 'kleur_db'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Verbonden met database');
});

// API endpoint om de huidige kleuren op te halen
app.get('/get-colors', (req, res) => {
    let sql = 'SELECT * FROM kleuren';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// API endpoint om een kleur bij te werken
app.post('/update-color', (req, res) => {
    const { buttonId, color } = req.body;
    let sql = `UPDATE kleuren SET color = ? WHERE buttonId = ?`;
    db.query(sql, [color, buttonId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Kleur succesvol bijgewerkt' });
    });
});

// Start de server
app.listen(3000, () => {
    console.log('Server draait op poort 3000');
});
