import express from 'express';
import schoolRoutes from './routes/school.routes.js';

const app = express();

app.use(express.json());
app.use('/api', schoolRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
