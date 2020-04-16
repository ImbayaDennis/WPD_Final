<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/WPD_Final/Resources/css/main.css">
    <title>Relocate | Contact</title>
</head>
<body>    
    <header id="contact">
        <nav>
            <div class ="menu-bars">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </nav>
    
        <div class ="menu" style="width: 0%;">
            <div class="overlay">
                <a href="../../index.html"><h2>Home</h2></a>
                <a href="../../about.html"><h2>About</h2></a>
                <a href="#"><h2>Contact</h2></a>
            </div>
        </div>

        <div class ="hero-text">
            <h1>Contact us</h1>
        </div>
    </header>

    <div class="contact_form">
        <form action="post_data.php" method="post">
            <label for="name">Enter Your Full Name</label><br><br>
            <input type="text" name="name" placeholder="Full Name"><br><br>
            <label for="email">Enter Email Address</label><br><br>
            <input type="text" name="email" placeholder="E-mail Address"><br><br>
            <label for="message">Enter your Message here</label><br><br>
            <textarea name="message" placeholder="Message"></textarea><br><br>
            <input type="submit" value="Submit">
        </form>
    </div>
    
    <span class="back-to-top">
        <a href="#">
            <div class="up-arrow">
                <div class="handle-l"></div>
                <div class="handle-r"></div>
            </div>
        </a>
    </span>

    <footer>
        <div>        
        <h5>Dennis Finch Imbaya &copy; 2020</h5>
        </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="/WPD_Final/Resources/js/script.js"></script>
</body>
</html>