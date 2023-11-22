import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "admin.shops": "Edit shops",
      "admin.categories":"Edit categories",
      "admin.add-product": "Add new product",
      "admin.edit-delete-product": "Edit/delete product",
      "nav.admin" :"Edit shops",
      "nav.shops" : "Our shops",
      "nav.contact" : "Contact us",
      "nav.cart" : "Cart",
      "nav.login" : "Login",
      "nav.signup" : "Signup",
      "nav.homepage" : "Homepage",
      "email": "E-mail",
      "password": "Password",
      "login": "Log in",
      "registreeru" : "Signup",
      "webshop" : "Webshop"

    }
  },
  ee: {
    translation: {
      "admin.shops": "Muuda pood",
      "admin.categories": "Muuda kategooriaid",
      "admin.add-product": "Lisa toode",
      "admin.edit-delete-product": "Muuda/kustuta toode",
      "nav.admin" :"Admin vaatesse",
      "nav.shops" : "Meie pood",
      "nav.contact" : "Kontakt",
      "nav.cart" : "Ostukorv",
      "nav.login" : "Logi sisse",
      "nav.signup" : "Registreeru",
      "nav.homepage" : "Avaleht",
      "email" : "E-post",
      "password": "Parool",
      "login": "Logi sisse",
      "registreeru" : "Registreeru",
      "webshop" : "Veebipood"
    
    }
  },

  es: {
    translation: {
      "admin.shops": "Cambiar de tienda",
      "admin.categories": "Cambiar categorías",
      "admin.add-product": "Agregar producto",
      "admin.edit-delete-product": "Cambiar/eliminar producto",
      "nav.admin" :"A la vista de administrador",
      "nav.shops" : "Nuestra tienda",
      "nav.contact" : "Contacto",
      "nav.cart" : "Carro de la compra",
      "nav.login" : "Acceso",
      "nav.signup" : "Inscribirse",
      "nav.homepage" : "Pagina de inicio",
      "email": "Correo electrónico",
      "password": "Contraseña",
      "login": "Iniciar sesión",
      "registreeru" : "Inscribirse",
      "webshop" : "Tienda en línea"
      
    }
  },

  no: {
    translation: {
      "admin.shops": "Bytt butikk",
      "admin.categories": "Endre kategorier",
      "admin.add-product": "Legg til produkt",
      "admin.edit-delete-product": "Endre/slette produkt",
      "nav.admin" :"Til Admin-visningen",
      "nav.shops" : "Butikken vår",
      "nav.contact" : "Kontakt",
      "nav.cart" : "Handlevogn",
      "nav.login" : "Logg Inn",
      "nav.signup" : "Melde deg på",
      "nav.homepage" : "Hjemmeside",
      "email": "E-post",
      "password": "Passord",
      "login": "Logg inn",
      "registreeru" : "Melde deg på",
      "webshop" : "Online-butikk"

    }
  },



};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;