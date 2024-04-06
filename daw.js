var timeBullet = setInterval(function(){
    //创建敌人
    var enemy = document.createElement("div");
    var a= parseInt(Math.random() * 3); 
    enemy.className="all";
    switch(a){
      case 0: enemy.className+=" tank";  break;
      case 1: enemy.className+=" tank2"; break; 
      case 2: enemy.className+=" tank3"; break; 
    }
    screen.appendChild(enemy);
    enemy.style.left = parseInt(Math.random()*(1000-100)+100) + "px";
    enemy.style.top = "-300px";

    var enemyFly = setInterval(function(){
        enemy.style.top = enemy.offsetTop + 10 + "px";
        if (enemy.offsetTop >= screen.offsetHeight){
            clearInterval(enemyFly);
            screen.removeChild(enemy);
        }
    },23)
    enemy.timer = enemyFly;
},1000)





    var timeBullet = setInterval(function(){
        function enemy0(){
            this.enemy = document.createElement("div");
            this.id=0;
          }
        
        function enemy1(){
          this.enemy = document.createElement("div");
          this.id=1;
          this.count=0;
        }
        
        function enemy2(){
          this.enemy = document.createElement("div");
          this.id=2
          this.count=0;
        }
       var tp;
       tp.enemy.className="all";
       var a= parseInt(Math.random() * 3); 
       switch(a){
        case 0: tp=new enemy0();  tp.enemy.className+=" tank";   break;
        case 1: tp=new enemy1();  tp.enemy.className+=" tank2"; break; 
        case 2: tp=new enemy2();  tp.enemy.className+=" tank3"; break; 
      }
      screen.appendChild(tp.enemy);
      tp.enemy.style.left = parseInt(Math.random()*(1000-100)+100) + "px";
      tp.enemy.style.top = "-300px";
  
      var enemyFly = setInterval(function(){
          tp.enemy.style.top = tp.enemy.offsetTop + 10 + "px";
          if (tp.enemy.offsetTop >= screen.offsetHeight){
              clearInterval(enemyFly);
              screen.removeChild(tp.enemy);
          }
      },23)
      tp.enemy.timer = enemyFly;
    },1000)





function handleCollision(elementId){

  var boom = document.getElementById(elementId);
  var boomImg=boom.getElementsByTagName('img');
  var currentSlide=0;
  var count=0;
  // 设置第一张图片为初始显示
  boomImg[0].style.top=enemys[i].style.top;
  boomImg[0].style.left=enemys[i].style.left;
  boomImg[0].classList.add('active');
  // 自动切换下一张图片
  
  var timeBoom = setInterval(function(){
     count++;
     boomImg[currentSlide].classList.remove('active');
     currentSlide = (currentSlide + 1) % boomImg.length;
     boomImg[currentSlide].classList.add('active');
     if(count===boomImg.length)  clearInterval(timeBoom);
  },200) 

}





// 显示下一帧图片
function showNextFrame() {
  // 隐藏当前帧
  frames[currentFrame].style.display = 'none';

  // 增加当前帧索引
  currentFrame++;
  if (currentFrame >= frames.length) {
    clearInterval(enemys[i].enemyFly);; // 如果已经到达最后一帧，回到第一帧
  }

  // 显示下一帧
  frames[currentFrame].style.display = 'block';
}






function bullet1() {
  this.bullet = document.createElement("div");
  this.bullet.className = "bullet";
  this.isbool = true;
  this.exist = false;
}
var bulletArray1 = [];
for (var i = 0; i < 5000; i++) {
 var tp = new bullet1();
 bulletArray1.push(tp);
}

var bulletFly1 = setInterval(function(){
 for (var i = 0; i < bulletArray1.length; i++) {
   if (bulletArray1[i].isbool === true) {
     bulletArray1[i].isbool = false;
     bulletArray1[i].bullet.style.top = enemy.offsetTop + "px";
     bulletArray1[i].bullet.style.left = enemy.offsetLeft + parseInt(getComputedStyle(enemy)["width"])/2-2 + "px";
     break;
   }
 }
}, 1000);

var paint1 = setInterval(function(){
 for (var i = 0; i < bulletArray1.length; i++) {
   bulletArray1[i].bullet.style.top = parseInt(bulletArray1[i].bullet.style.top) + 2 + "px";
   if (bulletArray1[i].isbool === false) {
     if(bulletArray1[i].exist===false){
     screen.appendChild(bulletArray1[i].bullet);
     bulletArray1[i].exist = true;
   }
   if (parseInt(bulletArray1[i].bullet.style.top) > 900 || parseInt(bulletArray1[i].bullet.style.top) < 0) {
     screen.removeChild(bulletArray1[i].bullet);
     bulletArray1[i].isbool = true;
     bulletArray1[i].exist = false;
   }
 }
}},10);







          
          var enemybullet = document.createElement("div");
          enemybulle.className = "bullet-enemy";
          enemybullet.style.top = enemy.offsetTop + "px";
          enemybullet.style.left = enemy.offsetLeft + parseInt(getComputedStyle(enemy)["width"]) / 2 - 2 + "px";
          screen.appendChild(bullet);

          var bulletMove = setInterval(function(){
              bullet.style.top = parseInt(bullet.style.top) + 15 + "px";
              if (parseInt(bullet.style.top) > screen.offsetHeight) {
                  clearInterval(bulletMove);
                  screen.removeChild(bullet);
              }
          }, 10);
          enemybullet.timer = enemyFly;


  

        function enemybullet() {
            this.bullet = document.createElement("div");
            this.bullet.className = "bullet-enemy";
            this.isbool = true;
            this.exist = false;
         }
         
         var enemybulletArray = [];
         
         for (var i = 0; i < 2000; i++) {
           var tp = new enemybullet();
           enemybulletArray.push(tp);
         }
         


         var bulletFly = setInterval(function(){
           for (var i = 0; i < enemybulletArray.length; i++) {
             if (enemybulletArray[i].isbool === true) {
               bulletArray[i].isbool = false;
               bulletArray[i].bullet.style.top = plane.offsetTop + "px";
               bulletArray[i].bullet.style.left = plane.offsetLeft + parseInt(getComputedStyle(plane)["width"])/2-2 + "px";
               break;
             }
           }
         }, 150);
         
         var paint = setInterval(function(){
           for (var i = 0; i < bulletArray.length; i++) {
             bulletArray[i].bullet.style.top = parseInt(bulletArray[i].bullet.style.top) - 2 + "px";
             if (bulletArray[i].isbool === false) {
               if(bulletArray[i].exist===false){
               screen.appendChild(bulletArray[i].bullet);
               bulletArray[i].exist = true;
             }
             if (parseInt(bulletArray[i].bullet.style.top) < 0 || parseInt(bulletArray[i].bullet.style.top) > screen.offsetHeight) {
               screen.removeChild(bulletArray[i].bullet);
               bulletArray[i].isbool = true;
               bulletArray[i].exist = false;
             }
           }
         }},10);


         var isOverlop2 = setInterval(function(){
          for(var i=0;i<enemybulletArray.length;i++){
            if(enemybulletArray[i].isbool===false&&enemybulletArray[i].exist)
               if(Check(enemybulletArray[i].bullet,plane)){
                  boomImg('#boom3',plane);
                  plane.style.display = "none";
               }
           }
        },100);     