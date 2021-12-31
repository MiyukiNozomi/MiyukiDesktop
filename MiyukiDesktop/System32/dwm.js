"use strict";
var StartMenu = /** @class */ (function () {
    function StartMenu() {
        this.Showing = false;
        this.startMenu = null;
    }
    StartMenu.prototype.onStartClick = function () {
        if (this.startMenu == null) {
            this.startMenu = document.getElementById("@SystemUI/Desktop/StartMenu");
        }
        if (this.startMenu == null) {
            //TODO give a BSOD
            alert("Debug Error! missing start menu");
            return;
        }
        if (this.Showing) {
            this.startMenu.style.display = "none";
        }
        else {
            this.startMenu.style.display = "block";
        }
        this.Showing = !this.Showing;
    };
    return StartMenu;
}());
