
// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import MemberArea from './components/MemberArea';
import AppointmentScheduler from './components/AppointmentScheduler'; // Importando o novo componente
import ImageGallery from './components/ImageGallery';
import Chat from './components/Chat';
import Map from './components/Map';
import ServiceHistory from './components/ServiceHistory';
import FeedbackForm from './components/FeedbackForm';
import Notification from './components/Notification';
import VideoGallery from './components/VideoGallery';
const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const handleLogin = (user: string) => {
    setUsername(user);
  };
  return (
    <div className="App">
      <Header />
      {!username ? (
        <Login onLogin={handleLogin} />
      ) : (
        <MemberArea username={username} />
      )}
      <ImageGallery />
      <Chat />
      <Map />
      <ServiceHistory />
      <FeedbackForm />
      <Notification />
      <VideoGallery />
      <AppointmentScheduler /> {/* Adicionando o agendador de horários */}
    </div>
  );
};
export default App;