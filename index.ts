import express from 'express';

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send('API REST ha sido desplegada en Render.com !!!');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
