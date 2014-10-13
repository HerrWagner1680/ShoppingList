$(document).ready(function(){
alert("click on pictures to categorize by food aisle")

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
var first = "<div class='food item'></div>"
var second = "<div class='paid gone'>BOUGHT</div>"
var third = "<div class='cancel'></div>"
var fourth = "<div class='aisle other'></div>"
var all = "<div class='food item'>eggs<div class='paid gone'>BOUGHT</div></div><div class='cancel'></div><div class='aisle other'></div>"


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
						$(this).next('.aisle').remove();
						$(this).remove()});
	//$('.cancel').on('click', function(){$(this).next('.aisle').remove();
	//					$(this).remove()});


	}); //add list items - END BRACES






// AISLE / FOOD PIC cycle through categories

	//$( '.aisle' ).bind('click',function() {

  	 	$('.other').on('click', function(){ 
  				alert("fruits and vegetables");
	 	 		$(this).addClass('veg').removeClass('other');
 		});

		$('.veg').on('click', function(){
				alert("meat and fish");
				$(this).addClass('fish').removeClass('veg');
		});

		$('.fish').on('click', function(){
				alert("bread and grain");
				$('.fish').addClass('bread').removeClass('fish');
		});

		$('.bread').on('click', function(){
				alert("canned goods");
				$(this).addClass('canned').removeClass('bread');
		});

		$('.canned').on('click', function(){
				alert("frozen foods");
				$(this).addClass('frozen').removeClass('canned')
		});

		$('.frozen').on('click', function(){
				alert("other");
				$(this).addClass('other').removeClass('frozen');
        });


  


}); //DOCUMENT READY - END BRACES

