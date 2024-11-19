import db from '../config/db.js'; // Importando a conexão com o banco

// Modelo para alunos
const Aluno = {
  // Função de criação de aluno
  create: async (alunoData) => {
    const { name, sobrenome, email, password, nascimento, local } = alunoData;
    const query = `INSERT INTO aluno (name, sobrenome, email, password, nascimento, local) VALUES (?, ?, ?, ?, ?, ?)`;

    try {
      // Executando a query no banco de dados
      const [result] = await db.execute(query, [name, sobrenome, email, password, nascimento, local]);
      return result;
    } catch (err) {
      throw new Error('Erro ao criar aluno: ' + err.message);
    }
  },

  // Função para buscar um aluno por ID
  findById: async (alunoId) => {
    const query = `SELECT * FROM aluno WHERE id = ?`;

    try {
      const [rows] = await db.execute(query, [alunoId]);
      return rows[0]; // Retorna o aluno encontrado
    } catch (err) {
      throw new Error('Erro ao buscar aluno: ' + err.message);
    }
  },

  // Função para buscar um aluno por email
  findByEmail: async (email) => {
    const query = `SELECT * FROM aluno WHERE email = ?`;
    const [rows] = await db.execute(query, [email]);
    return rows[0]; // Retorna o aluno encontrado
  }

};

export default Aluno;
