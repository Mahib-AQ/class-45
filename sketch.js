var bg;
var basket, basketI;
var edges;

function preload() {

    bg = loadImage("images/amin.jpg");
    basketI = loadImage("images/basket2.png");
}

function setup(){
 createCanvas(500,725);
    
    basket = createSprite(250,675,20,15);
    basket.addImage(basketI);
}

function draw(){
    background(bg);

  edges =  createEdgeSprites();

    if(keyIsDown(LEFT_ARROW)){

        basket.x = basket.x - 10

    }

    if(keyIsDown(RIGHT_ARROW)){

        basket.x = basket.x + 10

    }

    basket.collide(edges[1]);  
    basket.collide(edges[0]);
   
    drawSprites();
}

