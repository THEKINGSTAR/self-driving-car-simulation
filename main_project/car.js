/* 
car Class contain the car with its corresponding attributes
for its functionality 
*/

//initiate the Car Class
class Car{
    constructor(x, y, width, height, controlType, maxSpeed = 3){
        //define the car parameters
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //define the car speed and direction based on physics
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = maxSpeed;
        this.friction = 0.05;
        this.angle = 0;
        this.damaged = false;

        //MAKE THE SENSORS WORK ONLY FOR OUR CAR
        if(controlType != "DUMMY"){
            this.sensor = new Sensors(this);
        }
        this.controls = new Controls(controlType);
    }

    //Update the screen with the moving cars objects
    update(roadBorders, traffic){
        if(!this.damaged){
        this.#move();
        this.polygon = this.#createPolygon();
        this.damaged = this.#assessDamage(roadBorders, traffic);
        }
        if(this.sensor){
            this.sensor.update(roadBorders, traffic);
        }
    }
    
    //To get the car corner points and to asses if there is collision
    //with the road and based on that if the car is damaged
    #assessDamage(roadBorders, traffic){
        for (let i = 0; i < roadBorders.length; i++) {
            if (polysIntersect(this.polygon, roadBorders[i])) {
                return true;                
            }
        }
        for (let i = 0; i < traffic.length; i++) {
            if (polysIntersect(this.polygon, traffic[i].polygon)) {
                return true;                
            }
        }

        return false;
    }
        //Get the card corners From the center of the car
        #createPolygon(){
            const points = [];
            const rad = Math.hypot(this.width , this.height) / 2;
            const alpha = Math.atan2(this.width, this.height);

            points.push({
                x:this.x - Math.sin(this.angle - alpha) * rad ,
                y:this.y - Math.cos(this.angle - alpha) * rad 
            });
            points.push({
                x:this.x - Math.sin(this.angle + alpha) * rad,
                y:this.y - Math.cos(this.angle + alpha) * rad
            });
            points.push({
                x:this.x - Math.sin(Math.PI + this.angle - alpha) * rad,
                y:this.y - Math.cos(Math.PI + this.angle - alpha) * rad
            });
            points.push({
                x:this.x - Math.sin(Math.PI + this.angle + alpha) * rad,
                y:this.y - Math.cos(Math.PI + this.angle + alpha) * rad
            });

            return points;
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
        if(this.speed <- this.maxSpeed / 2){
            this.speed =- this.maxSpeed / 2;
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
    draw(ctx, color){
        //Change the car color if the car is damaged
        if(this.damaged){
            ctx.fillStyle = "gray";
        }else{
            ctx.fillStyle = color;
        }

        ctx.beginPath();
        ctx.moveTo(this.polygon[0].x, this.polygon[0].y);

        for (let i = 1; i < this.polygon.length; i++) {
            ctx.lineTo(this.polygon[i].x, this.polygon[i].y);
        }
        
        ctx.fill();

        if(this.sensor){
            this.sensor.draw(ctx);
        }
    }
}