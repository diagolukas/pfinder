import db from '../config/db.js'; // Importando a conexão com o banco

// Modelo para personal trainers
const Personal = {
  // Função de criação de personal trainer
  create: async (personalData) => {
    const { name, sobrenome, email, password, nascimento, local, cpf, cref, especializacoes } = personalData;
    const query = `INSERT INTO personal (name, sobrenome, email, password, nascimento, local, cpf, cref, especializacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    try {
      // Executando a query no banco de dados
      const [result] = await db.execute(query, [name, sobrenome, email, password, nascimento, local, cpf, cref, especializacoes]);
      return result;
    } catch (err) {
      throw new Error('Erro ao criar personal trainer: ' + err.message);
    }
  },

  // Função para buscar um personal trainer por ID
  findById: async (personalId) => {
    const query = `SELECT * FROM personal WHERE id = ?`;

    try {
      const [rows] = await db.execute(query, [personalId]);
      return rows[0]; // Retorna o personal encontrado
    } catch (err) {
      throw new Error('Erro ao buscar personal: ' + err.message);
    }
  },

  // Função para buscar um personal trainer por email
  findByEmail: async (email) => {
    const query = `SELECT * FROM personal WHERE email = ?`;
    const [rows] = await db.execute(query, [email]);
    return rows[0]; // Retorna o personal trainer encontrado
  },

  findAll: async () => {
    const query = `SELECT * FROM personal`;

    try {
      const [rows] = await db.execute(query);
      return rows; // Retorna todos os personals trainers encontrados
    } catch (err) {
      throw new Error('Erro ao listar personal trainers: ' + err.message);
    }
  }


};

export default Personal;
