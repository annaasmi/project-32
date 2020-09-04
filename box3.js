class Box3 {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':0,
        'density':3.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("pink");
    fill("pink");
    rect(0, 0, this.width, this.height);
    pop();
    }else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      pop();
    }
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }
};
