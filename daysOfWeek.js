function dayOfWeek(day) {
    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday'
     || day == 'Thursday' || day == 'Friday' || day == 'Saturday' || day == 'Sunday') {
        console.log(`Today is ${day}.`);
    } else {
        console.log(`Invalid day`);
    }
}

dayOfWeek('f')

