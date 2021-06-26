canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car3_width=100;
car3_height=90;
background_image="race track.jpg";
car3_image="car3.png";
car3_x=10;
car3_y=10;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car3_imgTag = new Image();
    car3_imgTag.onload = uploacar;
    car3_imgTag.src = car_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadcar(){
    ctx.drawImage(car_imgTag,car3_x,car3_y,car3_width,car3_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");

    }
    if(keyPressed=='40'){
        down();
        console.log("down"); 
    }
    if(keyPressed=='37'){
        left();
        console.log("left"); 
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}