# React/Redux

Nous privilégions aujourd'hui React comme bibliothèque pour le frontend. Redux
est régulièrement utilisé pour gérer l'état de l'application, mais React peut
suffire sur une petite application : essayez de ne pas l'introduire s'il n'y en
pas besoin !

Il est TRÈS vivement conseillé de gérer les applis React via un gestionnaire de
paquets comme NPM ou Yarn (évitez l'utilisation de https://github.com/reactjs/react-rails
qui se révèle vite limité). Avec Rails 5, cela devrait être assez facile, avec
Rails 4 privilégiez une application séparée du backend.

## Redux State Vs Component State

Il n’existe pas de règle absolue pour savoir si l’on doit stocker les données
dans le state d’un composant ou dans Redux, tout se décide au cas par cas.

Néanmoins, une première approche basique qui marche plutôt bien est la
suivante&nbsp;:

- Donnée persistante (ex. les données d'un utilisateur) -> Redux
- Donnée éphémère (ex. l'état d'un filtre) -> Component State (à centraliser dans le composant le plus haut de la hiérarchie si cet état doit être partagé entre plusieurs composants)

Un avantage de Redux est qu’il fournit un store centralisé accessible de
n’importe où dans l’arborescence des composants. Néanmoins les mécanismes de
mise à jour peuvent être laborieux à mettre en place.

## Bibliothèques utiles

- [react](https://facebook.github.io/react/)
- [redux](http://redux.js.org/)
- [react-redux](https://github.com/reactjs/react-redux) : facilite le
  branchement de Redux à React
- [react-router](https://github.com/ReactTraining/react-router) : routeur côté
  frontend pour les "single-page application"
- [redux-thunk](https://github.com/gaearon/redux-thunk) : gestion des actions
  asynchrones via Redux (il en existe d'autres avec des paradygmes différents,
  non testés)
- [enzyme](http://airbnb.io/enzyme/) : facilite GRANDEMENT les tests des
  composants React

## Ressources

- [Doc de React](https://facebook.github.io/react/docs/hello-world.html)
- [Doc de Redux](http://redux.js.org/docs/basics/)
- [@dan_abramov](https://twitter.com/dan_abramov) : créateur de Redux, partage
  énormément (trop ?) de choses autour de React
- [Cours pour démarrer avec Redux](https://egghead.io/courses/getting-started-with-redux)
  par Dan Abramov
- [Cours plus avancés pour construire des applis React avec
  Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux),
  toujours par Dan Abramov
