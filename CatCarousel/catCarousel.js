'use strict';

//listen for a click
$('main').on('click','.thumbnail', function(event){
//make a copy of the thumbnail
  let newImage = $(this).clone();
//replace the current hero image with the copy
  $('div.hero img').replaceWith(newImage);
//remove thumbnail class from the copy and make it a hero class
  $(newImage).removeClass('thumbnail').addClass('hero');
});