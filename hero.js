constructor(x,y,r)
{
   options = {
   density :1,
   frictionAir :1


   };

   this.x=x;
   this.y=y;
   this.r=r;
   this.loadImage("Superhero-01.png");
   this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
   World.add(world, this.body);




}