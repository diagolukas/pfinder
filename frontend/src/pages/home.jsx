import React from 'react';
// import '../styles/Home.css';

function Home() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">Personal Finder</div>
          <ul className="nav-links">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Bem-vindo ao Personal Finder</h1>
            <p>Conectamos Personal Trainers a pessoas que moram próximas para facilitar o agendamento de treinos.</p>
          </div>
          <div className="hero-image">
            {/* Imagem principal */}
            <img src="sua-imagem-aqui.jpg" alt="Imagem de personal trainer" />
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Personal Finder. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
