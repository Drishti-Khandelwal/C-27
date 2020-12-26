class Slingshoot{
constructor(bodyA, bodyB){
var options ={
bodyA:bodyA,
bodyB:bodyB,
stiffness: 0.4,
length:10
}
this.chain = Constraint.create(options);
World.add(world,this.chain);   
}
display(){
var pointA = this.chain.bodyA.position; //starting point
var pointB = this.chain.bodyB.position; // ending point
line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}