# TIC TAC TOE

Cette application de tic tac toe à été mise en place dans un contexte de cours sur le CICD.
Vous retrouverez une application crée en React avec une mise en place de de CD sur Jenkins et de CI sur github action.

## Lien en production

- https://tictactoe-app.herokuapp.com/
- http://51.158.125.216:8080/

## Installation du projet

Etape pour lancer le projet.

- npm install
- http://localhost:3000/

## Fonctionnement du projet

La branche principale du projet est la branche _main_ qui est protégée et _nécessite des approbations_ avant de pouvoir y effectuer des fusions (merges). Avant de pouvoir effectuer le merge, une CI github action va être lancé afin de faire divers tests.

Le fonctionnement est similaire pour la branche develop.

Afin de créer une nouvelle feature, fix un bug, ajouter de la docs, il est nécéssaire de partir de la branch develop qui doit être à jour.

Nous utilisons une stratégie de création de branches soigneusement planifiée pour maintenir un flux de travail organisé et éviter les conflits de fusion. Cette stratégie est également conçue pour produire une intégration continue fiable.

### Fonctionnement des branch

La démarche à suivre pour créer une branch est la suivante :

- feature: Ajout d’une nouvelle fonctionnalité;
- bugfix: Correction d’un bug;
- hotfix: Correction d’un bug critique;
- chore: Nettoyage du code;
- experiment: Expérimentation de fonctionnalités.

Pour rappel, il faut se baser sur la branch develop avant de créer la nouvelle branch en question.

### Fonctionnement des commit

La démarche à suivre pour rédiger ses commits :

- feat: Ajout d’une nouvelle fonctionnalité;
- fix: Correction d’un bug;
- build: Changement lié au système de build ou qui concerne les dépendances (npm, grunt, gulp, webpack, etc.).
- ci: Changement concernant le système d’intégration et de déploiement continu (Jenkins, Travis, Ansible, gitlabCI, etc.)
- docs: Ajout ou modification de documentation (README, JSdoc, etc.);
- perf: Amélioration des performances;
- refactor: Modification n’ajoutant pas de fonctionnalités ni de correction de bug (renommage d’une variable, suppression de code redondant, simplification du code, etc.);
- style: Changement lié au style du code (indentation, point virgule, etc.);
- test: Ajout ou modification de tests;
- revert: Annulation d’un précédent commit;
- chore: Toute autre modification (mise à jour de version par exemple).
