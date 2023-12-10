/*
Control Class
responsible for the controls of the car throw the arrow keys
*/
class Controls{
    constructor(type){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        switch(type){
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward = true;
                break;
        }
    }
    
    #addKeyboardListeners(){
        //Using The '=>' instead of 'function()' To refers to This of Controls Class
        document.onkeydown=(event)=>{
            switch(event.key)
            {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            //Check for event it catching the keys
            //console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key)
            {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            //Check for event if it catching the keys
            //console.table(this);
        }
    }

}