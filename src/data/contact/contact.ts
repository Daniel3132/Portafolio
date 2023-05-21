import LinkedIn from "../../assets/contact/LinkedIn.png";
import Whatsapp from "../../assets/contact/Whatsapp.png";
import email from "../../assets/contact/email.png";
import gitHub from "../../assets/contact/gitHub.png";
import { mensajeWp } from './mensajeWp';

export const contactArray = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/daniel-correa-zambrano/",
    img: email
  },
  {
    name: "E-mail",
    url: "mailto:danielcorrea3131@gmail.com",
    img: gitHub
  },
  {
    name: "GitHub",
    url: "https://github.com/Daniel3132",
    img: LinkedIn
  },
  {
    name: "Whastapp",
    url: `https://wa.me/+573006300557?text=${mensajeWp}`,
    img: Whatsapp
  }
]