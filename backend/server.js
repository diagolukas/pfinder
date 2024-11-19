// import express from 'express';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js'; // Importando as rotas

// dotenv.config();  // Carregando variáveis de ambiente

// const app = express();

// // Middleware para interpretar JSON no body das requisições
// app.use(express.json());

// // Usar as rotas de autenticação que criamos
// app.use('/auth', authRoutes);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });


import express from 'express';
import cors from 'cors';  // Importando CORS
import authRoutes from './routes/authRoutes.js';  // Suas rotas de autenticação

const app = express();

// Configurando CORS para permitir todas as origens
app.use(cors());

// Configurando para permitir apenas requisições de certas origens (exemplo: frontend)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  
}));

app.use(express.json());  // Para interpretar o JSON das requisições

// Usando as rotas de autenticação
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
