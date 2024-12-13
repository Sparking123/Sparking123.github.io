
const OlderAge = '2026-09-18T00:00:00'; 
const PairDate = '2024-10-17T00:00:00'; 
const TwoMonths = "2024-12-17T00:00:00";

function updateTimers() {
    updateTimeToFuture(OlderAge, "OldAge", "+18 años 🥺 en: ");
    updateTimeFromPast(PairDate, "Ago", "Juntos desde hace");
}

setInterval(updateTimers, 1000);

function calculateTimeDifference(startDate, endDate) {
    const totalMilliseconds = Math.abs(endDate - startDate);

    const years = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);

    return { years, months, days, hours, minutes, seconds };
}
//faltan
function updateTimeToFuture(date, place, msj) {
    const futureDate = new Date(date);
    const now = new Date();
    const timeDifference = calculateTimeDifference(now, futureDate);

    const yearsText = timeDifference.years > 1 ? `${timeDifference.years} años, ` : timeDifference.years == 1 ? `${timeDifference.years} año, ` : "";
    const monthsText = timeDifference.months > 1 ? `${timeDifference.months} meses, ` : `${timeDifference.months} mes, `;
    const msjShow = `${msj} ${yearsText} ${monthsText} ${timeDifference.days} días, ${timeDifference.hours} horas, ${timeDifference.minutes} minutos, ${timeDifference.seconds} segundos`;

    document.getElementById(place).textContent = msjShow;
}
//hace
function updateTimeFromPast(date, place, msj) {
    const pastDate = new Date(date);
    const now = new Date();
    const timeDifference = calculateTimeDifference(pastDate, now);

    const yearsText = timeDifference.years > 1 ? `${timeDifference.years} años, ` : timeDifference.years == 1 ? `${timeDifference.years} año, ` : "";
    const monthsText = timeDifference.months > 1 ? `${timeDifference.months} meses, ` : `${timeDifference.months} mes, `;

    const msjShow = `${msj} ${yearsText} ${monthsText} ${timeDifference.days} días, ${timeDifference.hours} horas, ${timeDifference.minutes} minutos, ${timeDifference.seconds} segundos`;

    document.getElementById(place).textContent = msjShow;
}



