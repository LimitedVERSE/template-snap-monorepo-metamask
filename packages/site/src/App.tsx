import React, { useState } from 'react';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const App: React.FC = () => {
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [message, setMessage] = useState('');

  const connectSnap = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_requestSnaps',
        params: {
          'local:http://localhost:8080': {},
        },
      });
      setSnapInstalled(true);
      setMessage('Snap connected successfully!');
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const sendHello = async () => {
    try {
      const response = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: {
          snapId: 'local:http://localhost:8080',
          request: { method: 'hello' },
        },
      });
      setMessage(`Response: ${JSON.stringify(response)}`);
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="container">
      <h1>MetaMask Snap Template</h1>
      <div className="card">
        <h2>Getting Started</h2>
        <p>
          This is a template for a MetaMask Snap. Connect your snap to get started.
        </p>
        
        {!snapInstalled ? (
          <button onClick={connectSnap}>Connect Snap</button>
        ) : (
          <button onClick={sendHello}>Send Hello</button>
        )}
        
        {message && (
          <div className="message">
            {message}
          </div>
        )}
      </div>
      
      <div className="info">
        <h3>Instructions:</h3>
        <ol>
          <li>Make sure MetaMask Flask is installed</li>
          <li>Run <code>yarn start</code> to start the development server</li>
          <li>Click "Connect Snap" to install the snap</li>
          <li>Click "Send Hello" to interact with the snap</li>
        </ol>
      </div>
    </div>
  );
};
