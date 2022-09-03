// Listeners for all buttons
document.getElementById("num1").addEventListener("click", function(){display('1');});
document.getElementById("num2").addEventListener("click", function(){display('2');});
document.getElementById("num3").addEventListener("click", function(){display('3');});
document.getElementById("num4").addEventListener("click", function(){display('4');});
document.getElementById("num5").addEventListener("click", function(){display('5');});
document.getElementById("num6").addEventListener("click", function(){display('6');});
document.getElementById("num7").addEventListener("click", function(){display('7');});
document.getElementById("num8").addEventListener("click", function(){display('8');});
document.getElementById("num9").addEventListener("click", function(){display('9');});
document.getElementById("num0").addEventListener("click", function(){display('0');});

document.getElementById("op+").addEventListener("click", function(){display('+');});
document.getElementById("op-").addEventListener("click", function(){display('-');});
document.getElementById("op*").addEventListener("click", function(){display('*');});
document.getElementById("op/").addEventListener("click", function(){display('/');});
document.getElementById("op.").addEventListener("click", function(){display('.');});

document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("op=").addEventListener("click", calculate);


// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
 }
   
   // This function display values
 function display(out) {
    document.getElementById("result").value += out;
 }
   // This function evaluates the expression and return result
 function calculate() {
    var p = document.getElementById("result").value;
    console.log(p);
    var q = eval(p);
    console.log(q);
    clearScreen()
    display(q);
 }