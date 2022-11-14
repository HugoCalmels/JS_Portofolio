const projects = [
  {
    langage: 'React',
    title:'Learnroom',
    date:'Septembre 2021',
    description: `C'est une application pour créer/rejoindre des sessions avec comme thème : l'apprentissage du code. Nous proposons aussi un système de zones horaires ( timezones ) pour que chaque utilisateur puisse rejoindre un groupe avec les mêmes horaires de travail. Projet de groupe, réalisé lors du bootcamp "The Hacking Project".`,
    nbOfDeveloppers: 4,
    github: "https://github.com/HugoCalmels/front-learn-room",
    link: "https://learnroom-v2.netlify.app/",
    tags: ["redux", "JWT-tokens", "Rails API", "styled components", "JavaScript", "React"],
  },
 
  {
    langage: 'Rails',
    title:'Habits-Tracker',
    date:'Janvier 2022',
    description: `Premier réel challenge individuel. Une application pour check ses habitudes, avec des cycles horaires, et des requêtes lancées automatiquement depuis le serveur selon les cycles. Les statistiques des habitudes passées sont enregistrées selon le cycle choisi, elles sont ensuite publiées sous forme de calendrier.`,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/Rails_Project_Habits_Tracker",
    link: "https://habits-tracker-plus.herokuapp.com/",
    tags: ["PostgreSQL", "Devise", "AJAX", "Heroku Scheduler", "JavaScript", "Rails"],
  },
  {
    langage: 'React',
    title:'Clonebook',
    date:'Septembre 2022',
    description: `J'ai copié chaque élément et chaque fonctionnalité de Facebook au pixel près, avec Rails en back-end (API) et React en front-end.
     Bien entendu les fonctionnalités sont limités, mais on peut poster du texte, des images, des commentaires, des likes.
     On peut aussi ajouter un utilisateur en ami, naviguer sur les profils des autres utilisateurs, et d'autres choses à découvrir.
    `,
    nbOfDeveloppers: 1,
    github: "https://github.com/HugoCalmels/react-social-network-redux",
    link: "https://clonebook-super.netlify.app/",
    tags: ["redux-toolkit", "JWT-tokens", "tests jest", "localStorage", "Cookies", "React", "JavaScript", "Rails API"],
  },
]


export default projects

