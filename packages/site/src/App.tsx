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

  const connectSnap = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_requestSnaps',
        params: {
          [snapId]: {},
        },
      });
      setIsSnapInstalled(true);
    } catch (error) {
      console.error('Failed to connect snap:', error);
      alert('Failed to connect snap. Make sure MetaMask Flask is installed and the snap is running.');
    }
  };

  const sendHello = async () => {
    try {
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
    }
  };

  return (
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
