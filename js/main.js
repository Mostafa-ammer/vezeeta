/*start jquery code*/


/************ OWL carousel  for home page*****************/
$(document).ready(function(){
$('.lest').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            loop:true
        },
        600:{
            items:1,
              loop:true
        },
        1000:{
            items:1,
              loop:true
        }
    }
})
});




                                    /* owl carsoul for all doctors */
                                    $(document).ready(function(){
                            $('.doctors-booking').owlCarousel({
                                        loop:true,
                                        margin:10,
                                        responsive:{
                                            0:{
                                                items:1
                                            },
                                            600:{
                                                items:2
                                            },
                                            1000:{
                                                items:3
                                            }
                                        }
                                    })
});













                              /*********************owlCarousel of doctprs*************************/
$(document).ready(function(){
         $('.doc').owlCarousel({
             loop:true,
             margin:10,
             nav:true,
             responsive:{
                 0:{
                     items:1
                 },
                 600:{
                     items:3
                 },
                 1000:{
                     items:4
                 }
             }
         })
       });





/*            ********************* brands code**********************            */
$(document).ready(function(){
  $('.brand').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed:1000,
    margin:10,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,

        }
    }
})
});
$(document).ready(function(){
$('.count').counterUp({
    delay: 10,
    time: 2000
  })
});
// var sign=document.getElementById('signup');
var nam=document.getElementById('name');
var emai=document.getElementById('email');
var pas=document.getElementById('pass');
var repass=document.getElementById('re-pass');
var maleRadi=document.getElementById('maleRadio');
var femaleRadi=document.getElementById('femaleRadio');
function lest () {
  "use strict";
if( (nam.value=="" || emai.value=="" || pas.value=="" ) ){
  alert("name ,gmail and pass are  required");
}
  if( (maleRadi.checked!=true || femaleRadi.checked!=false)){
   alert("choose your gender it is required");
 }
if(pas.value != repass.value){
  alert("ERROE in confirmed pass");
}
var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var n=emai.value;
if(!n.match(pattern)){
  alert("invalid email");
}



};

                                            /*button up */
var mybutton=document.getElementById('goup');
window.onscroll=function () {
  "use strict";
  if(window.pageYOffset >=1200){
    mybutton.style.display='block';
  }
  else{
    mybutton.style.display='none';
  }

};
  mybutton.onclick=function () {
    "use strict";
    window.scrollTo(0,0);

  };







  /*                            loading            */

  $(window).on("load",function(){
           $(".loader-wrapper").fadeOut("slow");
         });


  // $(window).on("load",function(){
  //          $(".loader").fadeOut("5000");
  //        });



         $(document).ready(function(){


           var count = parseInt($('#jq-quant').val()),
               price = parseInt($('.price').html()),
               totalPrice = $('#total-price');

           $('#plus').click(function () {
               if (count >= 1) {
               $('#jq-quant').val(count += 1);
               totalPrice.html(parseInt(totalPrice.html()) + price);
           }
               });





           $('#sub').click(function () {
               if (count > 1) {
               $('#jq-quant').val(count -= 1);

               totalPrice.html(parseInt(totalPrice.html()) - price);
           }

               });

         });



            $('.img-mod').click(function () {
              var src =$(this).attr('src');
              $('.mod').modal('show');
              $('#popup-img').attr('src',src);

            });





   $(document).ready(function(){
            var mybook=document.getElementById('booking');
            mybook.onclick=function () {
            alert("successfuly booking");
          }
  });
