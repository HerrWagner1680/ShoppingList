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
var all = "<div class='food item'>eggs<div class='paid gone'>BOUGHT</div></div><div class='cancel'></div>";


//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('entry');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#entry').val())) {
			alert('Please enter text to add to the list');
		} else {
			$(first).appendTo('#list').html(txtval + second).after(third);

		document.getElementById('entry').value = '';
		};


	//TOGGLE BOUGHT STATUS --- APPLY TO NEW LIST ITEM
	$('.food').on('click', function(){$(this).toggleClass('box');});
	$('.item').on('click', function(){$(this).find('.paid').toggleClass('gone');});

	//REMOVE FOOD AND CANCEL DIVS --- APPLY TO NEW LIST ITEM
	$('.cancel').on('click', function(){$(this).prev('.food').remove();
						$(this).remove()});

	}); //add list items - END BRACES



















// AISLE / FOOD PIC cycle through categories

// $( '.aisle' ).click(function() {

  //      var counter = $('.aisle').val();
    //                counter++ ;
      //              $('.aisle').val(counter);

 	//	if(counter > 5) {
 	//		counter = $('.aisle').val(-1);

 	//			var counter = $('.aisle').val();
      //              counter++ ;
        //            $('.aisle').val(counter);

                   

	//var zero = "<div class='aisle'>0</div>"
	//var one = "<div class='aisle'>1</div>"
	//var two = "<div class='aisle'>2</div>"
	//var three = "<div class='aisle'>3</div>"
	//var four = "<div class='aisle'>4</div>"
	//var five = "<div class='aisle'>5</div>"







          //       if (counter == 0) {alert("reset zero");
                 //$('.aisle').html("0");
	//document.querySelector("#TextBox").style.backgroundColor = "black";
	//	 			document.querySelector(".aisle").style.backgroundImage = "url('foodpics/other333.png')";
	//				document.querySelector(".aisle").style.height = "50px";
	//				document.querySelector(".aisle").style.width = "51px";
 	//			}
	

	//			else {alert("ERROR ERROR ERROR");
	//			}  
//
//			}  // END BRACKET FOR if counter > 5

//start of else counter<5
//	else {


	//function loop(){};

 //		if (counter == 0) {alert("zero less than five OTHER");
 		//$('.aisle').html('0');
 	//			document.querySelector(".aisle").style.backgroundImage = "url('foodpics/other333.png')";
	//			document.querySelector(".aisle").style.height = "50px";
	//			document.querySelector(".aisle").style.width = "51px";
 	//	}

	//	else if (counter == 1) {alert("one less than five FRUIT");
		//$('.aisle').html('1');
	//			document.querySelector(".aisle").style.backgroundImage = "url('foodpics/fruitnveg.png')";
	//			document.querySelector(".aisle").style.height = "50px";
	//			document.querySelector(".aisle").style.width = "53px";
	//	}

	//	else if (counter == 2) {alert("two less than five FISH");
		//$('.aisle').html("2");
//				document.querySelector(".aisle").style.backgroundImage = "url('foodpics/FISH2.png')";
//				document.querySelector(".aisle").style.height = "50px";
//				document.querySelector(".aisle").style.width = "90px";
//		}

//		else if (counter == 3) {alert("three less than five BREAD");
		//$('.aisle').html("3");
//				document.querySelector(".aisle").style.backgroundImage = "url('foodpics/bread2.png')";
//				document.querySelector(".aisle").style.height = "52px";
//				document.querySelector(".aisle").style.width = "51px";
//				document.querySelector(".aisle").style.backgroundSize = "50px 50px";
//		}

//		else if (counter == 4) {alert("four less than five CANNED");
		//$('.aisle').html("4");
//				document.querySelector(".aisle").style.backgroundImage = "url('foodpics/cannedfood2.png')";
//				document.querySelector(".aisle").style.height = "50px";
//				document.querySelector(".aisle").style.width = "53px";
//		}

//		else if (counter == 5) {alert("FROZEN");
		//$('.aisle').html("5");
//				document.querySelector(".aisle").style.backgroundImage = "url('foodpics/Frozen2.png')";
//				document.querySelector(".aisle").style.height = "50px";
//				document.querySelector(".aisle").style.width = "77px";
//		}

//		else {alert("OUT OF AISLE CATEGORIES - ERROR");
//		}  

//	} //nested ELSE regarding <=4
	

	
//});  // click event brackets



}); //DOCUMENT READY - END BRACES


