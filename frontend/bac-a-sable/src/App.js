import React, { Component } from 'react';
import Button from './components/Button';
import ComponentPresenter from './components/ComponentPresenter';
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

          <div className="component">
            <ComponentPresenter
              component={Button}
              componentName="Button"
              componentProps={{
                type: 'primary',
                onClick: () => alert('Hello, World!'),
                children: 'Bouton principal',
              }}
            />

            <ComponentPresenter
              component={Button}
              componentName="Button"
              componentProps={{
                type: 'secondary',
                onClick: () => alert('Hello, World!'),
                children: 'Bouton secondaire',
              }}
            />

            <ComponentPresenter
              component={Button}
              componentName="Button"
              componentProps={{
                type: 'secondary',
                onClick: () => alert('Hello, World!'),
                icon: 'ship',
                children: 'Bouton avec icône',
              }}
            />

            <ComponentPresenter
              component={Button}
              componentName="Button"
              componentProps={{
                type: 'danger',
                onClick: () => window.confirm('Êtes-vous sûr ?'),
                children: 'Bouton danger',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
