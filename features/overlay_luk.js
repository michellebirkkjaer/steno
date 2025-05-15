"use strict";

//indlæser html'en i DOM
document.addEventListener("DOMContentLoaded", () => {
    //finder id med overlayet der fylder hele skærmen
    const overlayBillede = document.getElementById("overlay_billede");

    if (overlayBillede) {
        //tilføjer en EventListener til hele overlayet - når brugeren trykker på overlayet vil funktionen køre
        overlayBillede.addEventListener("click", (event) => {
            //kun hvis brugeren trykker på overlayBillede og ikke eks. overlay_indtast_navn
            if (event.target === overlayBillede) {
                //når betingelsen er opfyldt (klik udenfor overlay_indtast_navn billedet) bliver overlayet hidden-atributten igen.
                overlayBillede.setAttribute("hidden", true);
            }
        });
    }
});