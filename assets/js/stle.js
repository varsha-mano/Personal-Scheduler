var dt = new Date();
function RenderDate() {
    
dt.setDate(1);
var day = dt.getDay();
console.log(dt.getDay());

var edate = new Date(

    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate();

var pdate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

var today = new Date();

var months = ["January", 
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November", 
    "December"];
document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("Month").innerHTML = months[dt.getMonth()];

var cells = "";
for(x = day; x>0; x--){
    cells+= "<div class = 'prev_date'>" + (pdate-x+1) + "</div>";
}
for(i = 1; i<=edate; i++){
   if(i==today.getDate() && dt.getMonth() == today.getMonth()){
    cells+= "<div class = 'Today'>" + i + "</div>";
   }
   else{
    cells+= "<div>" + i + "</div>";
   }
}
document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para){
    if(para == 'previous'){
        dt.setMonth(dt.getMonth()-1);
        
    }
    else if(para == 'next'){
        dt.setMonth(dt.getMonth()+1);
        
    }
    RenderDate();

}

