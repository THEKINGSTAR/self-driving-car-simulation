/*
Road class
responsible of creating the road and boarder of it for the car and the sensors
*/
class Road{
    constructor(x, width, laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;


        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000;
        this.top=-infinity;
        this.bottom=infinity;

        const topLeft={x:this.left , y:this.top};
        const topRight={x:this.right , y:this.top};
        const bottomLeft={x:this.left , y:this.bottom};
        const bottomRight={x:this.right , y:this.bottom};

        //MAKE THE BORDERS OF THE ROAD
        this.borders=[
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];
    }

    //function to get the center of lane
    getLaneCenter(laneIndex){
        const laneWidth = this.width / this.laneCount;
        return (this.left+laneWidth / 2 + 
        Math.min(laneIndex , this.laneCount -1) * laneWidth);
    }

    //DRAW THE ROAD AND THE LANE
    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        for(let i = 1; i <= this.laneCount-1; i++){
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            //Add dashes to the middle line
            ctx.setLineDash([20,20]);

            //SET THE START OF THE LANE AND ITS EXTENDED
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();

        }
        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
    }
}
