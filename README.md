# PORFOLIO-CLONE

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
