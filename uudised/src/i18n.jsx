import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "uudised": "News",
      "kontakt" : "Contact",
      "meist" : "About us",
      "ostukorv" : "Cart",
      "pealkiri" : "No news at the moment",
      "eesti uudised" : "Estonian News Today",
      "uudist pole" : "There is no news at the moment, we will add soon!",
      "võta-ühendust" : "Contact Us"
     
    }
  },
  es: {
    translation: {
      "uudised": "Noticias",
      "kontakt" : "Contacto",
      "meist" : "De nosotros",
      "ostukorv" : "Carro de la compra",
      "eesti uudised" : "Noticias Estonias",
      "uudist pole" : "No hay noticias por el momento, ¡las agregaremos pronto!",
      "võta-ühendust" : "Contáctenos"
      
    }
  },

  ee: {
    translation: {
      "uudised": "Uudised",
      "kontakt" : "Kontakt",
      "meist" : "Meist",
      "ostukorv" : "Ostukorv",
      "eesti uudised" : "Eesti Uudised",
      "uudist pole" : "Ühtegi uudist hetkel pole, lisame õige pea!",
      "võta-ühendust" : "Võta meiega ühendust"
      
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;