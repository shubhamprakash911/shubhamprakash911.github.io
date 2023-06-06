$(document).ready(function(){

    
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });

  });


  function resume(){
    window.open("Shubham-Kumar-Resume.pdf","_blank")
  }


  function myfun(){
    return window.open('https://drive.google.com/file/d/16b2rKUBCcU2RIcbe2KjKlvM4OPHfvf4-/view?usp=share_link','_blank');
  }