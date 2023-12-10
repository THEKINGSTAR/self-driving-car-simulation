//Lerp function
/*
Lerp, or Linear Interpolation, is a mathematical function
that returns a value between two others at a point on a linear scale.
Most commonly it's used for moving or changing values over a period of time
*/
    /*
    IN OTHER WORDS
    THE RETURN VALUE IS A OR B 
    DEPENDING ON  WHAT EVER T IS ZERO OR ONE
    */
function lerp(A, B, t){
    return (A + (B - A) * t);
}


//Segment Intersection
// Find the intersection with the sensors ray
function getIntersection(A, B, C, D){
    const tTop   = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
    const uTop   = (C.y - A.x) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
    const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

    if (bottom != 0) {
        const t = tTop / bottom;
        const u = uTop  / bottom;

        if(t >= 0 && t <= 1 && u <=1)
        {
            return {
                x:lerp(A.x , B.x, t),
                y:lerp(A.y, B.y, t),
                offset:t
            }
        }
        
    }
    return null;
}
