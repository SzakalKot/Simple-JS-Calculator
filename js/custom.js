$(document).ready(function(){
//////////////////
var  score= 0  ; 
var log = '';
var operator = '';
var current = 0;
var ans0 = 0; 
var answer = 0; 

//adding number to canlculation ///

$('.number').click(function(){
	if ($("#equals").hasClass("active")) { // enables reset after hitting equals button
      answer = 0;
    }
    current = Number(current + this.value);
	log = log + this.value;    
	$("#action").html(log);
	
	
	if(operator !== ''  ){
		if(operator === '+'){
		answer=ans0+ current;
		}else if(operator === '-'){
		answer=ans0- current;
		}else if(operator === '*'){
		answer=ans0 * current;
		}else if(operator === '%'){
		answer=ans0 % current;
		}else if(operator === '/'){
		answer=ans0 / current;
		
		}else  answer=current;
	}else answer=current;
	

	console.log('narazie ok ');
	
});

/////////////////////////////////////
// off / on functions ///////////////

$('.on').click(function(){
	$('.widnow-data').css("background" , "#b0dde4");
	$('.number').css("background" , "#b0dde4");
});

$('.off').click(function(){
	$('.widnow-data').css("background" , "white");
	$('.number').css("background" , "white");
});
//////////////////////////////////////
////////////adding operators //////////

$('.operator').click(function(){
	
	log = log + this.value;    
	$("#action").html(log);
	operator=this.value;
	current = 0;  
    ans0 = answer;   
	console.log(ans0);

});
//////////////////////////////////////
//////delete operating window//////////
$('.del').click(function(){
	score= 0  ; 
	log = '';
	operator = '';
	current = 0;
	answer = 0; 
	$("#action").html(log);
	$("#result").html(0);
	
	console.log('narazie ok ');
	

});
//////////////////////////////////////
//////equal//////////
$('#equals').click(function(){
	if(log !== 0){
	 $("#result").html(answer);
	 console.log(ans0);
	
	};

});
//////////////////////////////////////
///////////////////////////////////////
});