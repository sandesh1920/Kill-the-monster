

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  block1=new Block(100,200,20)
  block2=new Block(300,400,20)
  block3=new Block(500,600,20)
  block4=new Block(700,800,20)
  block5=new Block(900,500,20)

}

function draw() {
  background(0);
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()

}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX , y: mouseY});

}

