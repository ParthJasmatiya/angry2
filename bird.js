class Bird{
  constructor(x,y,width,height){
     var options={
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
 this.image = loadImage("sprites/parth.png");
  World.add(world, this.body);
}
display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  this.body.speed=6;
  image(this.image, 0, 0, this.width, this.height);
  pop();
}
}
