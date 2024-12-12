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
function updateTimeToFuture(date, place) {
    const futureDate = new Date(date);
    const now = new Date();
    const timeDifference = calculateTimeDifference(now, futureDate);

    document.getElementById(place).textContent = 
        `${timeDifference.years} años, ${timeDifference.months} meses, ${timeDifference.days} días, ${timeDifference.hours} horas, ${timeDifference.minutes} minutos, ${timeDifference.seconds} segundos`;
}
//hace
function updateTimeFromPast(date, place) {
    const pastDate = new Date(date);
    const now = new Date();
    const timeDifference = calculateTimeDifference(pastDate, now);

    document.getElementById(place).textContent = 
        `${timeDifference.years} años, ${timeDifference.months} meses, ${timeDifference.days} días, ${timeDifference.hours} horas, ${timeDifference.minutes} minutos, ${timeDifference.seconds} segundos`;
}

const OlderAge = '2026-09-18T00:00:00'; 
const PairDate = '2024-10-17T00:00:00'; 
const TwoMonths = "2024-12-17T00:00:00";

function updateTimers() {
    updateTimeToFuture(OlderAge, "OldAge");
    updateTimeFromPast(TwoMonths, "Two");
    updateTimeFromPast(PairDate, "PairDate");
}

setInterval(updateTimers, 1000);