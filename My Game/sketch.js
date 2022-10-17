var bg1;
var PCImg, NPCImg;
var pc, npc;

function preload() {
    bg1 = loadImage("Background.gif");
    PCImg = loadImage("PC.png");
    NPCImg = loadImage("NPC2.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    pc = createSprite(width / 4 - 150, height - 75);
    pc.addImage("pc", PCImg);
    pc.scale = 0.5;

    npc = createSprite(width / 2 + 530, height - 75);
    npc.addImage("npc", NPCImg);
    npc.scale = 0.4;

}

function draw() {
    background(bg1)

  
    if (keyIsDown(UP_ARROW)) {
        pc.y=pc.y-10;
    }




    drawSprites();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



