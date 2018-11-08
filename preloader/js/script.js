$(() => { // Вот это говорит о том что код дальше запустится после как сработает событие document.ready (http://learn.jquery.com/using-jquery-core/document-ready/)
    setTimeout(() => { // Вот здесь мы говорим что надо подождать секунду и потом начать наши мутки с css
        let p = $('.preloader'); // получаем элемент по селектору css
        p.css('opacity', 0); // выставляем ему прозрачность 0

        // прозрачность выставляется не сразу, а плавно
        // после того как изменение прозраности закончится нужно удалить сам элемент прелоадера

        // .one() позволяет выполнит код при наступлении какого то события
        // webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend - это соытия "переход завершен" в разных браузерах
        // полностью доки внизу

        p.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => p.remove()); // удаляемя прелоадер
    }, 1000);
});


// Executing Code When Transitions End
// One of the useful parts of changing CSS values using jQuery’s .animate method is the callback function that fires when the animation is complete. Unfortunately, jQuery’s addClass, removeClass, and .toggleClass methods (one of which is used in the code above) don’t include an option for a callback. Other jQuery methods might also have this limitation.
//
//     As an alternative, however, you can use JavaScript to detect when a transition on an element has completed. This way we can still have an optional callback-like effect.
//
//     Here’s how such code might look:
//
//     var myButton = $('#button'),
//         myBox = $('#box');
//
// myButton.click(function () {
//
//     myBox.toggleClass('change-size');
//
//     myBox.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
//         function(e) {
//
//             // code to execute after transition ends
//
//         });
//
// });
// You can view this code in action at this JS Bin. In that example, I’ve added an extra line that writes a message to the page each time the transition completes.
//
//     So what’s happening in the code? After caching our DOM elements, first we toggle the class name when the button is clicked. After that, we bind the transitionend event using jQuery’s .one method (vendor prefixes added for full compatibility, including two for Opera).
//
// Next we run the part of the code that we want to execute after the end of the transition. The .one method (as opposed to .on()) is necessary to ensure that the code executes only once.