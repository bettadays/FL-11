const formatTime = minutes => {

    let daysCount = 0;
    let hoursCount = 0;
    let minutesCount = 0;


    daysCount = parseInt(minutes / 1440);
    minutes = minutes % 1440;
    hoursCount = parseInt(minutes / 60);
    minutes = minutes % 60;
    minutesCount = minutes % 60;

    const result = ` ${daysCount} day(s) ${hoursCount} hour(s) ${minutesCount} minute(s).`

    console.log(result);
    return result;
}

formatTime(3601);