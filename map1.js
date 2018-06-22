(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
 // ajout audio 
 var pap = new Audio('song.mp3'); 
 pap.loop = true;
 pap.play();
// declaration des variables de controles de translation du map 
    var bool=0;
    var bool1=0;
    var bool2=0;
    var arrettranslate=0;
    var arretrestore=0;

 var img1=new Image();
     img1.src="f5.jpg";
      var  width = 640,
    height = 600,
    
    player = {
        x: width / 2,
        y: height - 15,
        width: 50,
        height: 60,
        speed: 4,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
      keys = [],
    friction = 0.8,
    gravity = 0.3;


var colTileCount = 32;
var map= {"height":19,
 "layers":[
        {
         "data":[17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 1, 1, 82, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 90, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 1, 82, 83, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 102, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 102, 1, 1, 1, 1, 1, 1, 57, 1, 102, 1, 1, 1, 1, 1, 1, 102, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 102, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 102, 1, 1, 1, 1, 1, 1, 1, 1, 102, 1, 1, 1, 1, 1, 1, 102, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 81, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 84, 1, 1, 1, 1, 1, 1, 1, 1, 81, 83, 83, 83, 83, 83, 83, 84, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 1, 1, 1, 1, 1, 1, 57, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 57, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 57, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 57, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 57, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 195, 196, 1, 1, 1, 1, 70, 71, 54, 54, 54, 54, 54, 54, 54, 54, 40, 41, 42, 54, 54, 54, 54, 54, 54, 54, 26, 27, 28, 29, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 40, 41, 42, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 26, 27, 28, 29, 54, 54, 54, 54, 54, 54, 54, 54, 40, 41, 42, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 26, 27, 28, 29, 44, 44, 44, 44, 44, 44, 45, 46, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181],
         "height":19,
         "name":"Calque de Tile 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":100,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "columns":16,
         "firstgid":1,
         "image":"Jeux video projet\/Mobile - Astro Boy Tap Tap Rush - Act 2-3 Tileset.png",
         "imageheight":481,
         "imagewidth":512,
         "margin":0,
         "name":"map",
         "spacing":0,
         "tilecount":240,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "version":1,
 "width":100
};
canvas = document.getElementById('game');
 ctx = canvas.getContext('2d');
 
 
 
 function init(){
        background_height = map.height ;
        background_width = map.width;
        tile_width = map.tilesets[0].tileheight;
        tile_height = map.tilesets[0].tileheight;
        image_width = map.tilesets[0].columns;
        margin = map.tilesets[0].margin;
        space = map.tilesets[0].spacing;
        first = map.tilesets[0].firstgid;

 }
function draw(img)  
    {  if(arrettranslate == 0)
    	{ 
    	if(bool==1 && bool1==1 && bool2==1)
    	{ctx.translate(-640,0);
    		

    	arrettranslate=1;}}
        for(i=0;i<map.layers[0].data.length;i++)
        {  
            content=map.layers[0].data[i]-first;//1
            tilex= Math.floor(content % image_width)* (tile_width + space) + margin;
            tiley= Math.floor(content / image_width)* (tile_width+ space) + margin;
            mapx = Math.floor(i%background_width)*tile_width;
            mapy = Math.floor(i/background_width)*tile_height;
            ctx.drawImage(img,tilex,tiley,tile_width,tile_height,mapx,mapy,tile_width,tile_height);
        }
        if(bool==1 && bool1==1 && bool2==1)
        {
        	if(arretrestore ==0)
        	{
   ctx.restore();
   ctx.save();
}
arretrestore=1;
}
    }

    
 

 img = new Image();
 img.src = 'tile.png';
 img.onload = function()
 {
 ctx.clearRect(0,0,canvas.width,canvas.height);
 init();
 
 }

var boxes = [];

//declaration d'un tableau pour conternir les obstacles 
var myArray = new Array();
for(i=0;i<map.layers[0].data.length;i++)
{
    if(map.layers[0].data[i]==195)
    {
        myArray.push(i);
        myArray.push(i++);
    
    }

}
//declaration des obstacles
for(i=0;i<myArray.length;i++)
{ xbox = Math.floor(myArray[i]%map.width)*32;
  ybox = Math.floor(myArray[i++]/map.width)*32;
boxes.push({
    x:xbox,
    y:ybox+230,
    width:64,
    height:32
});

}



boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 2,
    width: 3200,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});






canvas.width = width;
canvas.height = height;
// mouvement du joueur
function update() {
    // check keys
    if (keys[38] || keys[32]) {
        
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[39]) {
        
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37]) {

        // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }
   
    player.velX *= friction;
    player.velY += gravity;
 
    player.grounded = false;
    //creation des obstacles et gestion de contact avec obstacles
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    
    if(player.grounded){
         player.velY =0;
    }
    
    player.x += player.velX;
    player.y+= player.velY;
// dessin des images fb,instagram,snapchat,charge,appphoto
    draw(img);
	drawf(imgf);
	drawy(imgy);
	drawc(imgc);
	contact();
   
    
    ctx.drawImage(img1,0,0,148,238,player.x,player.y-220, player.width,player.height);
   
    requestAnimationFrame(update); 
}
//collusion du player
function colCheck(shapeA, shapeB) {
shapeA.y=shapeA.y;
    // get the vectors to check against

    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and hal0f heights of the objects
        hWidths= (shapeA.width / 2) + (shapeB.width / 2) ,
        hHeights = (shapeA.height / 2) + (shapeB.height / 2)+10,
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});



  

    var xbox1 = (Math.floor(myArray[0]%map.width)*32)+15;
    var ybox1 = (Math.floor(myArray[1]/map.width)*32)-32;

    var imgf=new Image();
    imgf.src="facebook.png";

    xbox2 = 570;
    ybox2= 80;
    xbox3 = 15;
    ybox3= 315;


var imgc=new Image();
      imgc.src="charge.jpg";
   

var imgy=new Image();
      imgy.src="youtube.jpg";
      
      

function clear()
{ctx.clearRect(xbox1,ybox1,32,32);}
function clear2()
{ctx.clearRect(xbox2,ybox2,32,32);}
function clear3()
{ctx.clearRect(xbox3,ybox3,32,32);}

function drawf(){
 
  if(bool==0)
  {
  ctx.drawImage(imgf,0,0,50,50,xbox1,ybox1,32,32);}

}
 

function drawy(){
  

  if(bool1==0)
  {
  ctx.drawImage(imgy,0,0,50,50,xbox2,ybox2,32,32);
}}



      

  

function drawc(){
   if(bool2==0)
  {
ctx.drawImage(imgc,0,0,50,50,xbox3,ybox3,32,32);}
}











function contact()
{
	var score=15;
	

 
    if((player.x>xbox1-20) && (player.x<xbox1+20) && (player.y<290) &&  (player.y>288))
        {


            score-=4;
             clear();
             bool=1;
             
             img1.src="f1.jpg";
         
		}
	
	 if((player.x>xbox2-20) && (player.x<xbox2+20)&& (player.y<295) &&  (player.y>290))
        {
             

            score-=6;
            clear2();
  bool1=1;
          img1.src="f2.jpg";
		
         
        }
	
	 if((player.x>xbox3-20) && (player.x<xbox3+20)&& (player.y>450) )
        {
             

            score+=10;
            clear3();
  bool2=1;
         img1.src="f5.jpg";  
		
         
        }


    
}

