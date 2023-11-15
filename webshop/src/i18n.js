import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin.shops": "Edit shops",
      "admin.categoriess":"Edit categories",
      "admin.add-product": "Add new product",
      "admin.edit-delete-product": "Edit/delete product",
      "nav.admin" :"Edit shops",
      "nav.shops" : "Our shops",
      "nav.contact" : "Contact us",
      "nav.cart" : "Cart",
      "nav.login" : "Login",
      "nav.signup" : "Signup"

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
    }
  }
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