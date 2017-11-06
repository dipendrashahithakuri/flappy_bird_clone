const Bird = function(x,y,ctx)
{
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.velY = 0;
    this.width = 100;
    this.height = 100;
    this.ticks = 0;
    this.spriteIndex = 0;


    this.sprites = [document.getElementById('bird1'),
                    document.getElementById('bird2'),
                    document.getElementById('bird3')];

    var self = this;


    document.addEventListener('keydown',function(e){
        if(e.keyCode === 32){
            self.velY = -16;
            console.log('spacebar');
        }
    });
};

Bird.prototype.update = function(){
    this.ticks++;

    while(this.ticks<=15){

        this.spriteIndex = (this.spriteIndex+1)%this.sprites.length;
        this.ticks++;
    }
    
    if(this.ticks%15 === 0){
        this.spriteIndex = (this.spriteIndex+1)%this.sprites.length;
    };

    this.y += this.velY;
    this.velY +=1.25;
};

Bird.prototype.render = function(){

    let renderX = this.x - this.width/2;
    let renderY = this.y - this.height/2;
    this.ctx.drawImage(this.sprites[this.spriteIndex],renderX,renderY);
};