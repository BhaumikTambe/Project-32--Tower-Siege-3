class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        this.pointB = pointB
        this.launch = Matter.Constraint.create(options);
        World.add(world, this.launch);
    }

    attach(body) {
        this.launch.bodyA = body;
    }
    
    fly() {
        this.launch.bodyA = null;
    }
  
      display(){
          if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
    }
}

