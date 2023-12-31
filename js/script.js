function refresh(){
    var startTime;
    var endTime;
     
    startTime = new Date(2023,0,1);
    endTime = new Date();

    var element = document.getElementById('display');
    element.innerHTML = "year progress:" +  ((endTime.getTime() - startTime.getTime())/31536000000*100)+"%";

    var element = document.getElementById('date');
    element.innerHTML =  endTime.toLocaleTimeString('ja-JP', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 });;

}


setInterval(() => {
    refresh();
  }, 1);