function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=roverimage;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=roverimage;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)   
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover.width,rover.height)   
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
keypressed=e.keycode;

if (keypressed=="38"){
up(); console.log("up")}

if (keypressed=="40"){
    down();console.log("down");}

 if (keypressed=="37"){
        left();console.log("left")}

        if (keypressed=="39"){
            right();console.log("right")}       
} 

function up(){
    if(rover_y >=0)
    rover_y-10;
    console.log("When up arrow is pressed, ="+rover_x+"-"+rover_y);
    uploadBackground;
    uploadwater;
    uploadrover;
}
function down(){
    if(rover_y=500)
    rover_y+10;
    console.log("When down arrow is pressed,x="+rover_x+"y="+rover_y );
    uploadBackground;
    uploadwater;
    uploadrover;
}
function left(){
    if(rover_x >=0)
    rover_x-10;
    console.log("When left arrow is pressed,x="+rover_x+"y="+rover_y );
    uploadBackground;
    uploadwater;
    uploadrover;  
}
function left(){
    if(rover_x<=700)
    rover_x+10;
    console.log("When right arrow is pressed,x="+rover_x+"y="+rover_y );
    uploadBackground;
    uploadwater;
    uploadrover;  
}       