class Box{
    constructor(x,y,w,h) {
      
      this.body = Bodies.rectangle(x,y,w,h);
      this.w = 50; 
      this.h = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.w,this.h);
    }
  };