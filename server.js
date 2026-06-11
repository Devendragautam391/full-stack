import express from 'express';
import authorRoutes from './routes/authorRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));
app.listen(3001, () => console.log('Server is running on port 3001'));