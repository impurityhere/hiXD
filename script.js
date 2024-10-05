
function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    dateTimeElement.innerHTML = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);

updateDateTime();



window.onload = function() {
    document.getElementById('loading').style.display = 'none';
};
