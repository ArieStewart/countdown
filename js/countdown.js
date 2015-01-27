// Function to complete.
function CountDownTimer(dateTime, divId) {
    var end     = new Date(dateTime);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour   = _minute * 60;
    var _day    = _hour * 24;
    var timer;

    function showRemaining() {
    	var now = new Date();
    	var timeleft = end - now;

       	var days = Math.floor(timeleft/_day);
       	var hours = Math.floor((timeleft % _day)/_hour);
       	var mins = Math.floor((timeleft % _hour)/_minute);
       	var secs = Math.floor((timeleft % _minute)/_second);

       	document.getElementById(divId).innerHTML = 'Only ' + days + ' days, ' + hours + '  hours, ' + mins + ' minutes, ' + secs 
       	+ ' seconds left until Groundhog day.';
    }

    timer = setInterval(showRemaining(), 1000);
}

// Enter the date and time as a string in the following format.  Second parameter is the HTML id of element where you want
//    the countdown to appear.
CountDownTimer('02/02/2015 12:00 AM', 'countDown');