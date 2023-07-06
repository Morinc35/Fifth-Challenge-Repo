var currentHour = dayjs().hour();
var description = $('.description');
var today = dayjs();
//this will pause loading the JS file until the rest of the page has loaded in
$(document).ready()
// adds current date to the webpage
$('#currentDay').text(today.format('MMM D, YYYY'));
//Function for saving inputs to local storage
function saveBtn() {
  $('.saveBtn').on('click', function () {
    const inputOne = $(this).parent().attr('id');
    const inputTwo = $(this).siblings('.description').val();
    localStorage.setItem(inputOne, inputTwo)
  })
}
//fetching To-Do item from local storage
function renderToDo() {
  description.each(function () {
    const key = $(this).parent().attr('id');
    $(this).text(localStorage.getItem(key))
    console.log(key)
  })

}
//applies and removes the correct class depending on the time of day
description.each(function () {
  var hourBlock = $(this).attr('id');


  if (hourBlock == currentHour) {
    $(this).addClass('present');
    $(this).removeClass('future');
    $(this).removeClass('past');
  }
  else if (hourBlock < currentHour) {
    $(this).addClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');

  }
  else {
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  }
  console.log(hourBlock, currentHour, typeof currentHour, typeof hourBlock)

})

renderToDo();
saveBtn();




