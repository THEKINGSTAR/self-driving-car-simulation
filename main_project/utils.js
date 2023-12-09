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