'use strict';
function main(){
//when submit button is clicked...
  $('form').on('submit', function(event){
    event.preventDefault();
    //find the value of the input (number to count to)
    let count = $('#number-choice').val();
    //create an array of all of the numbers between 0-input number
    for(let i=1;i<=count;i++){
    //loop through the array to check conditions
      if (i%15===0){
      //add <div class="fizz-buzz-item"><span>1</span></div> with content and class
      //specific to number (number, fizz, buzz, or fizzbuzz) to .js-results div
        $('.js-results').append(
          '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>');
      }
      else if (i%3===0){
        $('.js-results').append(
          '<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
      }
      else if (i%5===0){  
        $('.js-results').append(
          '<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
      }
      else {
        $('.js-results').append(
          `<div class="fizz-buzz-item"><span>${i}</span></div>`);
      }
    }
  });
}
$(main);
