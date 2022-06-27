import { dataLanguage } from "../dataLanguage";

export const converDate = (createdAt) => {
  const d = new Date(createdAt);
  const date =
    (d.getUTCDay() < 10 ? "0" + d.getUTCDay() : d.getUTCDay()) +
    "/" +
    (d.getUTCMonth() < 10 ? "0" + d.getUTCMonth() : d.getUTCMonth()) +
    "/" +
    d.getUTCFullYear();
  return date;
};

export const frFormat = (number, index) => {
  return [
    ["à l'instant", "dans un instant"],
    ["il y a %s secondes", "dans %s secondes"],
    ["il y a 1 minute", "dans 1 minute"],
    ["il y a %s minutes", "dans %s minutes"],
    ["il y a 1 heure", "dans 1 heure"],
    ["il y a %s heures", "dans %s heures"],
    ["il y a 1 jour", "dans 1 jour"],
    ["il y a %s jours", "dans %s jours"],
    ["il y a 1 semaine", "dans 1 semaine"],
    ["il y a %s semaines", "dans %s semaines"],
    ["il y a 1 mois", "dans 1 mois"],
    ["il y a %s mois", "dans %s mois"],
    ["il y a 1 an", "dans 1 an"],
    ["il y a %s ans", "dans %s ans"],
  ][index];
};

export const translate = (type, value, language = "fr") => {
  return dataLanguage[language][type][value];
};

export const convertMonth = [
  "Jan.",
  "Fev.",
  "Mars",
  "Avr.",
  "Mai",
  "Juin",
  "Juil",
  "Aout",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
