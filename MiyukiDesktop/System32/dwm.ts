class StartMenu {
    public Showing : boolean = false;
    public startMenu : HTMLElement | null = null;
    
    public onStartClick() {
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
        } else {
            this.startMenu.style.display = "block";
        }
    
        this.Showing = !this.Showing;
    }
}