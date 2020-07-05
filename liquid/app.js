try{
    new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity:0.2,
    image1:"./topless-woman-with-eyes-close-1164980.jpg",
    image2:"./grayscale-photo-of-topless-woman-1164674.jpg",
    angle: Math.PI/4,
    speedIn:2,
    speedOut:5,
    displacementImage:"./stripe1.png"
});
}
catch(exception){
    console.log(exception);
}
