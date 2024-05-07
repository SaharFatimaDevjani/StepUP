jQuery(document).ready(function($){
      setTimeout(function(){
                    $(".loader").hide();
                }, 1000);
            
            $('body').before('<div class="loader"><img src="assets/images/loader.gif"/></div>');
      $('.testimonial-row').slick({     
         autoplay:true,
         dots:true,
         arrows:false
      });
      $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 300) {
        //clearHeader, not clearheader - caps H
        $(".header-2").addClass("darkHeader");
    }
    else if(scroll < 300){
        $(".header-2").removeClass("darkHeader");
    }
}); //missing );
  })
$(window).on('load', function () {
    $('#p').fadeOut();
    $('#pps').delay(350).fadeOut('slow');
});
$(document).ready(function(){
       var user_name = $('input[name="user_name"]');
       var namePattern = /^[a-zA-Z ]+$/
       var user_email = $('input[name="user_email"]');
       var emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
       var user_phone = $('input[name="user_phone"]');
       var phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
       var user_message = $('textarea[name="user_message"]');

        $('input[type="submit"]').click(function(e){
            $('.error').remove();
            e.preventDefault();
            if(user_name.val() == ""){
                
                user_name.after('<span class="error row">This field is required</span>');
            }else{
                if(!namePattern.test(user_name.val())){
                    user_name.after('<span class="error row">This field contain alphabets only.</span>');
                }
            }

            if(user_email.val() == ""){
                
                user_email.after('<span class="error row">This field is required</span>');
            }else{
                if(!emailPattern.test(user_email.val())){
                    user_email.after('<span class="error row">Please insert a valid email address</span>');
                }
            }
        
            if(user_phone.val() == ""){
                
                user_phone.after('<span class="error row">This field is required</span>');
            }else{
                if(!phonePattern.test(user_phone.val())){
                    user_phone.after('<span class="error row">This field contain phone numbers only.</span>');
                }
            }

            if(user_message.val() == ""){
            
                user_message.after('<span class="error row">This field is required</span>');
            }
        })

 
$( "#accordion" ).accordion();
 })

