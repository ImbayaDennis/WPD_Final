$(document).ready(function()
{
    //Nav bar background
    $(window).scroll(function()
    {
        if($(document).scrollTop() > 50)
        {
            $('nav').addClass("scroll");
        }
        else
        {
            $('nav').removeClass("scroll");
        }
    });

    //Display back to top button
    $(window).scroll(function()
    {
        if($(document).scrollTop() > 150)
        {
            $('.back-to-top').addClass("appear");
        }
        else
        {
            $('.back-to-top').removeClass("appear");
        }
    });
    
    //Animate Menu Icon and opening and closing of menu
    $('.menu-bars').click(function()
    {
        this.classList.toggle("change");

        openNav();
        $('nav').removeClass("scroll");

        if($(this).data('clicked'))
        {
            closeNav();
            $(this).data('clicked', false);

            if($(document).scrollTop() > 50)
            {
                $('nav').addClass("scroll");
            }
            return;
        }
        $(this).data('clicked', true);

    });

    function openNav()
    {
        $('.menu').css("width","100%");
    }

    function closeNav()
    {
        $('.menu').removeAttr("style");
    }

    //Toggle Accordion on or off
    const accordion = $('.accordion');

    for(var i = 0; i < accordion.length; i++)
    {
        accordion[i].addEventListener("click", function()
        {
            this.classList.toggle("active");

            const panel = this.nextElementSibling;

            if(panel.style.maxHeight)
            {
                panel.style.maxHeight = null;
            }
            else
            {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});