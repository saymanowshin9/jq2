//jq

$(document).ready(function(){
	//draggable
	$( "#draggable" ).draggable();

	//dropable
	$( "#draggable2" ).draggable();
	$( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    //resize
    $( "#resizable" ).resizable();

    //selectable
     $( "#selectable" ).selectable();

     //sortable
     $( "#sortable" ).sortable();

     //acordion
      $( "#accordion" ).accordion({
      	collapsible: true
      });

      //menu
      $( "#menu" ).menu();

      //autocomplete
       var availableTags = [
      "wev development",
      "ui & ux design",
      "digital marketing",
      "wordpress",
      "shopify",
      "facebook marketing",
      "content creation",
      "video editing"
    ];
    $( "#course" ).autocomplete({
      source: availableTags
    });

    //slider
    $( "#slider" ).slider();

    //switch class
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });



});