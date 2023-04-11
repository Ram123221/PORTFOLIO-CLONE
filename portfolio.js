const toggleBtn = document.getElementById("toggle");
const links = document.getElementById("links");

toggleBtn.onclick = function()
{
    if(links.classList.contains("hide"))
    {
        links.classList.remove("hide");
        links.classList.add("show");
        toggleBtn.classList.add("border");
    }
    else
    {
        links.classList.add("hide");
        toggleBtn.classList.remove("border");
        links.classList.remove("show");
    }
}

const body = document.querySelector("body");
const headerNavSticky = document.getElementById("header-n-nav-sticky");
const lightMode = document.querySelector("span.light");
const darkMode = document.querySelector("span.dark");

lightMode.onclick = function(){
    lightMode.classList.remove("visible");
    darkMode.classList.add("visible");
    lightMode.classList.add("invisible");
    darkMode.classList.remove("invisible");
    body.classList.remove("black-white");
    headerNavSticky.classList.remove("black-white");
}

darkMode.onclick = function(){
    lightMode.classList.add("visible");
    darkMode.classList.remove("visible");
    lightMode.classList.remove("invisible");
    darkMode.classList.add("invisible");
    body.classList.add("black-white");
    headerNavSticky.classList.add("black-white");
}