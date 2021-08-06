class SlingShot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
      }
      display(){
        if(this.sling.bodyA){
          var pointA = this.sling.bodyA.position
          var pointB = this.pointB
          strokeWeight(4);
          stroke(193,141,76);
          line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
      }
      voar(){
        this.sling.bodyA = null
      }
      atacar(bodyA){
          this.sling.bodyA = bodyA
      }
}
