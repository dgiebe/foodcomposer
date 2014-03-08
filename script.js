$(function() {
    $( ".toppings" ).draggable();

    $( "#pizza" ).droppable({
      drop: function( event, ui ) {
		  
		  inc = $(ui.draggable).attr("id");
		  console.log(ui.draggable,"ui.draggable")
		  
        $( this )
          .after( "<span class='"+inc+" inc bounceIn'></span>" )
          .find( "p" )
            .html( "Dropped!" );
			$(ui.draggable).fadeOut("300");
      }
    });
  });