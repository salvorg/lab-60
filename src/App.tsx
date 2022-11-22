import React from 'react';
import Chat from "./components/Chat/Chat";
import SendMessageForm from "./components/SendMessageForm/SendMessageForm";

function App() {
  return (
    <div className="App">
      <SendMessageForm/>
      <Chat/>
    </div>
  );
}

export default App;
