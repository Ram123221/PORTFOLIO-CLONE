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