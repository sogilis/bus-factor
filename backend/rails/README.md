# Ruby on Rails (RoR)

Nous utilisons aujourd'hui Ruby on Rails comme framework backend par défaut.
Cela nous permet de démarrer rapidement nos projets tout en assurant une bonne
maintenance sur le long terme.

Nous le branchons la plupart du temps à une base de données de type PostgreSQL.

Nous l'avons utilisé principalement en version 4.x mais il faudrait à l'avenir
priviliégier la version 5.x, certaines gems listées ci-dessous pourraient par
conséquent se révéler inutiles.

## Gems conseillées

- [pg](https://bitbucket.org/ged/ruby-pg/wiki/Home) : interface pour la base
  PostgreSQL
- [jbuilder](https://github.com/rails/jbuilder) : DSL pour générer du JSON
  facilement (attention, sujet à des problèmes de performances)
- [oj](https://github.com/ohler55/oj) : sérialiseur de JSON plus performant
  que celui par défaut
- [devise](https://github.com/plataformatec/devise) : gestion de
  l'authentification (attention, c'est lourd !)
- [sorcery](https://github.com/Sorcery/sorcery) : alternative à devise, un peu
  plus pénible à mettre en place mais beaucoup plus léger
- [cancancan](https://github.com/CanCanCommunity/cancancan) : gestion des
  autorisations
- [delayed_job_active_record](https://github.com/collectiveidea/delayed_job_active_record) :
  gestion simple des jobs asynchrones
- [paperclip](https://github.com/thoughtbot/paperclip) : gestion des fichiers
- [haml-rails](http://haml.info/) : markup produisant du HTML

Pour le développement :

- [letter_opener](https://github.com/ryanb/letter_opener) : ouvre les mails
  de l'appli dans le navigateur au lieu de les envoyer
- [awesome_print](https://github.com/awesome-print/awesome_print) : "pretty
  print" des objets Ruby
- [aasm](https://github.com/aasm/aasm) : ajoute un système de machine à état
  aux classes Ruby
- [rails_best_practices](https://github.com/flyerhzm/rails_best_practices) :
  vérification de la qualité du code Rails
- [bullet](https://github.com/flyerhzm/bullet) : détection des requêtes de type
  N+1
- [traceroute](https://github.com/amatsuda/traceroute) : détection des routes
  inutilisées
- [brakeman](https://github.com/presidentbeef/brakeman) : détection des failles
  de sécurité (attention aux faux positifs)

Pour les tests :

- [rspec-rails](http://rspec.info/) : bibliothèque de Behaviour-Drive
  Development
- [factory_girl_rails](https://github.com/thoughtbot/factory_girl) : facilite
  la création de modèles pour les tests
- [timecop](https://github.com/travisjeffery/timecop) : facilite les tests
  basés sur le temps
- [json_matchers](https://github.com/thoughtbot/json_matchers) : validation des
  API JSON
- [faker](https://github.com/stympy/faker/) : génération de "fake data"

## Ressources

- [Rails Guides](http://guides.rubyonrails.org/) : pour bien commencer, les
  Rails Guides sont indispensables, notamment le "Getting Started"
- [Rails API](http://api.rubyonrails.org/) : un peu vieillot mais toujours à
  jour, indispensable
- [thoughbot, inc.](https://github.com/thoughtbot/) : ils produisent pas mal de
  gems cools et partagent pas mal de choses [sur leur blog](https://robots.thoughtbot.com/)
- [@dhh](https://twitter.com/dhh) : un peu LA référence Rails puisqu'il en est
  le créateur
