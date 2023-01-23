$(document).ready(start);

let draggedItem = null;

function start() {
  $('.draggable').on('dragstart', handleDrag);
  $('#dropzone').on('dragover', allowDrop);
  $('#dropzone').on('drop', handleDrop);
}

function handleDrag(event) {
  console.log('drag start', event);
  draggedItem = $(this);
}

function allowDrop(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  console.log('dropped', draggedItem.id);  
  draggedItem.parent().remove(draggedItem);
  // drop
  $(this).append(draggedItem);
  draggedItem.attr('draggable', false);
  draggedItem.addClass('collected');
  draggedItem.removeClass('draggable');
}
