<<<<<<< HEAD
import { useState, useEffect } from 'react';

const snapId = 'local:http://localhost:8080';

function App() {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isSnapInstalled, setIsSnapInstalled] = useState(false);

  useEffect(() => {
    const checkMetaMask = async () => {
      setIsMetaMaskInstalled(typeof window.ethereum !== 'undefined');
    };
    checkMetaMask();
  }, []);
=======
import React, { useState } from 'react';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const App: React.FC = () => {
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [message, setMessage] = useState('');
>>>>>>> main

  const connectSnap = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_requestSnaps',
        params: {
<<<<<<< HEAD
          [snapId]: {},
        },
      });
      setIsSnapInstalled(true);
    } catch (error) {
      console.error('Failed to connect snap:', error);
      alert('Failed to connect snap. Make sure MetaMask Flask is installed and the snap is running.');
=======
          'local:http://localhost:8080': {},
        },
      });
      setSnapInstalled(true);
      setMessage('Snap connected successfully!');
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
>>>>>>> main
    }
  };

  const sendHello = async () => {
    try {
<<<<<<< HEAD
      await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: {
          snapId,
          request: {
            method: 'hello',
          },
        },
      });
    } catch (error) {
      console.error('Failed to send hello:', error);
      alert('Failed to send hello.');
=======
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
>>>>>>> main
    }
  };

  return (
<<<<<<< HEAD
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>MetaMask Snap Example</h1>
      {!isMetaMaskInstalled ? (
        <div>
          <p>MetaMask is not installed. Please install MetaMask Flask to use this snap.</p>
          <a href="https://metamask.io/flask/" target="_blank" rel="noopener noreferrer">
            Install MetaMask Flask
          </a>
        </div>
      ) : (
        <div>
          <p>MetaMask is installed!</p>
          {!isSnapInstalled ? (
            <button onClick={connectSnap} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
              Connect Snap
            </button>
          ) : (
            <div>
              <p>Snap is connected!</p>
              <button onClick={sendHello} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                Send Hello
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
=======
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
>>>>>>> main
