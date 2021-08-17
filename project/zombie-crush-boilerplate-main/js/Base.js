class Base{
    constructor(x,y,w,h,color, isStatic){


        var options={
            isStatic : true
        }

      this.body =  Bodies.rectangle(x,y,this.w, this.h, options);
        this.w = w;
        this.h = h;
        this.color =color;

        World.add(world, this.body)
    }

    show(){
let pos = this.body.position;
push();
translate(pos.x, pos.y);
rectMode(CENTER);
fill(this.color);
rect(0,0, this.w, this.h);
pop();
    }
}