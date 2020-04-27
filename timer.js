function new_timer(min,sec){
  var time = 1000*sec+1000*60*min;
  var text = document.getElementById('main_timer');
  function update_timer(){
    if(sec == 0){
      if(min == 0){
        clearInterval(start_timer);
        return false;
      }else{
        sec=59;
        min-=1;
      }
    }else{
      sec-=1;
    }
    if(sec <=9 && min <=9){
      text.innerHTML = 'Осталось 0'+min+':0'+sec;
    } else if(sec <=9 && min >=10){
      text.innerHTML = 'Осталось '+min+':0'+sec;
    } else if(sec >=10 && min <=9){
      text.innerHTML = 'Осталось 0'+min+':'+sec;
    }else{
      text.innerHTML = 'Осталось '+min+':'+sec;
    }

  }
  let start_timer = setInterval(update_timer, 1000);
//ss  setTimeout(()=>{clearInterval(start_timer);}, time);
}
