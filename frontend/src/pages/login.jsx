import { useState } from 'react';
import { useRouter } from 'next/router';
import Popup from '../components/Popup';
import axios from 'axios';

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      setSuccess(response.data.message);
      localStorage.setItem('token', response.data.token);
      router.push('/personalsList');
      setPopupMessage('Login realizado com sucesso!');
      setPopupType('success');
    } catch (err) {
      setPopupMessage('Erro ao fazer login.');
      setPopupType('error');
      setError(err.response.data.error);
    } finally {
      setShowPopup(true);
    }

    const closePopup = () => {
      setShowPopup(false);
    };

  //   try {
  //     const response = await fetch('http://localhost:5000/auth/login/aluno', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       // Redireciona o usuário para a página de lista de personal trainers após o login
  //       router.push('/personalsList'); // Aqui você coloca a página que deseja redirecionar
  //     } else {
  //       const errorData = await response.json();
  //       setError(errorData.message || 'Erro ao realizar login');
  //     }
  //   } catch (error) {
  //     setError('Erro ao se conectar com o servidor');
  //   }
 };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn-login' type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
{/* 
      {showPopup && (
        <Popup message={popupMessage} onClose={closePopup} type={popupType} />
      )} */}
    </div>
  );
};

export default Login;
