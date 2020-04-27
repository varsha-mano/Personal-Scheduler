var dt = new Date();

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
    "December"];
document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("Month").innerHTML = months[dt.getMonth()];

var cells = "";
for(i = 1; i<30; i++){
    cells+= 
}



