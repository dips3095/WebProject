"use strict";var imgArr=["url(img/Home_0009s_0001_Layer-14.png)","url(img/background2.jpg)","url(img/background3.jpg)","url(img/background4.jpg)"],slideArea=document.querySelector(".masthead"),delay=3500,start=0,Show=function(){start=(start+1)%imgArr.length,slideArea.style.backgroundImage=imgArr[start],slideArea.style.transitionDuration="2.5s"};setInterval(Show,delay);