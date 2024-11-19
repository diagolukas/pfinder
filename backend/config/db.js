import mysql from 'mysql2/promise';  // Usando import ao invés de require
import dotenv from 'dotenv';

dotenv.config();  // Carregando as variáveis de ambiente do arquivo .env

// Criando a pool de conexões com o banco de dados
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default db;  // Exportando a conexão com o banco
