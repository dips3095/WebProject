"use strict";function show_error(e){e.style.boxShadow="0 0 10px rgba(255,0,0,0.7)",e.style.backgroundColor="rgba(255,0,0,0.7)"}function reset_error(e){e.style.boxShadow="0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",e.style.backgroundColor="#eef1ec"}function validate(e,p){var o=!0;return e.value||(o=!1),p.test(e.value)||(o=!1),o?(reset_error(e),!0):(show_error(e),!1)}var popup=document.getElementById("popup"),popup_close=document.getElementById("popup_close"),popup_open=document.getElementById("popup_open"),popup_name=document.getElementById("popup_name"),popup_email=document.getElementById("popup_email"),popup_send=document.getElementById("popup_send"),reg_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,reg_name=/^[a-zA-Z ]+$/;popup_open.onclick=function(){popup.style.display="flex"},popup_close.onclick=function(){popup.style.display="none"},popup_send.onclick=function(){var e=validate(popup_email,reg_email),p=validate(popup_name,reg_name);return!(!e||!p)&&(alert("success email!"),alert("success name!"),!0)},popup_email.addEventListener("click",function(){return reset_error(popup_email)}),popup_name.addEventListener("click",function(){return reset_error(popup_name)});