$(document).ready(start);

let draggedItem = null;
let itemsNeeded = -1;

function start() {
  // get number of items to find
  itemsNeeded = $('.item').length;
  
  $('.draggable').on('dragstart', handleDrag);
  $('body').on('dragover', allowDrop);
  $('body').on('drop', handleDrop);
}

function handleDrag(event) {
  console.log('drag start', event);
  draggedItem = $(this);
  draggedItem.addClass('dragging');
}

function allowDrop(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  console.log('dropped', draggedItem.attr('id'));

  if(event.target.id === 'dropzone') {      
      // clean up old DOM parent
      draggedItem.parent().remove(draggedItem);
      
      // rearrange DOM
      $('#dropzone').append(draggedItem);
      draggedItem.attr('draggable', false);
      draggedItem.addClass('collected');
      draggedItem.removeClass('draggable');
      

      checkWin();
  }

  draggedItem.removeClass('dragging');
  draggedItem = null;

}

function checkWin() {
  let loot = $('#dropzone').children();
  if(loot.length === 3) {
    console.log('You WIN');
  }
}
