
import React, { useEffect, useState } from 'react';


const PersonalsList = () => {
  const [personal, setPersonals] = useState([]);

  useEffect(() => {
    // Simulação de uma requisição para obter os dados dos personals
    const fetchPersonals = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/personal'); // Ajuste a rota conforme o backend
        const data = await response.json();
        setPersonals(data);
      } catch (error) {
        console.error('Erro ao carregar os personals:', error);
      }
    };

    fetchPersonals();
  }, []);

  return (
    <div className="personals-list">
      <h1>Personal Trainers Disponíveis</h1>
      <div className="personals-container">
        {personal.length === 0 ? (
          <p>Carregando personal trainers...</p>
        ) : (
          personal.map((personal) => (
            <div className="personal-card" key={personal.id}>
              <h2>{personal.name}</h2>
              <p>Local: {personal.local}</p>
              <p>Tipo de Treino: {personal.especializacoes}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PersonalsList;
