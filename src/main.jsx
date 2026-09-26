import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Chunk Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#1E1E1E',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'monospace'
        }}>
          <div style={{
            backgroundColor: '#C6C6C6',
            border: '4px solid #373737',
            padding: '24px',
            maxWidth: '600px',
            color: '#000000',
            boxShadow: 'inset -4px -4px 0px 0px #555555, inset 4px 4px 0px 0px #FFFFFF'
          }}>
            <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#B00000' }}>
              ⚠️ YOU DIED! (Chunk Rendering Exception)
            </h1>
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              {this.state.error?.message || "An unexpected block glitch occurred."}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#4DA239',
                color: '#ffffff',
                border: '3px solid #1b3814',
                padding: '8px 16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              RESPAWN (RELOAD WORLD)
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
