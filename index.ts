/* 
    Un client a eut des échanges par téléphone ET email avec plusieurs conseillers.
    Les échanges (datés) sont rangés dans deux listes : 
    
    * une pour les échanges par téléphone, 
    * l'autre pour les échanges par mail.

    Entrée : les deux listes (appels, mails)
    Sortie : les noms 5 derniers conseillers avec qui le client a été 
    en communication (soit par mail, soit par téléphone)
    Sortie (bonus): on veut les 5 derniers conseillers et pas seulement leurs noms

    Liens utilies : 

    * Documentation moment.js : https://momentjs.com/docs
    * Fonction sort : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    * ...

    Lancer le script avec la commande : node index.ts
*/
import { calls, emails, Communication } from './inputs';

const dateA = calls[0].date;
const dateB = calls[1].date;
console.log('Date A < Date B ? ', dateA.isBefore(dateB));

console.log('Appels -----------------');
for (const call of calls) {
  console.log(`- ${call}`);
}

console.log('Emails -----------------');
for (const email of emails) {
  console.log(`- ${email}`);
}
