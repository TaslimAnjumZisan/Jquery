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
    
    $('.hide_me').click(function () {
        $('.box p').hide(); 
    });
    $('.show_me').click(function () {
        $('.box p').show(); 
    });

});

// $(function(){

// })
