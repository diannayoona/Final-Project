//trash can be clicked and dragged
//images become slightly transparent when clicked
//bins open on hover
//if item placed in correct bin: display correct image, then return to original
//if item placed in incorrect bin: display "incorrect", item returns to list
//reset button

  $( function() {
    $( ".draggable" ).draggable({  
    	opacity: 0.6
    	});
	})

  $('#answers').on('click', answers)
    $('#reset').on('click', reset)


  function answers () {
	//console.log (answers);
	$( ".remove" ).remove();
	$("#trash-bin").attr('src',"images/trash-correct.png");
	$("#recycle-bin").attr('src',"images/recycle-correct.png");
	$("#compost-bin").attr('src',"images/compost-correct.png");
}

  function reset () {
	console.log (reset);
	$( ".remove" ).remove();
	$("#trash-bin").attr('src',"images/trash.png");
	$("#recycle-bin").attr('src',"images/recycle.png");
	$("#compost-bin").attr('src',"images/compost.png");
	$( "#draggables" ).append('<img src="images/trash1.png" class="draggable ui-widget-content trash remove"><img src="images/trash2.png" class="draggable ui-widget-content trash remove"><img src="images/recycle1.png" class="draggable ui-widget-content recycle remove"><img src="images/recycle2.png" class="draggable ui-widget-content recycle remove"><img src="images/compost1.png" class="draggable ui-widget-content compost remove"><img src="images/compost2.png" class="draggable ui-widget-content compost remove">'
		);
}