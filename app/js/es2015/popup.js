"use strict";

const popup=document.getElementById("popup");
const popup_close=document.getElementById("popup_close");
const popup_open=document.getElementById("popup_open");

popup_open.onclick = ()=>{
    popup.style.display="flex";
};
popup_close.onclick=()=>{
    popup.style.display="none"
}
