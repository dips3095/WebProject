"use strict";

var jsonfile = 'json/textdata.json';
var elements = ["title", "title1", "number", "#home", "#about_section", "#priceplan", "#finalsection", "#button", "content", "content1", "content2", "content3", "content4", "content5", "content6", "content7", "slogan", "slogan1", "slogan2", "text", "text2", "quotation_text", "text1", "info"];
function GetJSON(path) {
    var _this = this;

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.timeout = 30000;
        xhr.send();
        xhr.onload = function () {
            if (_this.status == 200) {
                alert("sucess!");
                resolve(_this.response);
            } else {
                reject(new Error("error occured!"));
            }
        };
        xhr.onerror = function () {
            reject(new Error("error on load"));
        };

        xhr.ontimeout = function () {
            reject(new Error("timeout error!"));
        };
    });
}

function promiseXMLHTTP(path, arr) {
    GetJSON(path).then(function (success) {
        var data = JSON.parse(success);
        arr.forEach(function (e) {
            var el = document.getElementById(e);
            el.textContent = data[e];
        });
    }, function (error) {
        alert(error.message);
    });
}

promiseXMLHTTP(jsonfile, elements);