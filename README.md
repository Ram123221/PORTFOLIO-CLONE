# PORFOLIO-CLONE

# HTML

## first part
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PORTOFOLIO CLONE</title>
    <link rel="stylesheet" href="portfolio.css" />
    <script src="https://kit.fontawesome.com/d7998eeb15.js" crossorigin="anonymous"></script>
</head>
```

## header-n-nav-sticky

```
<!--navbar-->
    <nav id="header-n-nav-sticky">
        <div id="navbar">
            <div id="img-container">
                <img src="images/logo.svg" alt="" />
            </div>
            <div id="toggle-container">
                <span id="toggle"><i class="fa-solid fa-bars"></i></span>
            </div>
        </div>
        <ul id="links" class="hide box-shadow">
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testmonial">Testmonial</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li ><a href="#components" class="active-alt">Components</a></li>
        </ul>
    </nav>
```

## about-section

```
 <section id="about">
        <p>hello, I'm</p>
        <h1>James Smith</h1>
        <p>UI/UX Designer</p>
        <div id="btns-container">
            <button class="active-alt">HIRE ME</button>
            <button class="active-black">DOWNLOAD CV</button>
        </div>
        <div id="icons">
            <span><i class="fa-brands fa-facebook-f"></i></span>
            <span><i class="fa-brands fa-google-plus-g"></i></span>
            <span><i class="fa-brands fa-github-alt"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
        </div>
        <div id="exp-info">
            <div class="exp">
                <h3>124</h3>
                <span>Happy Clients</span>
            </div>
            <div class="exp">
                <h3>124</h3>
                <span>Happy Clients</span>
            </div>
            <div class="exp">
                <h3>124</h3>
                <span>Happy Clients</span>
            </div>
        </div>
        <div id="about-main-part">
            <img src="images/avatar.jpg" alt="" />
            <h2>James Smith</h2>
            <span>UI/UX Designer</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci ab ipsa nobis dolorum aut in amet eaque, similique fugit atque deleniti vero repellat? Ut ipsum expedita ullam iusto pariatur?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa facere nam, corporis similique, inventore molestias accusantium accusamus minima incidunt atque nemo maiores dolores quam rerum. Dignissimos eum natus sed non?</p>
            <button class="active-alt">DOWNLOAD CV</button>
        </div>
    </section>
  ```
  ## services section
  
  ```
    <section id="service">
        <span>Service</span>
        <h3>What I Do</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, accusantium.Lorem ipsum dolor sit amet.</p>
        <div id="service-cards">
            <div class="service-card">
                <span><i class="fa-solid fa-crown"></i></span>
                <p>UI/UX Design</p>
            </div>
            <div class="service-card">
                <span><i class="fa-solid fa-desktop"></i></span>
                <p>UI/UX Design</p>
            </div>
            <div class="service-card">
                <span><i class="fa-solid fa-mobile"></i></span>
                <p>App Design</p>
            </div>
            <div class="service-card">
                <span><i class="fa-solid fa-bar-chart"></i></span>
                <p>UI/UX Design</p>
            </div>
        </div>
    </section>
  ```

    ## contact section

   ```
            <section id="contact">
                    <span>Contact</span>
                    <h3>Get In Touch With Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim fugit sunt veniam ipsam nesciunt repellat, dolores, quam consectetur ad modi. Ratione cumque vel ipsa?</p>
                    <div id="form-container">
                        <span>Available 24/7</span>
                        <h3>Get In Touch</h3>
                        <form method="post">
                            <input type="email" name="email" placeholder="Enter email" />
                            <input type="password" name="password" placeholder="Password" />
                            <textarea name="message" rows="5" placeholder="Message"></textarea>
                            <input type="submit" value="Send Message" class="active-alt" />
                        </form>
                    </div>
                </section>
   ```

    ## footer section
    
   ```
            <footer>
                <p>Copyright 3989 &copy;<span> PNC BSC CSIT</span></p>
                <div id="icons">
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-google-plus-g"></i></span>
                    <span><i class="fa-brands fa-github-alt"></i></span>
                    <span><i class="fa-brands fa-twitter"></i></span>
                </div>
            </footer>

            <span class="mode light invisible"><i class="fa-regular fa-sun"></i></span>
            <span class="mode dark visible"><i class="fa-solid fa-moon"></i></span>

            <script src="portfolio.js"></script>
   ```

# CSS
## header-n-nav-sticky

```
*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#header-n-nav-sticky
{
    position: sticky;
    top: 0;
    background-color: white;
}

#navbar
{
    padding: 1.3rem 3rem;
    box-shadow: 0 3px 8px 3px rgba(239, 237, 237, 0.5);
}

#navbar > #img-container , #navbar > #toggle-container
{
    display: inline-block;
    width: calc(50% - 2px);
    vertical-align: middle;
}

#navbar > #img-container > img
{
    display: block;
    width: 80px;
    height: 40px;
}

#navbar > #toggle-container > span#toggle
{
    display: block;
    border-radius: 5px;
    border: 1px solid black;
    width: 60px;
    height: 40px;
    text-align: center;
    margin-left: auto;
    cursor: pointer;
}

#navbar > #toggle-container > span > i::before
{
    line-height: 1.4;
    font-size: 1.8rem;
}
```

## links
```
/*links*/
ul#links
{
    overflow: hidden;
    transition: height 0.5s;
}

.box-shadow
{
    box-shadow: 0 3px 10px rgba(150, 149, 149, 0.2);
}

button:hover
{
    cursor: pointer;
}

ul#links > li
{
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
    /* padding: 0.6rem 0; */
}

ul#links > li > a
{
    display: inline-block;
    text-decoration: none;
    color: rgb(88, 87, 87);
    padding: 10px;
}

ul#links > li.active
{
    color: tomato;
}

.active-alt
{
    padding: 10px;
    background-color: tomato;
    color: white !important;
    border-radius: 20px;
    border: none;
}

.active-black
{
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 20px;
}

.hide
{
    height: 0;
}

.show
{
    height: calc(36.8px * 8 + 20px);
}

.border
{
    border: 2px solid black !important;
}

section
{
    padding: 10vh 15vw;
}
```

## about section
```
section#about
{

}

#about > p
{
    font-size: 2rem;
}

#about > h1
{
    font-size: 5rem;
}

#about > div#btns-container
{
    padding: 1.3rem 0px;
}

#about button
{
    border: none;
    font-size: 0.9rem;
    font-weight: bold;
}

div#icons > span
{
    display: inline-block;
    width: 45px;
    line-height: 45px;
    height: 45px;
    text-align: center;
    border: 2px solid tomato;
    color: tomato;
    border-radius: 50%;
    cursor: pointer;
}

/*experience information*/
div#exp-info
{
    border: 1px solid rgba(224, 220, 220, 0.5);
    border-radius: 40px;
    padding: 1rem;
    margin: 15vh 0 12vh;
    box-shadow: 0 0 30px rgba(161, 160, 160, 0.5);
}

#exp-info > .exp
{
    display: inline-block;
    width: calc(100% / 3 - 3px);
    text-align: center;
}

#exp-info > .exp:not(#exp-info > .exp:last-child)
{
    border-right: 1px solid rgba(0,0,0,0.5);
}
```

## about-main-part
```
#about-main-part
{
    text-align: center;
}

#about-main-part > img
{
    width: 100%;
    margin-bottom: 1rem;
}

#about-main-part > img ~ *
{
    margin: 8px 0;
}

#about-main-part > button
{
    display: inline-block;
}
```

## services section
```
section#service
{
    text-align: center;
}

#service > span, #contact > span, #form-container > span
{
    display: block;
    padding: 3px 0;
}

#service > h3, #contact > h3, #form-container > h3
{
    padding: 7px 0;
}

#service > p, #contact > p
{
    padding: 17px 0 2.7rem;
}

#service > #service-cards > .service-card
{
    width: 85%;
    margin: auto;
    padding: 3.3rem 0;
    border: 1px solid rgb(221, 221, 221);
    margin-bottom: 20px;
    transition: all 0.2s ease-in-out;
    box-shadow: 4px 4px 10px 4px rgba(218, 215, 215, 0.5);
    border-radius: 5px;
    cursor: pointer;
}

#service > #service-cards > .service-card:hover,
#service > #service-cards > .service-card:hover i::before
{
    background-color: tomato;
    color: white;
}

#service > #service-cards > .service-card > span > i::before
{
    font-size: 2.5rem;
    color: tomato;
}

#service > #service-cards > .service-card > p
{
    font-size: 1.3rem;
}
```

## contact section and footer
```
/*contact*/
section#contact
{

}

section#contact > p, #contact > span , #contact > h3
{
    text-align: center;
}

#contact > div#form-container
{
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgba(216, 214, 214, 0.5)
}

#form-container > form
{
    padding: 30px 0;
}

#form-container > form > input,
#form-container > form > textarea
{
    padding: 10px;
    width: 100%;
    display: block;
    margin-bottom: 1rem;
}

footer
{
    text-align: center;
}

footer > p > span
{
    color: tomato;
}

footer > div#icons
{
    margin: 25px 0;
}
```
## larger screens
```
@media screen and (min-width: 772px)
{
    #header-n-nav-sticky
    {
        box-shadow: 0 3px 8px 3px rgba(239, 237, 237, 0.5);
    }

    #navbar > #toggle-container > span#toggle

    {
        display: none;
    }

    #navbar, ul#links
    {
        display: inline-block;
        box-shadow: unset;
    }

    #navbar
    {
        width: calc(25% - 2px);
    }

    ul#links
    {
        margin-left: -2px;
        padding: 20px 1rem;
        width: calc(75% - 2px);
        vertical-align: middle;
        height: 81.6px;
    }
    
    ul#links > li
    {
        display: inline-block;
    }
}

span.mode{
    position: fixed;
    top: 100px;
    right: 20px;
    cursor: pointer;
}

span.mode > i::before{
    font-size: 1.5rem;
    border: 1px dashed rgba(216, 214, 214, 0.5);
    padding: 6px;
}

.visible{
    display: block;
}

.invisible{
    display: none;
}

.black-white{
    color: white !important;
    background-color: black !important;
}
```
# JS
## toggle section
```
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
```

## mode change
```
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
```
