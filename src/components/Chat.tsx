import React, { useState } from 'react';
const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, `Você: ${input}`]);
      setInput('');
    }
  };
  return (
    <div className="chat">
      <h2>Chat ao Vivo</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
};
export default Chat;