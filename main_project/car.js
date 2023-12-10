/* 
car Class contain the car with its corresponding attributes
for its functionality 
*/

//initiate the Car Class
class Car{
    constructor(x, y, width, height){
        //define the car parameters
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //define the car speed and direction based on physics
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.sensor = new Sensors(this);
        this.controls = new Controls();
    }

    //Update the screen with the moving car object
    update(roadBorders){
       this.#move();
       this.sensor.update(roadBorders);
        }

        //Move method conation the car move by keys logic
        #move(){
             //set controls for forward and backward
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        //Set the speed && the speed limits of the car
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed <- this.maxSpeed/2){
            this.speed =- this.maxSpeed/3;
        }
        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }


        //SET THE DIRECTION OF THE WHEEL BASE ON THE DIRECTION OF THE CAR
        if(this.speed != 0){
            const flip = this.speed > 0 ? 1 : -1;
            /*
            Set the controls for left and right
            By modifying the car angle not just go to left or right side of the screen
            */
            if(this.controls.left){
                this.angle+=0.03 * flip;
            }
            if(this.controls.right){
                this.angle-=0.03 * flip;
            }
        }
        /*
        MAKE THE CAR MOVE IN THE DIRECTION OF THE ROTATION BASE ON 
        SIN OR COS OF THE ANGLE TO THE (ZERO, ZERO) AXIS
        */
        this.x-=Math.sin(this.angle) * this.speed;
        this.y-=Math.cos(this.angle) * this.speed;

    }
    //Draw the canvas and the car on it
    draw(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );

        ctx.fill();

        ctx.restore();
        
        this.sensor.draw(ctx);
    }
}