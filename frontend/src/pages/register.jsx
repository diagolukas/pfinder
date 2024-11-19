import React, { useState } from 'react';
import Popup from '../components/Popup';

const Register = () => {
  // Estado para armazenar o tipo de usuário (aluno ou personal)
  const [userType, setUserType] = useState('aluno');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState(''); // 'success' ou 'error'
  const [showPopup, setShowPopup] = useState(false);
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    sobrenome: '',
    email: '',
    password: '',
    nascimento: '',
    local: '',
    cpf: '',
    cref: '',
    especializacoes: ''
  });

  // Função para atualizar os dados do formulário conforme o usuário digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para cadastrar o aluno
  const registerAluno = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/register/aluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar aluno');
      }
      setPopupMessage('Registro realizado com sucesso!');
      setPopupType('success');
    } catch (error) {
      setPopupMessage('Erro ao registrar usuário.');
      setPopupType('error');
    } finally {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Função para cadastrar o personal trainer
  const registerPersonal = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/register/personal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar personal trainer');
      }

      const data = await response.json();
      console.log('Personal cadastrado com sucesso:', data);
    } catch (error) {
      console.error('Erro ao registrar personal:', error);
    }
  };

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === 'aluno') {
      registerAluno();
    } else {
      registerPersonal();
    }
  };

  return (
    <div>
      <h1>Registro</h1>

      {/* Seletor de tipo de usuário */}
      <div className='tipo-conta'>
        <label>
          <input
            type="radio"
            value="aluno"
            checked={userType === 'aluno'}
            onChange={() => setUserType('aluno')}
          />
          Aluno
        </label>
        <label>
          <input
            type="radio"
            value="personal"
            checked={userType === 'personal'}
            onChange={() => setUserType('personal')}
          />
          Personal Trainer
        </label>
      </div>

      {/* Formulário de registro */}
      <form onSubmit={handleSubmit} className='form-info'>
        <div>
          <label>Nome</label>
          <input type="text" name="name" className='form-campo' value={formData.name} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Sobrenome</label>
          <input type="text" name="sobrenome" className='form-campo' value={formData.sobrenome} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" className='form-campo' value={formData.email} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Senha</label>
          <input type="password" name="password" className='form-campo' value={formData.password} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Data de Nascimento</label>
          <input type="date" name="nascimento" className='form-campo' value={formData.nascimento} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Localização</label>
          <input type="text" name="local" className='form-campo' value={formData.local} onChange={handleInputChange} required />
        </div>

        {/* Campos adicionais para personal trainer */}
        {userType === 'personal' && (
          <>
            <div>
              <label>CPF</label>
              <input type="text" name="cpf" className='form-campo' value={formData.cpf} onChange={handleInputChange} required />
            </div>

            <div>
              <label>CREF</label>
              <input type="text" name="cref" className='form-campo' value={formData.cref} onChange={handleInputChange} required />
            </div>

            <div>
              <label>Especializações</label>
              <input type="text" name="especializacoes" className='form-campo' value={formData.especializacoes} onChange={handleInputChange} />
            </div>
          </>
        )}

        <button className='btn-register' type="submit">Registrar</button>
        {
          showPopup && (
            <Popup message={popupMessage} onClose={closePopup} type={popupType} />
          )
        }
      </form>
    </div>
  );
};

export default Register;
