import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="container">
            <h1>Bac à sable</h1>
            <a href="https://sogilis.github.io/bus-factor/">Retour à Bus Factor</a>
          </div>
        </div>
        <div className="app-content">
          <div className="container">
            <p>
              Vous trouverez ici une sélection de composants réutilisables pour vos propres projets. Le code source <a href="https://github.com/sogilis/bus-factor">est disponible sur GitHub</a>.
            </p>
          </div>

          <div className="container">
            <div className="component">
              <h2>Button.js</h2>
              <Button type="primary" onClick={() => alert('Hello, World!')}>
                Bouton principal
              </Button>
              <Button type="secondary" onClick={() => alert('Hello, World!')}>
                Bouton secondaire
              </Button>
              <Button type="danger" onClick={() => window.confirm('Êtes-vous sûr ?')}>
                Bouton danger
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
