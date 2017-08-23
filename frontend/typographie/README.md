# Typographie

Dans cette partie, nous allons parler de typographie. Les règles et guides qui
suivent sont grandement tirés de [betterwebtype.com](https://betterwebtype.com/)
qui est un cours en ligne à raison de une leçon par jour pendant 10 jours. Il est
grandement conseillé de suivre ce cours si vous souhaitez approfondir les
sujets qui seront survolés ici. Il en existe aussi [une version eBook](https://betterwebtype.com/web-typography-book)
qui va encore plus loin mais qui est payante.

Et non, nous ne sommes pas affiliés à Matej Latin, l’auteur de ce cours&nbsp;!

Notons que nous ne sommes aucunement expert en typographie, il s’agit seulement
ici de lister un certain nombre de bonnes pratiques à appliquer dès qu’on fait
du web frontend. Par conséquent, on s’adresse ici plutôt à des développeurs
qu’à des designers&nbsp;!

## Pourquoi faire attention à la typographie

Sur Internet, hormis lorsque vous regardez des vidéos de chatons ou lorsque
vous jouez avec le petit dinosaure dans Google Chrome, il y a de bonnes chances
que vous passiez le plus clair de votre temps à lire. La typographie, c’est
l’art de mettre le texte en forme. Cela englobe plusieurs sujets, du choix de
la police d’écriture, au bon usage des caractères à disposition en passant par
l’aération du texte.

S’il s’agit d’un «&nbsp;art&nbsp;», il s’agit aussi en quelque sorte d’une
science. En effet, il existe plusieurs règles qui permettent de s’assurer de la
lisibilité et de la qualité du texte&nbsp;; car c’est de ça qu’il s’agit, la
typographie, c’est un peu le coding style du texte.

Enfin, les utilisateurs sauront faire la différence entre un texte bien
présenté, respectant un certain nombre de règles typographiques, d’un texte
pour lequel aucun effort n’aura été fait.

## Les ratios du paragraphe parfait

Matej Latin nous parle du triangle équilatéral du paragraphe parfait. Il s’agit
en fait de la bonne adéquation de trois valeurs :

- la taille du texte
- la longueur des lignes
- la hauteur des lignes

Si l’une de ces trois valeurs vient à être modifiée, il y a de bonnes chances
que les deux autres soient aussi impactées.

Afin que le texte soit lisible sur ordinateur, il est généralement conseillé de
choisir une taille de police se situant entre 18 et 22px. Sur téléphone, comme
l’écran se trouve plus proche des yeux, on choisira plutôt une valeur de 16px.
Cela permet de s’assurer que le texte reste lisible même à une certaine
distance des écrans. Fini donc les valeurs de 11px illisibles&nbsp;!
Attention, le choix de la police peut influer sur sa taille car certaines sont
de base plus petites que d’autres.

La longueur des lignes joue aussi sur la fatigue occulaire&nbsp;: plus une
ligne est longue, plus l’oeil aura du mal à la suivre. Au contraire, si une
ligne est trop courte, le fait de faire énormément d’aller-retour avec l’oeil
peut aussi être fatiguant. Ici il est généralement recommandé une longueur de
ligne se situant entre 45 et 75 caractères, en incluant les espaces.

> C’est très peu&nbsp;! Que faire de l’espace vide&nbsp;?

C’est souvent ce que l’on se dit en voyant les énormes colonnes vides entourant
notre texte. Ici nous n’avons pas de solution magique mais rappelez-vous qu’il
vaut mieux un texte lisible avec beaucoup de vide autour qu’un texte illisible
prenant toute la place à l’écran. Ensuite, on parle bien uniquement des
paragraphes de texte, cela vous laisse la place pour insérer une colonne
de navigation ou encore des infos supplémentaires sur le texte (ex. auteur,
date de publication, avatar, etc.). Et puis franchement, qui a besoin d’un
écran avec une résolution de plus de 800x600&nbsp;?

Pour terminer, la hauteur des lignes va jouer sur la capacité de l’oeil à
rattraper le début de la ligne suivante. Un coefficient se situant entre 1.3 et
1.6 par rapport à la taille du texte est recommandé.

Il ne s’agit que de conseils, souvent on choisit un peu ces valeurs «&nbsp;à
l’oeil&nbsp;». Si vous souhaitez vous entraîner, vous pouvez [jouer à ce petit
jeu](https://betterwebtype.com/triangle).

## Choisir une police d’écriture (quand on n’y connait rien)

Le choix de la police est très subjectif et va beaucoup jouer sur l’identité
visuelle du site ou de l’application que vous développez. Vous pourriez passer
des heures à naviguer sur [Google Fonts](https://fonts.google.com/) pour au
final faire un choix que personne n’osera vous dire qu’il est ignoble, en
particulier si vous faites partie des gens qui trouvent que le Comic Sans MS
est «&nbsp;fun&nbsp;». Non, ce n’est pas fun. Du tout.

Par défaut, les navigateurs affichent généralement une police de type
serif (càd. avec empattement, voir [l’article Wikipédia pour plus de
détails](https://fr.wikipedia.org/wiki/Empattement_(typographie)), comme Times
New Roman. Nous vous conseillons de tout de suite choisir une police de type
sans-serif qui sera beaucoup plus lisible sur un support web. Et sans aller
forcément dans un visualiseur de polices, pourquoi ne pas commencer par se
contenter d’un petit `font-family: sans-serif;`&nbsp;?

Évidemment ce choix est (un poil) radical, on peut aussi établir une liste de
polices dans laquelle aller piocher. La liste suivante est tirée de l’article
[7 Rules for Creating Gorgeous UI](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda)&nbsp;:

- [Ubuntu](http://www.google.com/fonts/specimen/Ubuntu)
- [Open Sans](http://www.google.com/fonts/specimen/Open+Sans)
- [Bebas Neue](http://fontfabric.com/bebas-neue/)
- [Montserrat](http://www.google.com/fonts/specimen/Montserrat)
- [Raleway](http://www.google.com/fonts/specimen/Raleway)
- [Cabin](http://www.google.com/fonts/specimen/Cabin)
- [Lato](http://www.google.com/fonts/specimen/Lato)
- [PT Sans](http://www.google.com/fonts/specimen/PT+Sans)

Une autre solution est de se reposer sur les polices dites
«&nbsp;systèmes&nbsp;», c’est-à-dire d’utiliser la même police que celle
utilisée par défaut par le système d’exploitation. L’avantage est que
l’application s’intègrera mieux à l’environnement de votre visiteur. De plus en
plus de sites utilisent cette méthode, notamment GitHub, Medium ou encore
Wordpress. Vous pouvez en avoir un article plus détaillé sur [css-tricks](https://css-tricks.com/snippets/css/system-font-stack/)
par exemple. Et pour le code, voici la version utilisée par Medium et
Wordpress&nbsp;:

```css
body {
  font-family: -apple-system,
               BlinkMacSystemFont,
               "Segoe UI",
               Roboto,
               Oxygen-Sans,
               Ubuntu,
               Cantarell,
               "Helvetica Neue",
               sans-serif;
}
```

En vérité le choix de la police va principalement être impacté par le but du
site (longs articles à lire ou scan rapide) et du type de texte (articles
d’actualité, de blog, de la poésie).

Notez que si vous tenez à utiliser une font web (incluse via la règle CSS
`@font-face`) vos visiteurs feront probablement face au FOUT (Flash Of Unstyled
Text)&nbsp;: le texte s’affichera d’abord avec une police disponible sur
l’ordinateur du visiteur en attendant que la font web soit téléchargée, ce qui
génère une sorte de flash et à tendance à être très désagréable.

Dernier conseil&nbsp;: évitez d’utiliser plusieurs polices d’écriture
différentes si vous ne savez pas lesquelles s’accordent bien ensemble. Une
unique police a tendance à être bien plus élégante.

## Le rythme horizontal

Il y a deux choses à noter ici.

Tout d’abord, en web, ne justifiez jamais le texte. Les navigateurs le gèrent
très mal en adaptant en général les espaces entre les mots. La conséquence est
que l’espace entre les mots est très irrégulier d’une ligne à l’autre et la
lecture en devient plus difficile.

Ensuite, évitez aussi d’utiliser la règle `letter-spacing` en CSS. De la même
manière que la justification du texte, écarter les lettres peut avoir un gros
impact sur la lisibilité du texte. Les seules fois où il peut être judicieux
d’utiliser cette règle, c’est sur les titres qui sont en général gros et en
gras. Dans ce cas-là la lisibilité peut être améliorée… mais n’en abusez pas
pour autant&nbsp;!

## Le rythme vertical

Le rythme vertical du texte doit se baser sur une grille proportionnelle à la
hauteur des lignes. En partant sur une taille de texte de 20px, une hauteur de
ligne de 30px et une largeur de 600px, vous pouvez définir votre grille avec
des lignes de hauteur 30px. Tout y passe&nbsp;: espacement entre les lignes
évidemment, espacement entre les paragraphes, les listes, les titres, etc.
Cette grille doit permettre au cerveau de s’habituer à voir le même
«&nbsp;motif&nbsp;» et donc de se concentrer sur le texte, pas sur sa forme.

Par exemple, si vous souhaitez placer un titre dans votre grille, il est
important qu’il se trouve plus proche du paragraphe qui suit que celui qui
précède&nbsp;: la marge du haut doit être plus grande que celle du bas. En
ergonomie on parle de «&nbsp;groupement&nbsp;». Ainsi il est possible de
définir les valeurs suivantes pour styler votre titre&nbsp;:

```css
line-height: 60px;   /* 2x30px */
margin-top: 90px;    /* 3x30px */
margin-bottom: 30px; /* 1x30px */
```

Cette grille doit rester un guide, pas une règle absolue. Par exemple les
images ne se calent pas forcément dans cette grille et vous n’aller pas les
tordre pour les y faire passer. Laissez faire.

## Quelques caractères typographiques

Pour terminer, voici une petite liste non exhaustive de caractères
typographiques que vous pouvez utiliser si vous souhaitez suivre [le code
typographique français](https://fr.wikipedia.org/wiki/Lexique_des_r%C3%A8gles_typographiques_en_usage_%C3%A0_l%27Imprimerie_nationale)
publié par l’Imprimerie nationale.

- espace insécable (` `, `&nbsp;`) et espace fine insécable (` `, `&#x202F;`),
  <étalage-de-science>d’ailleurs on dit *une* espace lorsqu’il s’agit du caractère</étalage-de-science>
  [[en savoir plus](https://fr.wikipedia.org/wiki/Espace_ins%C3%A9cable)]
- points de suspension (`…`, `&hellip;`) [[en savoir plus](https://fr.wikipedia.org/wiki/Points_de_suspension)]
- tiret long ou cadratin (`—`, `&mdash;`)
- tiret moyen ou demi-cadratin (`–`, `&ndash;`)
- trait d’union/signe moins (`-`) [[en savoir plus (tirets)](https://fr.wikipedia.org/wiki/Tiret)]
- apostrophe typographique (`’`, `&rsquo;`) [[en savoir plus](https://fr.wikipedia.org/wiki/Apostrophe_(typographie))]
- guillemets (`«` et `»`, `&laquo;` et `&raquo;`) [[en savoir plus](https://fr.wikipedia.org/wiki/Guillemet)]
