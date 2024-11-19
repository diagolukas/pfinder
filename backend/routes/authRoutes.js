import express from 'express';     // Importando o modelo de Aluno
const router = express.Router();
import { registerAluno, registerPersonal, login } from '../controllers/authController.js'; // Importar os controladores
import { listarPersonals } from '../controllers/personalController.js';

// Usar o controlador no lugar do modelo diretamente
router.post('/register/personal', registerPersonal);
router.post('/register/aluno', registerAluno);
router.get('/personal', listarPersonals);

// Rota de login
router.post('/login', login);

export default router;
