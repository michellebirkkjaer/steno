"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const overlayBillede = document.getElementById("overlay_billede");

    if (overlayBillede) {
        overlayBillede.addEventListener("click", (event) => {
            if (event.target === overlayBillede) {
                overlayBillede.setAttribute("hidden", true);
            }
        });
    }
});