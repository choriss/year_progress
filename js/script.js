function refresh(){
    var startTime;
    var endTime;

    // 現在の日時を取得
    var now = new Date();

    // 今年の終了時刻を設定
    var startTime = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
     
    //startTime = new Date(new Date().getFullYear+1,0,1);
    endTime = new Date();

    var element = document.getElementById('display');
    var percent = ((endTime.getTime() - startTime.getTime())/31536000000*100)
    var n = 6

    element.innerHTML = (Math.floor( percent * Math.pow( 10, n ) ) / Math.pow( 10, n )).toFixed(6) +"%";

    var element = document.getElementById('date');
    element.innerHTML =  getRemainingTime()

    var element = document.getElementById('clock');
    element.innerHTML =  getCurrentTime()

}

function getRemainingTime() {
    // 現在の日時を取得
    const now = new Date();
    
    // 今年の終了時刻を設定
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    
    // 現在の時刻から今年の終了時刻までの残り時間を計算
    const remainingTime = endOfYear - now;
    
    // ミリ秒、秒、分、時を計算
    const milliseconds = remainingTime % 1000;
    const seconds = Math.floor(remainingTime / 1000) % 60;
    const minutes = Math.floor(remainingTime / (1000 * 60)) % 60;
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    
    // 残り時間をhh:mm:ss.sss形式の文字列に整形
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    
    return formattedTime;
    }

function getCurrentTime() {
    // 現在の日時を取得
    const now = new Date();
    
    // 現在の時刻のミリ秒、秒、分、時を取得
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // 現在時刻をhh:mm:ss.sss形式の文字列に整形
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    
    return formattedTime;
    }
      

      

setInterval(() => {
    refresh();
  }, 1);
