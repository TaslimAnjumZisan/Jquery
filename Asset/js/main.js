// jQuery('.one').hide(2000);
$(document).ready(function () {
    //jQuery('.one').hide(2000);
    // $('h2').click(function () {
    //     // alert("h2 clicked");
    //     //$('.one h2 ').hide(3000);
    //     $(this).hide(3000);

    //     //$('.two h2 ').hide(3000);

    // });
    // // /* This code is using jQuery to add a click event listener to all `<Button>` elements on the page.
    // // When a button is clicked, the function is triggered and the `event` object is passed as a
    // // parameter. The function then checks the `id` of the clicked button using `event.target.id`. If
    // // the `id` is `btn1`, it hides the `<p>` element with class `Lorem` inside the element with class
    // // `one` using the `hide()` method with a duration of 2000 milliseconds. If the `id` is `btn2`, it
    // // hides the `<p>` element with class `Lorem` inside the element with class `two`. */
    // $('Button').click(function (event) {
    //     // console.log(event.target.id);
    //     console.log(event.target.class);
    //     if(event.target.id=='btn1')
    //     {
    //         $('.one p.Lorem').hide(2000);
    //     }
    //     if(event.target.id=='btn2')
    //     {
    //         $('.two p.Lorem').hide(2000);
    //     }
      
    // });

    // $(document).on("click", function (event) {

    //     alert(event.target.className);

    // });

    // $('Button'.click(function){
    //     if($())
    // })

//   /* This code is using jQuery to add a click event listener to all `<Button>` elements on the page.
//   When any button is clicked, it hides the first `<p>` element inside the element with class `three`
//   using the `hide()` method with a duration of 2000 milliseconds. */
//     $('Button').click(function () {
//         $('.three p:first').hide(2000);
//     });

    // /* This code is using jQuery to add a click event listener to all `<Button>` elements on the page.
    // When any button is clicked, it hides the first `<li>` element inside the first `<ul>` element on
    // the page using the `hide()` method with a duration of 2000 milliseconds. It also hides the first
    // child element of the first `<ul>` element on the page using the `hide()` method with a duration
    // of 2000 milliseconds. */
    // $('Button').click(function () {
    //     $('ul li:first').hide(2000); 
    //     $('ul li:first-child').hide(2000); 

    // });
    
//    /* This code is using jQuery to add a click event listener to all `<button>` elements on the page.
//    When any button is clicked, it removes all elements with any class attribute using the
//    `$('[class]').remove();` statement. It also removes all `<p>` elements with a class attribute of
//    `three2` using the `$('p[class="three2"]').remove();` statement. */
//     $('button').click(function () {
//         // $('[class]').remove(); 
//         $('p[class="three2"]').remove(); 

//     });
    // $('button').click(function () {
    //     $("a[target!='_blank']").remove();
        
//     // });
// /* This code is using jQuery to add event listeners to different elements on the page. */

//     $('button').dblclick(function () {
//         alert("double clicked");
//     })
//     $('.four').mouseenter(function () {
//         alert("hello mouse enter");
//     });

//     $('.four').mouseup(function () {
//         alert("hello mouse up");
//     });
//     $('.four').mousedown(function () {
//         alert("hello clciked");
//     });
//     $('.four').hover(function() {
//         alert("Leave");
//     },function() {
//         alert("Leave");
//     });
    
//    /* This code is using jQuery to add a click event listener to all `<button>` elements on the page.
//    When any button is clicked, it triggers an alert message with the text "Hello". The `on()` method
//    is used to attach an event handler function for one or more events to the selected elements. In
//    this case, the `click` event is being listened for. */
//     $('button').on('click', function () {
//         alert("Hello");
//     });
//    /* This code is using jQuery to add event listeners for click, double click, and mouse enter events
//    to all `<Button>` elements on the page. When any button is clicked, it triggers an alert message
//    with the text "click". When any button is double-clicked, it triggers an alert message with the
//    text "Double click". When the mouse enters any button, it triggers an alert message with the text
//    "Mouse Enter". The `on()` method is used to attach event handler functions for one or more events
//    to the selected elements. */
//     $('Button').on({
//         click: function () {
//             alert("click");
//         },
//         dblclick: function () {
//             alert("Double click");
//         },mouseenter: function () {
//             alert("Mouse Enter");
//         }
//     });

//     /* This code is adding event listeners to the `<button>` elements on the page. When any button is
//     clicked, it hides the `<h2>` element inside the element with class `one` using the `hide()`
//     method with a duration of 2000 milliseconds. It also hides the `<h2>` element inside the element
//     with class `two` using the `hide()` method with a duration of 2000 milliseconds. The `on()`
//     method is used to attach an event handler function for the `click` event to the selected
//     elements. */
//     $('button').click(function () {
//         $('.one >h2').hide(2000);
//     });
    
//     $('button').click(function () {
// $(this).$('.two > h2').hide(2000);
//     });
    
//     $('button').on('click', function () {
//         $('.two > h2').hide(2000);
//     });

    // /* This code is adding a click event listener to all `<button>` elements on the page. When any
    // button is clicked, it hides all `<p>` elements inside the element with class `box` using the
    // `hide()` method with a duration of 'slow'. */
    // $('button').click(function () {
    //     $('.box p').hide('slow');
    // });
    
    // /* This code is adding click event listeners to elements with class `hide_me` and `show_me`. When
    // an element with class `hide_me` is clicked, it hides all `<p>` elements inside the element with
    // class `box` using the `hide()` method. When an element with class `show_me` is clicked, it shows
    // all `<p>` elements inside the element with class `box` using the `show()` method. */
    // $('.hide_me').click(function () {
    //     $('.box p').hide(); 
    // });
    // $('.show_me').click(function () {
    //     $('.box p').show(); 
    // });
    
   
    // /* This code is adding event listeners to different `<button>` elements on the page. When a button
    // is clicked, it triggers a fade animation on the elements with class `box2` or `box3`. The
    // `fadeOut()` method is used to gradually reduce the opacity of the selected elements until they
    // are hidden. The `fadeIn()` method is used to gradually increase the opacity of the selected
    // elements until they are fully visible. The `fadeToggle()` method is used to toggle the
    // visibility of the selected elements by fading them in or out depending on their current state.
    // The `fadeTo()` method is used to gradually change the opacity of the selected elements to a
    // specified value. */
    // $('button').click(function () {
    //     $('.box2').fadeOut('fast'); 
    // });
    //     //or
    // $("button").click(function () {
    //     $('.box3').fadeIn('slow');
    // });
    //     //or
    // $('button').click(function () {
    //     $('.box3').fadeToggle('slow');
    // });

    // $('button').click(function () {
    //     $('.box3').fadeTo('slow', 0.4);
    // });
       
    // $('button').click(function(){
    //     $('box2').fadeTo('slow',0.7);
    // });
    
    
    // //slide show diffrent way
    // $('.box4 h2').click(function () {
    //     $('.about-box ').slideDown('slow');
    // });
    // $('.box4 h2').click(function () {
    //     $('.about-box ').slideUp('slow');
    // });
    // $('.box4 h2').hover(function() {
    //     $('.about-box').slideToggle(2000);
    // });
    // $('.box4 h2').click(function () {
    //     $('.about-box ').slideToggle(2000);
    // });
    
    // $('button').click(function () {
        
    //     $('.box5').slideUp(1000, function () {
    //         alert("Slide up cpmplete"); 
    //     });
    // });

    // $('button').click(function () {
    //     $('.box6').animate({
    //         left: '50%',
    //         width: '150px',
    //         height:'200px'

    //     });
    // });
    
    $('button').click(function () {
        $('.box6').animate({
            left: '20%'
        }, 1000);
        $('.box6').animate({
            width: '300px',
            height: '300px',
            fontSize:'25px'
        }, 1000);
        $('.box6').animate({
            left: '0%'
        }, 1000);
        $('.box6').animate({
            width: '100px',
            height: '100px',
            fontSize:'16px'
        }, 1000);
    });
});

// $(function(){

// })
