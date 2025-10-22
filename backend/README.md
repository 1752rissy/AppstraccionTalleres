# Backend Google Sheets

Este backend recibe inscripciones desde el formulario y las inserta en Google Sheets.

## Pasos para configurar:

1. Crea una hoja de cálculo en Google Sheets y copia el ID.
2. Ve a Google Cloud Console, crea un proyecto y habilita la API de Google Sheets.
3. Crea credenciales de servicio y descarga el archivo `credentials.json`. Colócalo en la carpeta `backend`.
4. Reemplaza `TU_SHEET_ID_AQUI` en `index.js` por el ID de tu hoja.
5. Instala dependencias:
   ```bash
   cd backend
   npm install
   ```
6. Inicia el backend:
   ```bash
   npm start
   ```

## Endpoint

- POST `/inscripcion`
  - Campos: `nombre`, `apellido`, `correo`, `comprobante` (archivo)
  - Inserta los datos en la hoja de cálculo.

## Notas
- El archivo comprobante solo se guarda el nombre en la hoja. Si quieres guardar el archivo, deberás integrarlo con Google Drive.
