function calculateTimeDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // Ajustar si los días son negativos
    if (days < 0) {
        months -= 1;
        // Agregar los días del mes anterior
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // Ajustar si los meses son negativos
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}
//faltan
function updateTimeToFuture(date, place, msj) {
    const futureDate = new Date(date);
    const now = new Date();
    const timeDifference = calculateTimeDifference(now, futureDate);

    const yearsText = timeDifference.years > 1 ? `${timeDifference.years} años, ` : 
                      timeDifference.years === 1 ? `${timeDifference.years} año, ` : "";
    const monthsText = timeDifference.months > 1 ? `${timeDifference.months} meses, ` : 
                       timeDifference.months === 1 ? `${timeDifference.months} mes, ` : "";
    const daysText = timeDifference.days > 1 ? `${timeDifference.days} días` : 
                     timeDifference.days === 1 ? `${timeDifference.days} día` : "";

    const msjShow = `${msj} ${yearsText}${monthsText}${daysText}`;
    document.getElementById(place).textContent = msjShow;
}
//hace
function updateTimeFromPast(date, place, msj) {
    const pastDate = new Date(date);
    const now = new Date();
    const timeDifference = calculateTimeDifference(pastDate, now);

    const yearsText = timeDifference.years > 1 ? `${timeDifference.years} años, ` : 
                      timeDifference.years === 1 ? `${timeDifference.years} año, ` : "";
    const monthsText = timeDifference.months > 1 ? `${timeDifference.months} meses, ` : 
                       timeDifference.months === 1 ? `${timeDifference.months} mes, ` : "";
    const daysText = timeDifference.days > 1 ? `${timeDifference.days} días` : 
                     timeDifference.days === 1 ? `${timeDifference.days} día` : "";

    const msjShow = `${msj} ${yearsText}${monthsText}${daysText}`;
    document.getElementById(place).textContent = msjShow;
}





