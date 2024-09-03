import React from 'react';
import UnityGame from './UnityGame';  

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',     
      height: '100vh'        
    }}>
      <h1>Space Invader Online</h1>
      <div style={{
        width: '800px', 
        height: '600px',
      }}>
        <UnityGame />

      </div>
      <h3>Made by Cheikh Diop</h3>
    </div>
  );
}

export default App;
