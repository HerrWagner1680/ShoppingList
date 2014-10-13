$(document).ready(function(){


//TOGGLE BOUGHT STATUS
	$('.food').on('click', function(){$(this).toggleClass('box');});
	$('.item').on('click', function(){$(this).find('.paid').toggleClass('gone');});

//REMOVE FOOD AND CANCEL DIVS
	$('.cancel').on('click', function(){$(this).prev('.food').remove();
						$(this).remove()});



// use enter to add list items
	$('#entry').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});	

//variables used in add list items section
var first = "<div class='food item'></div>";
var second = "<div class='paid gone'>BOUGHT</div>";
var third = "<div class='cancel'></div>";
var fourth = "<div class='aisle'></div>"
var all = "<div class='food item'>eggs<div class='paid gone'>BOUGHT</div></div><div class='cancel'></div><div class='aisle'></div>";


//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('entry');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#entry').val())) {
			alert('Please enter text to add to the list');
		} else {
			$(first).appendTo('#list').html(txtval + second).after(third + fourth);

		document.getElementById('entry').value = '';

		
		event.preventDefault();
	};


	//TOGGLE BOUGHT STATUS --- APPLY TO NEW LIST ITEM
	$('.food').on('click', function(){$(this).toggleClass('box');});
	$('.item').on('click', function(){$(this).find('.paid').toggleClass('gone');});

	//REMOVE FOOD AND CANCEL DIVS --- APPLY TO NEW LIST ITEM
	$('.cancel').on('click', function(){$(this).prev('.food').remove();
						$(this).remove()});
	$('.cancel').on('click', function(){$(this).next('.aisle').remove();
						$(this).remove()});


	}); //add list items - END BRACES











//	$('.aisle').on('click', function(){$(this).addClass('veg');});













	//$('.cancel').on('click', function(){$(this).prev('.food').remove();


// AISLE / FOOD PIC cycle through categories

	$( '.aisle' ).bind('click',function() {

  	 









  	      var counter = $('.aisle').val();
    	                counter++ ;
      	              $('.aisle').val(counter);

 			if(counter > 5) {
 				counter = $('.aisle').val(-1);

 				var counter = $('.aisle').val();
      	             counter++ ;
        	            $('.aisle').val(counter);

                   

	//var zero = "<div class='aisle'>0</div>"
	//var one = "<div class='aisle'>1</div>"
	//var two = "<div class='aisle'>2</div>"
	//var three = "<div class='aisle'>3</div>"
	//var four = "<div class='aisle'>4</div>"
	//var five = "<div class='aisle'>5</div>"







                 if (counter == 0) {alert("reset zero");
                 $(this).addClass('other');
                 $(this).removeClass('frozen');
                 //	$('.aisle').html("0");
 				}
	

				else {alert("ERROR ERROR ERROR");
				}  

			}  // END BRACKET FOR if counter > 5

//start of else counter<5
	else {



 		if (counter == 0) {alert("zero less than five OTHER");
 		//$('.aisle').html('0');
 		$(this).addClass('other');
 		$(this).removeClass('frozen');
 		}

		else if (counter == 1) {alert("one less than five FRUIT");
		$(this).addClass('veg');
		$(this).removeClass('other');
		//$('.aisle').html('1');
		}

		else if (counter == 2) {alert("two less than five FISH");
		$(this).addClass('fish');
		$(this).removeClass('veg');
		//$('.aisle').html("2");
		}

		else if (counter == 3) {alert("three less than five BREAD");
		$(this).addClass('bread');
		$(this).removeClass('fish');
		//$('.aisle').html("3");
		}

		else if (counter == 4) {alert("four less than five CANNED");
		$(this).addClass('canned');
		$(this).removeClass('bread');
		//$('.aisle').html("4");
		}

		else if (counter == 5) {alert("FROZEN");
		$(this).addClass('frozen');
		$(this).removeClass('canned')
		//$('.aisle').html("5");
		}

		else {alert("OUT OF AISLE CATEGORIES - ERROR");
		}  

	} //nested ELSE regarding <=4
	

	
});  // click event brackets



}); //DOCUMENT READY - END BRACES


