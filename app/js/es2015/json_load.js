"use strict";
const jsonfile = 'json/textdata.json'
const elements = [
    "title",
    "title1",
    "number",
    "#home",
    "#about_section",
    "#priceplan",
    "#finalsection",
    "#button",
    "content",
    "content1",
    "content2",
    "content3",
    "content4",
    "content5",
    "content6",
    "content7",
    "slogan",
    "slogan1",
    "slogan2",
    "text",
    "text2",
    "quotation_text",
    "text1",
    "info"
]
function GetJSON(path) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', path, true)
        xhr.timeout = 30000
        xhr.send()
        xhr.onload = () => {
            if (this.status == 200) {
                alert("sucess!")
                resolve(this.response);
            } else {
                reject(new Error("error occured!"))
            }
        }
        xhr.onerror = () => {
            reject(new Error("error on load"));

        }

        xhr.ontimeout = () => {
            reject(new Error("timeout error!"));
        }

    })

}

function promiseXMLHTTP(path, arr) {
    GetJSON(path).then(
        (success) => {
            let data = JSON.parse(success)
            arr.forEach((e) => {
                let el = document.getElementById(e)
                el.textContent = data[e]
            })
        },
        (error) => {
            alert(error.message)
        }
    )
}

promiseXMLHTTP(jsonfile, elements)