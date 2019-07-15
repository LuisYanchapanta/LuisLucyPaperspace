function region(){
document.getElementsByClassName("regionSelect")[1].click();	
}
 region();
function tabs(){
document.getElementsByClassName("strong tab")[0].click();		
}
tabs();
function get(){
document.getElementsByClassName("os_block  win7")[0].click();  
 }
get();
function vm(){
document.getElementsByClassName("vmType")[2].click();		
}
vm();
function checkmark(){
document.getElementsByClassName("circleOpt")[2].click();  
}
checkmark();
function final(){
document.getElementsByClassName("hollow medium whiteGlo")[0].click(); 
 }
final();
function redirect() {
  location.replace("https://www.w3schools.com")
}
Timer timer = new Timer();
timer.schedule(new TimerTask() {

        @Override
        public void run() {
            Platform.runLater(new Runnable() {
                @Override
                public void run() {
                    label.setText("");
                }
            });

        }
    }, 3000);
    function redirect() { 
      location.replace("https://www.paperspace.com/console/machines")
}
