const numFormat = new Intl.NumberFormat('en-US', { 
    minimumFractionDigits: 4 
});

setInterval(()=>{
    let startTimeStamp = Date.UTC(2025, 3, 11, 17, 0, 0, 0);
    let currentTimeStamp = Date.now();
    let targetTimeStamp = Date.UTC(2025, 3, 28, 0, 0, 0, 0);

    let percentage = ((currentTimeStamp-startTimeStamp)/(targetTimeStamp-startTimeStamp)) * 100
    percentage = Math.round(percentage*10000)/10000

    for (let percentElement of document.getElementsByClassName("percentage-num")) {    
        percentElement.textContent = numFormat.format(percentage);
        console.log(percentElement.textContent)
    }
}, 500)