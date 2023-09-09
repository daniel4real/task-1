
function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];

    
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedUTC = now.toLocaleDateString('en-US', options);

    document.getElementById("dayOfWeek").textContent = dayOfWeek;
    document.getElementById("utcTime").textContent = formattedUTC;
}

updateDateTime();