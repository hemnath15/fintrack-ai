import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboard.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    message: 'FinTrack AI Backend is running'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
export default app;