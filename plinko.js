class Plinko{
    constructor(x, y){
    var options={
        isStatic:true,
        restitution:0.4
    }

    this.r = 10;

    this.body=Bodies.circle(x, y, this.r, options);

    World.add(world, this.body);
}
display()
{
    var pos=this.body.position;

    push();
    translate(pos.x, pos.y);

    noStroke();
    fill("white");

    ellipseMode(RADIUS)
    ellipse(0, 0, 10);
    pop();
}
}