import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { google } from 'googleapis';

const app = express();
const upload = multer();
app.use(cors());
app.use(express.json());

// Configuración de Google Sheets
const SHEET_ID = '10UWRo81oyISnbVJDQsz_fV1Hiwcl8aM2wxkYJY4JdU0'; // ID de tu Google Sheet
const RANGE = 'A2:E2'; // Comienza en la segunda fila para no sobrescribir encabezados y abarca todas las columnas (Nombre, Apellido, Correo, Teléfono, Comprobante)

// Autenticación con Google
const auth = new google.auth.GoogleAuth({
  keyFile: 'gen-lang-client-0256808647-5cca2ba37d8b.json', // Archivo de credenciales
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

app.post('/inscripcion', upload.single('comprobante'), async (req, res) => {
  console.log('Datos recibidos:', req.body, req.file);
  try {
    const { nombre, apellido, correo, telefono } = req.body;
    // El archivo comprobante está en req.file
    const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() });
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[nombre, apellido, correo, req.file ? req.file.originalname : '', telefono]],
      },
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Error al insertar en Google Sheets:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => {
  console.log('Backend escuchando en puerto 4000');
});
