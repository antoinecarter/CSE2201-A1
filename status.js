var checkStatus = function () {
	var date = new Date();
	var time = date.getHours();
	var day = date.getDay();

	if((time >= 8) && (time <= 17) && (day != 0)){
		message = "<span style=\"color: #207567\">WE'RE OPEN!</span>";
	}else{
		message = "<span style=\"color: #DC1C13\">SORRY, WE'RE CLOSED!</span>";
	}
	document.getElementById("timer").innerHTML = message;
	setTimeout(checkStatus, 15000);
}

var checkDateTime = function() {
  var date = new Date();

	var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

	var todayTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

	dateTime = today+' '+todayTime;

	document.getElementById("dateTime").innerHTML= dateTime;
	setTimeout(checkDateTime, 1000);
}

checkDateTime();

checkStatus();
