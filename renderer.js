// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {dialog} = require('electron').remote;

let timer = {
	time: 0,
	id: 0,
	timeout: null
};

var newTaskBtn = document.getElementById('create-btn');
newTaskBtn.addEventListener('click', function(){
	 runTimer(timer);
    });


var timerStopped = true;


function addSecond(timer){
	timer.time+=1;
	document.getElementById('timer').innerHTML = timer.time;
}
setInterval(addSecond(timer), 1000);
function runTimer(timer){

	if(timerStopped){
		//setInterval(funca.bind(null,10,3),500);
		var timeout = setInterval(addSecond.bind(null,timer), 1000);
		timer.timeout = timeout;
		
		document.getElementById("create-btn").innerHTML = "Stop Timer";
		timerStopped = false;
	}else{
		stopTimer(timer);
		document.getElementById("create-btn").innerHTML = "Start Timer";
		timerStopped = true;
	}
}

function stopTimer(timer){
	clearTimeout(timer.timeout);
}
