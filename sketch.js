
const
Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;
Mouse = Matter.Mouse;
MouseConstraint = Matter.MouseConstraint;

var engine, world;

var ground;

var tower1, tower2;

var dragBody;

var con;

var released;

var attempts, score;

const maxAttempts = 6;

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  tower1 = new Tower(860, 480);
  tower2 = new Tower(1200, 400);

  dragBody = new DragBody(400, 400);

  ground = new Ground(800, 780, 1600, 40, [139,69,19]);

  con = new Slingshot(dragBody.body, 100, 0, {x:0, y:0}, {x:400, y:400});

  birdReleased = false;

  attempts = 0;
  score = 0;

  Engine.run(engine);
}

function draw()
{
  background(25);
  
  ground.display();
  
  dragBody.display();
  
  tower1.display();
  tower2.display();

  dragBody.display();

  con.drawLine([45, 23, 11], 10);

  fill("white");
  textAlign(CENTER);
  textSize(50);
  text("Attempts: " + attempts + "/" + maxAttempts + " used", width/2, height/5);
  text("Score: " + score + "/32", width/2, height*2/5);

  if (con.bodyReleased && (dragBody.body.speed <= 2 || (dragBody.body.position.x > width || dragBody.body.position.x < 0 || dragBody.body.position.y > height || dragBody.body.position.y < 0)))
  {
    text("Space to reset.", width/2, height*4/5);
  }
}

function mouseDragged()
{
  if (con.bodyReleased)
  {
    return;
  }
  Matter.Body.setPosition(dragBody.body, {x:mouseX, y:mouseY});
  Matter.Body.setAngularVelocity(dragBody.body, 0);
  Matter.Body.setAngle(dragBody.body, 0);
}

function mouseReleased()
{
  if (con.bodyReleased)
  {
    return;
  }
  con.shootBody();
  attempts++;
}

function keyPressed()
{
  if (keyCode == 32 && (dragBody.body.speed <= 2 || (dragBody.body.position.x > width || dragBody.body.position.x < 0 || dragBody.body.position.y > height || dragBody.body.position.y < 0)))
  {
    if (attempts >= maxAttempts || score >= 32)
    {
      attempts = 0;
      score = 0;
    }
    con.resetBody(dragBody.body);
  }
}