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

        for(let i = 0; i <= this.laneCount; i++){
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            //Add dashes to the middle line
            if(i>0 && i<this.laneCount){
                ctx.setLineDash([20,20]);
            }else{
                ctx.setLineDash([]);
            }
            //SET THE START OF THE LANE AND ITS EXTENDED
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
    }
}
