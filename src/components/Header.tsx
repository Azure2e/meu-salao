
// src/components/Header.tsx
import React from 'react';
const Header: React.FC = () => {
  return (
    <header>
      <h1>Salão de Cabeleireiro</h1>
      <nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#agendamentos">Agendamentos</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;