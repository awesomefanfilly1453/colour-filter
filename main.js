function preload(){
    
}
function setup(){
  canvas =createCanvas(400,400);
    canvas.position(400,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_col="";
}

function draw(){
    image(video,0,0,400,400);
    tint(tint_col);

}
function filter_change(){
    tint_col=document.getElementById("box").value;
}
function take_snapshot(){
    save("elaine.png");
}