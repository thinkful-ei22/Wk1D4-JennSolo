'use strict';

function addItem(){
//get value of item added in form
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let newItem = $('.js-shopping-list-entry').val();
    //create a new list element with data from the form
    let newList = 
            `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
            </li>`;
    $('.shopping-list').append(newList);
  });
}

function checkOff(){
  $('ul').on('click','.shopping-item-toggle',(function(event){
    event.preventDefault();
    let done = $(event.currentTarget).parent().prev('span');
    $(done).toggleClass('shopping-item__checked');
  }));
}

function removeItem(){
  $('ul').on('click','.shopping-item-delete',(function(event){
    event.preventDefault();
    $(event.currentTarget).parent().parent().remove();
  })); 
}

$(() => {
  addItem();
  checkOff();
  removeItem();
});