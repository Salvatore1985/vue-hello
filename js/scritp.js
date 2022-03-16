/**
 * Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data, magari volendo sperimentare anche prendendola da un input.
 */
console.log("Prova ", Vue)
const root = new Vue(
    {
        el: "#root",
        data: {
            message: "Inserisci il link di un immagine presa dal Web",
            img: "",
        },

    }
);