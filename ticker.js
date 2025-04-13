setInterval(()=>{
    let startTimeStamp = Date.UTC(2025, 3, 11, 17, 0, 0, 0);
    let currentTimeStamp = Date.now();
    let targetTimeStamp = Date.UTC(2025, 3, 28, 0, 0, 0, 0);

    console.log(startTimeStamp, currentTimeStamp,targetTimeStamp)

    let percentage = ((currentTimeStamp-startTimeStamp)/(targetTimeStamp-startTimeStamp)) * 100
    percentage = Math.round(percentage*10000)/10000

    console.log(percentage)

    let percentElement = document.getElementById("percentage");
    percentElement.textContent = percentage.toString();
}, 500)