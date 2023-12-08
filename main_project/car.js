//initiate the Car Class
class Car{
    constructor(x, y, width, height){
        //define the car parameters
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        //define the car speed and direction based on physics
        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=4;
        this.friction=0.05;
        this.angel=0;

        this.controls=new Controls();
    }

    //Update the screen with the moving car object
    update(){
        //set controls for forward and backward
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }

        //Set the speed && the speed limits of the car
        if(this.speed> this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/3;
        }
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        //Set the controls for left and right
        //By modifying the car angel not just go to left or right side of the screen
        if(this.controls.right){
            this.angel-=0.03;
        }
        if(this.controls.left){
            this.angel+=0.-3;
        }

    
        this.y-=this.speed;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}