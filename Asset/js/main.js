// jQuery('.one').hide(2000);
$(document).ready(function () {
    //jQuery('.one').hide(2000);
    // $('h2').click(function () {
    //     // alert("h2 clicked");
    //     //$('.one h2 ').hide(3000);
    //     $(this).hide(3000);

    //     //$('.two h2 ').hide(3000);

    // });
    /* This code is using jQuery to add a click event listener to all `<Button>` elements on the page.
    When a button is clicked, the function is triggered and the `event` object is passed as a
    parameter. The function then checks the `id` of the clicked button using `event.target.id`. If
    the `id` is `btn1`, it hides the `<p>` element with class `Lorem` inside the element with class
    `one` using the `hide()` method with a duration of 2000 milliseconds. If the `id` is `btn2`, it
    hides the `<p>` element with class `Lorem` inside the element with class `two`. */
    $('Button').click(function (event) {
        console.log(event.target.id);
        if(event.target.id=='btn1')
        {
            $('.one p.Lorem').hide(2000);
        }
        if(event.target.id=='btn2')
        {
            $('.two p.Lorem').hide(2000);
        }
      
    });

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
        
    
    

});

// $(function(){

// })
