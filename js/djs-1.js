// JavaScript Document
<!-- Begin 
//Created by DendE PhisH 
function getTime() { 
c1 = new Image(); c1.src = "2008/001.jpg"; 
c2 = new Image(); c2.src = "2008/002.jpg"; 
c3 = new Image(); c3.src = "2008/003.jpg"; 
c4 = new Image(); c4.src = "2008/004.jpg"; 
c5 = new Image(); c5.src = "2008/005.jpg"; 
c6 = new Image(); c6.src = "2008/006.jpg"; 
c7 = new Image(); c7.src = "2008/007.jpg"; 
c8 = new Image(); c8.src = "2008/008.jpg"; 
c9 = new Image(); c9.src = "2008/009.jpg"; 
c0 = new Image(); c0.src = "2008/00.jpg"; 
Cc = new Image(); Cc.src = "2008/Cc.gif"; 
now = new Date(); 

//ENTER BELOW THE DATE YOU WISH TO COUNTDOWN TO 
var later = new Date("December 2 2020 9:00:00"); 

days = (later - now) / 1000 / 60 / 60 / 24; 
daysRound = Math.floor(days); 
hours = (later - now) / 1000 / 60 / 60 - (24 * daysRound); 
hoursRound = Math.floor(hours); 
minutes = (later - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
minutesRound = Math.floor(minutes); 
seconds = (later - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
secondsRound = Math.round(seconds); 

//if (secondsRound <= 9) { 
//document.images.g.src = c0.src; 
//document.images.h.src = eval("c"+secondsRound+".src"); 
//} 
//else { 
//document.images.g.src = eval("c"+Math.floor(secondsRound/10)+".src"); 
//document.images.h.src = eval("c"+(secondsRound%10)+".src"); 
//} 
//if (minutesRound <= 9) { 
//document.images.d.src = c0.src; 
//document.images.e.src = eval("c"+minutesRound+".src"); 
//} 
//else { 
//document.images.d.src = eval("c"+Math.floor(minutesRound/10)+".src"); 
//document.images.e.src = eval("c"+(minutesRound%10)+".src"); 
//} 
//if (hoursRound <= 9) { 
//document.images.y.src = c0.src; 
//document.images.z.src = eval("c"+hoursRound+".src"); 
//} 
//else { 
//document.images.y.src = eval("c"+Math.floor(hoursRound/10)+".src"); 
//document.images.z.src = eval("c"+(hoursRound%10)+".src"); 
//} 
if (daysRound <= 9) { 
document.images.x.src = c0.src; 
document.images.a.src = c0.src; 
document.images.b.src = eval("c"+daysRound+".src"); 
} 
if (daysRound <= 99) { 
document.images.x.src = c0.src; 
document.images.a.src = eval("c"+Math.floor((daysRound/10)%10)+".src"); 
document.images.b.src = eval("c"+Math.floor(daysRound%10)+".src"); 
} 
if (daysRound <= 9999){ 
document.images.k.src = eval("c"+Math.floor(daysRound/1000)+".src"); 
document.images.x.src = eval("c"+Math.floor((daysRound/100)%10)+".src"); 
document.images.a.src = eval("c"+Math.floor((daysRound/10)%10)+".src"); 
document.images.b.src = eval("c"+Math.floor(daysRound%10)+".src"); 
} 
newtime = window.setTimeout("getTime();", 1000); 
} 
// End --> 