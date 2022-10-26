const projects = [
  {
    langage: 'Rails',
    title:'Omniscience',
    date:'Juin 2021',
    description: `Premier projet de groupe, c'est un site pour upload ses vidéos. Projet réalisé par 4 novices qui venaient de découvrir le code depuis 2 mois. `,
    nbOfDeveloppers: 4,
    github: "https://github.com/HugoCalmels/Omniscience",
    link: "https://thp-omniscience.herokuapp.com/",
    tags: ["PostgreSQL","Bootstrap", "Devise", "Active storage"],
  },
  {
    langage: 'React',
    title:'Learnroom',
    date:'Septembre 2021',
    description: `Dernier projet de groupe, c'est une application pour créer/rejoindre des sessions avec comme thème : l'apprentissage du code. Nous proposons aussi un système de zones horaires ( timezones ) pour que chaque utilisateur puisse rejoindre un groupe avec les mêmes horaires de travail. `,
    nbOfDeveloppers: 4,
    github: "https://github.com/HugoCalmels/front-learn-room",
    link: "https://learnroom-v2.netlify.app/",
    tags: ["redux", "JWT-tokens", "REST API", "styled components"],
  },
 
  {
    langage: 'Rails',
    title:'Habits-Tracker',
    date:'Janvier 2022',
    description: `Premier réel challenge individuel. Une app pour check ses habitudes, avec des cycles horaires, et des requêtes lancées automatiquement depuis le serveur selon les cycles. Les statistiques des habitudes passées sont enregistrées sous forme de calendrier.`,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/Rails_Project_Habits_Tracker",
    link: "https://habits-tracker-plus.herokuapp.com/",
    tags: ["PostgreSQL", "Devise", "AJAX", "Heroku Scheduler"],
  },
  {
    langage: 'JavaScript',
    title:'Quizz',
    date:'Février 2022',
    description: `Exercice JS d'asynchrone. Exemple : si l'utilisateur demande 7 questions, "then" j'envoie une requête pour 7 questions. Utilisation de l'API "opentdb" pour recevoir une liste de questions.`,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/JS_Quizz",
    link: "https://quizz-js-plus.netlify.app/",
    tags: ["AnimeJS", "localStorage", "Asyncrhone"],
  },
  {
    langage: 'JavaScript',
    title:'Snake',
    date:'Mars 2022',
    description: `Jeu codé à la main sans librairies, sans framework, seulement du Javascript. Toutes les 0.3 secondes le serpent avance d'une case. Niveau animations je débutais, donc il va falloir être indulgent.`,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/JS_Snake",
    link: "https://snake-plus.netlify.app/",
    tags: ["Asynchrone", "Recursion", "Animations"],
  },
  {
    langage: 'React',
    title:'Images-App',
    date:'Avril 2022',
    description: `Exercice React, dans lequel on peut rechercher des images liées à une recherche grace à l'API unslpash. Il y a aussi un système de pagination.`,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/react-images-app",
    link: "https://image-app-plus.netlify.app/",
    tags: ["Asynchrone", "Animations"],
  },
  {
    langage: 'React',
    title:'Notepad',
    date:'Mai 2022',
    description: `Exercice React, dans lequel on peut poster des notes qui seront enregistrées dans le navigateur de l'utilisateur (localStorage). On peut utiliser le Markdown dans ses notes, en tapant par exemple : **Hello world**.`,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/react-notepad",
    link: "https://notepad-plus.netlify.app/",
    tags: ["localStorage", "react-showdown"],
  },
  {
    langage: 'React',
    title:'Clonebook',
    date:'Septembre 2022',
    description: `Mon projet phare. J'ai copié Facebook au pixel près, en fesant des appels à une API codée sur Ruby on Rails.
     Bien entendu les fonctionnalités sont limités, mais on peut poster du texte, des images, des commentaires, des likes.
     On peut aussi ajouter un utilisateur en ami, naviguer sur les profils des autres utilisateurs, et d'autres choses à découvrir.
    `,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/react-social-network-redux",
    link: "https://clonebook-super.netlify.app/",
    tags: ["redux-toolkit", "JWT-tokens", "REST API", "tests jest", "localStorage", "Cookies"],
  },
]


export default projects

