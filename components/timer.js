function calculateTimeDifference(startDate, endDate) {
    const totalMilliseconds = Math.abs(endDate - startDate);

    const msSecond = 1000;
    const msMinute = msSecond * 60;
    const msHour = msMinute * 60;
    const msDay = msHour * 24;
    const msMonth = msDay * 30; // Aproximación: 30 días por mes
    const msYear = msDay * 365; // Aproximación: 365 días por año
    
    const years = Math.floor(totalMilliseconds / msYear);
    const months = Math.floor((totalMilliseconds % msYear) / msMonth);
    const days = Math.floor((totalMilliseconds % msMonth) / msDay);
    const hours = Math.floor((totalMilliseconds % msDay) / msHour);
    const minutes = Math.floor((totalMilliseconds % msHour) / msMinute);
    const seconds = Math.floor((totalMilliseconds % msMinute) / msSecond);

    return { years, months, days, hours, minutes, seconds };
}

function timer(date, place, msj, isFuture) {
    const dateObj = new Date(date);
    const now = new Date();
    let timeDifference;
    let msjShow;

        if((isFuture && dateObj > now) || (!isFuture && dateObj < now)){
            if(isFuture){
                timeDifference = calculateTimeDifference(now, dateObj);
            }else{
                timeDifference = calculateTimeDifference(dateObj, now);
            }
            const years = timeDifference.years;
            const months = timeDifference.months;
            const days = timeDifference.days;
            const hours = timeDifference.hours;
            const minutes = timeDifference.minutes;
            const seconds = timeDifference.seconds;
        
            const yearsText = years > 1 ? `${years} años,` : years == 1 ? `${years} año,` : "";
            const monthsText = months > 1 ? `${months} meses,` : months == 1 ? `${months} mes,` : "";
            const daysText = days > 1 ? `${days} dias,`  : days == 1 ? `${days} día,` : "";
            const hoursText = hours > 1 ? `${hours} horas,`  : hours == 1 ? `${hours} hora,` : "";
            const minutesText = minutes > 1 ? `${minutes} minutos,` : minutes == 1 ? `${minutes} minuto,` : "" ;
            const secondsText = seconds > 1 ? `${seconds} segundos` : seconds == 1 ? `${seconds} segundo` : "" ;
        
            msjShow = `${msj} ${yearsText} ${monthsText} ${daysText} ${hoursText} ${minutesText} ${secondsText}`;
        }else{
            if(isFuture){
                msjShow = "¡Fecha alcanzada!"
            }else{
                msjShow = "Fecha no iniciada"
            }
        }

    document.querySelector(place).textContent = msjShow;
}



