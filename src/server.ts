import express from 'express';

const app = express();

app.get('/', (resquest, response) => response.json({ message: 'Hello world' }));

app.listen(3333, () => {
  console.log('🚀️ Server started om port 3333!');
});
