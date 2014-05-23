
function changeInfomation(div, text){
	$(div).text(text);
}

function showWaiting(){
	$("#base-modal").find(".modal-body p").text("ระบบกำลังทำงาน กรุณารอสักครู่");
	$("#base-modal").modal('show');
}

function hideReaderFailModel(){
	$("#reader-fail-modal").modal('hide');
}

function updateClock (){
	var currentTime = new Date ( );
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
	$("#global-time").html(currentTimeString);
}

function appendStampRow(name, code, classroom, stamp, image){
	var stampRow = $("#template-row .stamp-row:first").clone();
	$(stampRow).find("#student-name").text(name);
	$(stampRow).find("#student-code").text(code);
	$(stampRow).find("#student-classroom").text(classroom);
	image = image == null ? "img/student.png" : image
	$(stampRow).find("#student-image").attr("src",image);
	$(stampRow).find("#student-stamp").text(stamp);	
	$('#stamp-content').prepend(stampRow);
	$('#stamp-content .stamp-row:first').css({backgroundColor:"#F1C40F"}).animate({backgroundColor: '#fff'}, 'slow');
	var numRow = $('.stamp-row').length;
	if(numRow > 5){
		$('#stamp-content .stamp-row:last').remove();
	}	
}

function displayModal(message, color){
	$("#base-modal").find(".modal-body p").text(message);	
	if(color){
		$("#base-modal").find(".modal-content").css({backgroundColor: color});
	}
	$("#base-modal").modal('show');
}

function closeModal(){
	$("#base-modal").modal('hide');
	//$("#base-modal").find(".modal-body p").text("-");
	$("#base-modal").find(".modal-content").css({backgroundColor: '#E74C3C'});
}

$(document).ready(function(){	
	//showWaiting();
	updateClock();
	setInterval('updateClock()', 1000);
	closeModal();
	displayModal("ระบบกำลังทำงาน กรุณารอสักครู่","#f73d40");
});