

var CrystalImageArray = ['assets/images/amathyst.jpeg' , 'assets/images/diamond.jpg' , 
'assets/images/emerald.jpeg' ,'assets/images/ruby.jpeg']

var value_array = ["ruby", "diamond", "amathyst", "emerald"]

var crystal_object_ruby = {type:"ruby", value:0};
var crystal_object_diamond = {type:"diamond", value:0};
var crystal_object_amathyst = {type:"amathyst", value:0};
var crystal_object_emerald = {type:"emerald", value:0};

crystal_object_array = [crystal_object_ruby, crystal_object_diamond, crystal_object_amathyst, crystal_object_emerald]

var score_global=0;
var win=0;
var lose=0;

document.getElementById("ruby").src=CrystalImageArray[3];
document.getElementById("diamond").src=CrystalImageArray[1];
document.getElementById("amathyst").src=CrystalImageArray[0];
document.getElementById("emerald").src=CrystalImageArray[2];

function generate_random_number(){


	var random_number = Math.floor((Math.random() * 101 ) + 19);

	return random_number;
}

function generate_random_number_crystal(){


	var random_number = Math.floor((Math.random() * 11 ) + 1);

	return random_number;
}
function display_number_generate_sum(global_value){

	var crystal_value = "Value:"
	var random_number_string = "";
	var random_number = generate_random_number_crystal();
	

	for (var i = 0; i < value_array.length; i++) {
		// console.log(value_array[i]);
		if(value_array[i] === global_value){
			
			if( crystal_object_array[i].value === 0){
				crystal_object_array[i].value = random_number;

				random_number_string = crystal_object_array[i].value.toString();
				crystal_value_innerHTML = crystal_value + random_number_string;

				// get id and write to inner HTML
				var element = document.getElementById("crystal_value");
				element.innerHTML = crystal_value_innerHTML;
				// sum the values
				total_score(crystal_object_array[i].value);
				
			}
			else{
				random_number_string = crystal_object_array[i].value.toString();
				// console.log(crystal_object_array[i].value);
				crystal_value_innerHTML = crystal_value + random_number_string;
				var element = document.getElementById("crystal_value");
				element.innerHTML = crystal_value_innerHTML;
				// sum the values
				total_score(crystal_object_array[i].value);
			}
		}	
	}
  
}

function display_random_number(){

	var random_number = generate_random_number();
	var element = document.getElementById("random_number_to_match");
	element.innerHTML = random_number;
	return random_number;
  
}

function total_score(crystal_value){
	
	var win_string="Wins:"
	var lose_string="Losses:"

	score_global = score_global + crystal_value;
	var element = document.getElementById("total_score");
	element.innerHTML = score_global;

	console.log(score_global);

	if( score_global > random_number_compare){
		// Increment Lose Counter
		lose = lose + 1;
		lose_string = lose_string + lose.toString();

		// clear crystal values
		for(var j=0; j<value_array.length; j++){
			crystal_object_array[j].value=0;
		}
		
		// var element = document.getElementById("total_score");
		$("#losses").html(lose_string);
		$("#message").html("You <b>lose!</b>");
		score_global=0;
	}

	if( score_global === random_number_compare){
		// Increment Win Counter
		win = win + 1;
		win_string=win_string + win.toString();

		// clear crystal values
		for(var j=0; j<value_array.length; j++){
			crystal_object_array[j].value=0;
		}
		$("#wins").html(win_string);
		$("#message").html("You <b>win!</b>");
		score_global=0;
	}

}


var random_number_compare = display_random_number();

$(document).ready(function(){
	var btn_val="";

	$("#enerald_btn").click(function(){
    	btn_val = $("#enerald_btn").val();
    	console.log(btn_val);
    	display_number_generate_sum(btn_val);
	});
	$("#ruby_btn").click(function(){
    	btn_val = $("#ruby_btn").val();
    	console.log(btn_val);
    	display_number_generate_sum(btn_val);
	});
	$("#diamond_btn").click(function(){
    	btn_val = $("#diamond_btn").val();
    	console.log(btn_val);
    	display_number_generate_sum(btn_val);
	});
	$("#amathyst_btn").click(function(){
    	btn_val = $("#amathyst_btn").val();
    	console.log(btn_val);
    	display_number_generate_sum(btn_val);
	});
});



