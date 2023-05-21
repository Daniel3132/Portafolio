import amazonas from "../assets/projects/amazonas.png"
import bookmark from "../assets/projects/bookmark.png"
import calculator from "../assets/projects/calculator.png"
import dailyBits from "../assets/projects/dailyBits.png"
import netnet from "../assets/projects/netnet.png"
import pokedex from "../assets/projects/pokedex.png"
import tiendita from "../assets/projects/tiendita.png"

export const projectsArray = [
  {
    name: "Pokedex on React",
    description: "A pokedex made with ReactJS where you can see the List of all Pokemon and some of their info. You will have to register (can login with Google or Facebook) to catch pokemons, give them a nickname and see a pokemon list on your profile screen.",
    photo: pokedex,
    repository: "https://github.com/Daniel3132/Pokedex-on-React",
    deployment: "https://pokedex-react-daniel3132.vercel.app",
  },
  {
    name: "Amazonas",
    description: "A copy of amazon made on ReactJS, CRUD on redux with firebase. A shopping car where you can add products , delete or modify to make a payment",
    photo: amazonas,
    repository: "https://github.com/Daniel3132/amazonas",
    deployment: "https://amazonas-daniel3132.vercel.app",
  },
  {
    name: "Bookmark",
    description: "Responsive Landing page Vanilla Javascript, HTML and CSS",
    photo: bookmark,
    repository: "https://github.com/Daniel3132/bookmark",
    deployment: "https://bookmark-mu.vercel.app",
  },
  {
    name: "Daily Bits",
    description: "An application where you can do a JavaScript test and your stats will be save on a server deployed on heroku, login auth with google and facebok by firebase, ReactJs, React-router-dom",
    photo: dailyBits,
    repository: "https://github.com/Daniel3132/daily-bits",
    deployment: "https://daily-bits-daniel3132.vercel.app",
  },
  {
    name: "Tiendita",
    description: "JS Vanilla ●CSS ●Heroku ● Request consumption with fetch or axios ● Perform product CRUD (Create, List, Modify, Delete) ● The main page loads the data of the products with images ● If a product is selected, the information detail of the same is displayed ● CRUD in the shopping cart ● Responsive Design",
    photo: tiendita,
    repository: "https://github.com/Daniel3132/tiendita",
    deployment: "https://tiendita-five.vercel.app",
  },
  {
    name: "Calculator Themes",
    description: "Calculator made with javascript vanilla, with three different themes, it save the last theme selected on local storage, styles on SASS",
    photo: calculator,
    repository: "https://github.com/Daniel3132/calculadora-themes",
    deployment: "https://calculadora-themes.vercel.app/",
  },
  {
    name: "Netnet",
    description: "A copy of Netflix where you can navigate across the details of movies and series that are filter by category, data deployed on heroku, styles on CSS.",
    photo: netnet,
    repository: "https://github.com/Daniel3132/Netnet",
    deployment: "https://netnet.vercel.app/",
  },
];