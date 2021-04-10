class Iron{
    constructor(x, y) {
        var options = {
          'density':30,
          'friction': 3,
          'restitution':0.8
        }
        this.body = Bodies.rectangle(x, y, 120, 50, options);
        World.add(world, this.body);
        this.width = 120;
        this.height = 50;
        }

      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('black');
        fill('white');
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}