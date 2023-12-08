class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addKeyboardListeners();
    }
    #addKeyboardListeners(){
        //Using The '=>' instead of 'function()' To refers to This of Controls Class
        document.onkeydown=(event)=>{
            switch(event.key)
            {
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
            //Check for event caching the keys
            console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key)
            {
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
            //Check for event caching the keys
            console.table(this);
        }

    };
}