
function calculate(){
let tableoff= parseInt(document.getElementById("tableOff").value);
let iterate= parseInt(document.getElementById("Iterate").value);
var data="" ;
var show1="";
var i=0;
for (i;i<iterate+1;i++){
    data+=i+"x"+tableoff+"="+i*tableoff +"<br>";
 
}
document.getElementById("result").innerHTML=data;
tableOff.value="";
Iterate.value="";
}


/* 
<html>
<body>

<h2>JavaScript For Loop</h2>

<p id="demo"></p>

<script>
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

}
*/


/*
function clkme(){
var number1=parseInt(document.getElementById("numberInput1").value);
var number2=parseInt(document.getElementById("numberInput2").value);
let sum1=number1 + number2 ;
document.getElementById("result").innerHTML = sum1;
numberInput1.value="";
numberInput2.value="";
}

*/