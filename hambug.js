document.addEventListener("DOMContentLoaded", function(){
    let hamburger_menu=document.getElementsByClassName("hamburger_menu")[0];
    let hamburger_menu1=document.getElementsByClassName("ham-1")[0];
    let hamburger_menu2=document.getElementsByClassName("ham-2")[0];
    let hamburger_menu3=document.getElementsByClassName("ham-3")[0];
    hamburger_menu.addEventListener("click", function(){
        hamburger_menu1.classList.toggle("-on");
        hamburger_menu2.classList.toggle("-on");
        hamburger_menu3.classList.toggle("-on");
    })
});


// $(".hamburger_menu").on("click",function(){
//     $(".allnav .menu").slideToggle();
// });

$(".hamburger_menu").on("click",function(){
    var vis = $(".item").css("visibility");
    if(vis=="hidden")
    {
        $( ".item" ).css("visibility","visible");                    
    }
    else
    {
        $( ".item" ).css("visibility","hidden");                    
    }

});