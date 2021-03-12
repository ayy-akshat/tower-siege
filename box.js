class Box extends BaseClass
{
    constructor(x, y, width, height)
    {
        super(x, y, 40, 40);

        this.opacity = 255;
        this.hit = false;
    }
    
    display()
    {
        if (this.body.speed < 8)
        {
            super.display("skyblue");
            this.opacity = 255;
        }
        else
        {
            World.remove(world, this.body);
            if (!this.hit)
            {
                score++;
            }
            this.hit = true;
            this.opacity -= 10;
            this.width+=10;
            this.height+=10;
            push();
            fill(135, 206, 235, this.opacity);
            translate(this.body.position.x, this.body.position.y);
            rotate(180*this.body.angle/PI);
            rect(0, 0, this.width, this.height);
            pop();
        }
        if (this.opacity == 250)
        {
            score += 100;
        }
    }

    resetPosition()
    {
        Matter.Body.setPosition(this.body, {x:this.initialX, y:this.initialY});
        Matter.Body.setVelocity(this.body, {x:0, y:0});
        Matter.Body.setAngle(this.body, 0);
        Matter.Body.setAngularVelocity(this.body, 0);
        if (this.hit)
        {
            World.add(world, this.body);
            this.hit = false;
            this.width = 40;
            this.height = 40;
        }
    }
}