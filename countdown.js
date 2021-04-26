var comingdate = new Date("June 1, 2021 00:00:00");


var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');
//Great Logical is Here please !!I am Developer

var x = setInterval(function(){
    var now = new Date();
    var remainTime = comingdate.getTime() - now.getTime();
    var days = Math.floor(remainTime/(1000 * 60 * 60 * 24));
    var hours = Math.floor(remainTime%(1000 * 60 * 60 *24) / (1000 * 60 * 60));
    var mins = Math.floor(remainTime%(1000 * 60 * 60) / (1000 * 60))
    var secs = Math.floor(remainTime%(1000 * 60) / 1000);

   d.innerHTML = days;
   h.innerHTML = hours;
   m.innerHTML = mins;
   s.innerHTML = secs;

   if(remainTime==0)
   {
    if(confirm("Your Surprise will going to open.."))
    {
     location.href="#";//Link of web project
    }
   }
 
},1000)


