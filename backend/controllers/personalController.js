import Personal from '../models/Personal.js';

export const listarPersonals = async (req, res) => {
  try {
    const personal = await Personal.findAll(); // Chama a função findAll para listar todos os personals
    res.json(personal);
  } catch (error) {
    console.error("Erro ao listar :", error.message);
    res.status(500).json({ error: 'Erro ao listar personals' });
  }
};
