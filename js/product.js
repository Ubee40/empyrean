// let increaseBtn = document.getElementById('increase');
// let decreaseBtn = document.getElementById('decrease');
let inputValue = document.getElementById('input-value').value;
let inputInt = parseInt(inputValue);

function increaseItem() {
	inputInt = isNaN(inputInt) ? 0 : inputInt;
    inputInt++;
    document.getElementById('input-value').value = inputInt;
}

function decreaseItem() {
	if (isNaN(inputInt)) {
		return 0;
	} else if (inputInt === 0) {
		return 0;
	} else {
		inputInt
	}
    inputInt--;
    document.getElementById('input-value').value = inputInt;
}




// ====== Do not code above the line =====

//Increase or decrease quantity
$(document).ready(function(){

	var quantitiy=0;
	   $('.quantity-right-plus').click(function(e){
			
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			var quantity = parseInt($('#quantity').val());
			
			// If is not undefined
				
				$('#quantity').val(quantity + 1);
	
			  
				// Increment
			
		});
	
		 $('.quantity-left-minus').click(function(e){
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			var quantity = parseInt($('#quantity').val());
			
			// If is not undefined
		  
				// Increment
				if(quantity>0){
				$('#quantity').val(quantity - 1);
				}
		});
		
	});