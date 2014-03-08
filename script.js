$(function() {
	
	
    $( ".toppings" ).draggable();
    $( ".pizza" ).droppable({
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

	
	$( ".swippiz" ).on( "swipeleft", pizza34);

	$( ".swippiz" ).on( "swiperight", pizza38);


	
	function pizza38() {
		$('.pizza').addClass('pizza38')
		$('.swippiz').addClass('swippiz38')
		console.log('pizza38 is happening')
		};
	function pizza34() {
		$('.pizza38').removeClass('pizza38')
		$('.swippiz38').removeClass('swippiz38')
		console.log('pizza34 is happening')
		};
		
  });