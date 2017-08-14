# HTML et (S)CSS

Le HTML et le CSS sont souvent les parents pauvres de nos applications :
compliqué à tester, compliqué à organiser, tout le monde n'a pas la même
expérience dans le domaine. Ce qui suit est une tentative de grouper un
ensemble de bonnes pratiques issu de nos expériences (respectives si possible).

Cette partie est très couplée (pour le moment) à mon expérience de React qui a
fait émerger chez moi de bonnes pratiques. Certains exemples utilisent ainsi la
syntaxe JSX mais les principes fondamentaux peuvent néanmoins être appliqués à
n'importe quel système.

## Déterminer des composants génériques

Le découpage en composants est indispensable pour développer une application
maintenable. React nous y pousse pas mal, mais il est toujours tentant de se
dire "cet élément n'est utilisé que dans cette partie de l'application, rien ne
sert de le rendre générique". Il faut déjà commencer par se poser la question
"est-ce que j'ai un composant générique à ma disposition pour gérer ce morceau
de l'application ?".

Voici un exemple simple utilisant des composants génériques : une modale de
confirmation de suppression.

```jsx
<Modal title="Confirmation de suppression">
  Êtes-vous sûr de vouloir supprimer cet élément ?
  <Button type="cancel" onClick={this.handleCancel}>Annuler</Button>
  <Button type="primary" onClick={this.handleSubmit}>OK</Button>
</Modal>
```

On voit dans cet exemple que deux composants sont utilisés : `Modal` et
`Button`. Les détails d'implémentation sont cachés dans les fichiers
correspondants respectifs. De cette manière, on est sûr que tous les boutons
auront la même tête partout dans l'application. Je déconseille généralement
d'ajouter des `class` sur des composants génériques car cela encourage le
styling au cas par cas, ce qui est beaucoup plus compliqué à maintenir.

L'idéal étant que l'application ne soit développée qu'à base de composants
génériques en évitant totalement le surchargement des `class`.

Pour avoir une liste de composants génériques, vous pouvez commencer par
regarder ce que définit les frameworks CSS tel que
[Bootstrap](http://getbootstrap.com/), c'est une bonne base pour commencer. Le
mieux reste tout de même de travailler avec un⋅e UI/UX designer qui va
imaginer les intéractions au sein l'application et va donc faire émerger des
composants réutilisables.

## La surcharge de `class`…

… parce que des fois on n'a pas le choix.

Je définis pour un certain nombre de composants des propriétés nommées `name`.
Par exemple :

```jsx
<Page name="todos">
  <List name="todos">
    { todos.map((todo) => (
      <ListItem key={todo.id}>
        {todo.label}
      </ListItem>
    ) }
  </List>
</Page>
```

On voit ici que les composants `Page` et `List` prennent une propriété `name`
en paramètre. Cela permet de générer à l'intérieur des composants eux-mêmes les
classes suivantes : `.page-todos` et `.list-todos`. Ainsi il est possible de
cibler facilement et sans trop de risque les composants et de les styler au cas
par cas.

## Organisation des fichiers (S)CSS

Afin de faciliter la maintenance du (S)CSS, il est important d'en organiser les
fichiers correctement.

Tout commence par un fichier que j'appelle généralement `application.scss` qui
ne contient quasiment que des `@include` d'autres fichiers scss. Il est
possible que j'y inclus aussi des règles très génériques telles que :

```scss
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}
```

Les `@includes` permettent de charger les autres fichiers SCSS qui sont séparés
en (environ) quatre catégories :

1. les fichiers dans `variables/` définissent les variables que l'on
   réutilisera partout dans le reste du code SCSS (ex. `colors`, `dimensions`)
2. les fichiers dans `utilities/` définissent des `@mixins` ou des classes CSS
   très génériques définissant des comportements (ex. des animations, des
   patterns visuels ou le chargement des fonts)
3. les fichiers dans `components/` contiennent le style des composants
   génériques, un fichier par composant. Il est important de bien les nommer et
   les séparer en évitant de les rendre dépendants les uns des autres.
4. enfin, les fichiers dans `app/` contiennent toute les surcharges de CSS et
   cas particuliers, un fichier par page de l'application par exemple. Si vous
   avez suivi, il est important qu'il y ait le moins de code possible ici !

## Éviter le markup superflu

Je n'utilise pas JSX ici pour mieux illustrer les soucis de markup, mais
partout où vous voyez des `<div>` dans cette section, vous pouvez imaginer des
composants à la place !

Il est très facile d'ajouter des balises `<div>` ou `<span>` un peu partout
dans le markup HTML pour arriver à nos fins. Par expérience, je préfère
toujours limiter le plus possible et cherche toujours à faire autrement. Il est
important que la `class` associée à la `<div>` ait un sens particulier. Par
exemple, si on cherche à mettre deux éléments sur la même ligne et que l'on a à
disposition une classe `.row`, il est tentant de l'utiliser :

```html
<div class="row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>
```

Mais est-ce la bonne solution ? Si les éléments sont bien distincts et que
`.row` a vraiment un sens ici (alignement de 3 **blocs** de texte par exemple),
peut-être bien oui. Si en revanche on cherche à mettre un petit crayon
d'édition à côté du texte à éditer par exemple, il y a peut-être plus simple :

```html
<div class="title editable">
  My title
  <a href="/edition">
    <i class="fa fa-pencil" />
  </a>
</div>
```

Cela demande un peu de pratique pour bien identifier quand on a besoin
d'encapsuler dans des `<div>` ou non, mais c'est souvent les mêmes patterns qui
émergent. Je conseille de d'abord réfléchir à comment limiter l'imbrication des
blocs et, si ce n'est vraiment pas possible, de bien réfléchir à ce que l'on
cherche à représenter (une ligne du layout, un élément d'une liste, un bouton
d'édition à coté de son texte, etc.).

## Ressources

- [Bootstrap](http://getbootstrap.com/)&nbsp;: reste aujourd’hui l’un des
  frameworks CSS les plus efficaces selon nous
- [Code Guide](http://codeguide.co/)&nbsp;: conseils pour développer du HTML et
  du CSS maintenables
- [7 Rules for Creating Gorgeous UI](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda)&nbsp;:
  un article présentant quelques conseils (subjectifs) pour créer de belles interfaces
