class Tower
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.towerPos  = {x:x, y:y};

        this.boxes = [];
        
        this.boxes.push(new Box(this.x-120, this.towerPos .y));
        this.boxes.push(new Box(this.x-80, this.towerPos .y));
        this.boxes.push(new Box(this.x-40, this.towerPos .y));
        this.boxes.push(new Box(this.x, this.towerPos .y));
        this.boxes.push(new Box(this.x+40, this.towerPos .y));
        this.boxes.push(new Box(this.x+80, this.towerPos .y));
        this.boxes.push(new Box(this.x+120, this.towerPos .y));
        
        this.boxes.push(new Box(this.x-80, this.towerPos.y-40));
        this.boxes.push(new Box(this.x-40, this.towerPos.y-40));
        this.boxes.push(new Box(this.x, this.towerPos.y-40));
        this.boxes.push(new Box(this.x+40, this.towerPos.y-40));
        this.boxes.push(new Box(this.x+80, this.towerPos.y-40));
        
        this.boxes.push(new Box(this.x-40, this.towerPos .y-80));
        this.boxes.push(new Box(this.x, this.towerPos .y-80));
        this.boxes.push(new Box(this.x+40, this.towerPos .y-80));
        
        this.boxes.push(new Box(this.x, this.towerPos .y-120));

        this.platform = new Ground(this.x, this.y+25, 280, 10, [139,69,19]);
    }

    display()
    {
        this.platform.display();
        for (var i = 0; i < this.boxes.length; i++)
        {
            this.boxes[i].display();
            if (!con.bodyReleased && attempts == 0)
            {
                this.boxes[i].resetPosition();
            }
        }
    }
}