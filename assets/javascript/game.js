
window.onload = function() {

	document.getElementById("ruby_img").src=CrystalObjects[0].image;
	document.getElementById("diamond_img").src=CrystalObjects[1].image;
	document.getElementById("amathyst_img").src=CrystalObjects[2].image;
	document.getElementById("emerald_img").src=CrystalObjects[3].image;

  //  Click events are done for us:
  $("#amathyst").click(crystal.generate_random_and_sum);
  $("#ruby").click(crystal.generate_random_and_sum);
  $("#diamond").click(crystal.generate_random_and_sum);
  $("#emerald").click(crystal.generate_random_and_sum);

  $("#message").html("New game!");
 
};

var CrystalObjects = [
  {
    name: "ruby",
    image: "assets/images/ruby.jpeg",
    value: 0
  },
  {
    name: "diamond",
    image: "assets/images/diamond.jpg",
    value: 0
  },
  {
    name: "amathyst",
    image: "assets/images/amathyst.jpeg",
    value: 0
  },
  {
    name: "emerald",
    image: "assets/images/emerald.jpeg",
    value: 0
  }
  ];


var score_global=0;
var win=0;
var lose=0;

var crystal = {


	generate_random_and_sum: function() {

		current_id = $(this).attr("id");


		console.log(current_id);

		for (var i = 0; i < 4; i++) {
	
			if (CrystalObjects[i].name === current_id){

				if(CrystalObjects[i].value === 0){

					$("#message").html("New game!");

					console.log(CrystalObjects[i].value);

					CrystalObjects[i].value = generate_random_number_crystal();

					console.log(CrystalObjects[i].value);

					$("#crystal_value").html(CrystalObjects[i].value);
				}
				else{

					total_score(CrystalObjects[i].value);
					$("#crystal_value").html(CrystalObjects[i].value);
				}
				
			} 
		}
		
},
};

function generate_random_number(){


	var random_number = Math.floor((Math.random() * 101 ) + 19);

	return random_number;
}

function generate_random_number_crystal(){


	var random_number = Math.floor((Math.random() * 11 ) + 1);

	return random_number;
}

function display_random_number(){

	var random_number = generate_random_number();

	$("#random_number_to_match").html(random_number);

	return random_number;
  
}

function total_score(crystal_value){
	
	var win_string="Wins:"
	var lose_string="Losses:"

	console.log(crystal_value)

	//var total_score = $(this).attr("score");

	score_global = score_global + crystal_value;
	
	$("#total_score").html(score_global);

	console.log(score_global);

	if( score_global > random_number_compare){
		// Increment Lose Counter
		lose = lose + 1;
		lose_string = lose_string + lose.toString();

		// clear crystal values
		for(var j=0; j<4; j++){
			CrystalObjects[j].value=0;
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
		for(var j=0; j<4; j++){
			CrystalObjects[j].value=0;
		}
		$("#wins").html(win_string);
		$("#message").html("You <b>win!</b>");
		score_global=0;
	}

}


var random_number_compare = display_random_number();

