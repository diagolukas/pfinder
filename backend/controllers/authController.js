import Aluno from '../models/Aluno.js';
import Personal from '../models/Personal.js';
import pkg from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { hash , compare } = pkg;

export async function registerAluno(req, res) {
  try {
    const { name, sobrenome, email, password, nascimento, local } = req.body;
    
    const hashedPassword = await hash(password, 10);
    await Aluno.create({ name, sobrenome, email, password: hashedPassword, nascimento, local });
    
    return res.status(201).json({ message: 'Aluno registrado com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao registrar aluno' });
  }
}

// Cadastro de personal trainer
export async function registerPersonal(req, res) {
  try {
    const { name, sobrenome, email, password, nascimento, local, cpf, cref, especializacoes } = req.body;

    const hashedPassword = await hash(password, 10);
    await Personal.create({ name, sobrenome, email, password: hashedPassword, nascimento, local, cpf, cref, especializacoes });

    return res.status(201).json({ message: 'Personal Trainer registrado com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao registrar personal trainer' });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Verifica se o usuário é aluno
    let user = await Aluno.findByEmail(email);
    
    // Se não for aluno, verifica se é personal trainer
    if (!user) {
      user = await Personal.findByEmail(email);
    }

    // Se nenhum usuário for encontrado
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verifica a senha
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Gera um token JWT para o usuário
    const token = jwt.sign({ id: user.id, email: user.email }, 'seuSegredoJWT', { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login bem-sucedido', token });
  } catch (error) {
    return res.status(500).json({ error: 'Erro no login' });
  }
}