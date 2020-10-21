/* comment */


  /*comment */


/* counter */
document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 350, 5000);
 counter("count2", 100, 500, 6500);
 counter("count3", 0, 450, 6000);
});

/* counter */




/* upload file js */
 
(function() {
  
  'use strict';

  $('.input-file-button').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
    
   $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
   });
  });

})(); 

/* upload file js */

        
 


/*  Filter start */


  function myFunction() {
    var input, filter, cards, cardContainer, h6, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card-blog ");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".search h6.tags");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}


/*  Filter end */
