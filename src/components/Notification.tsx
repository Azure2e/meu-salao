
import React from 'react';
const Notification: React.FC = () => {
  const notify = () => {
    alert('Você tem uma nova notificação!');
  };
  return (
    <div className="notification">
      <h2>Notificações</h2>
      <button onClick={notify}>Ver Notificações</button>
    </div>
  );
};
export default Notification;