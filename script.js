function convertTemp() {
    var temp = document.getElementById("temp").value;
    var scale = document.getElementById("scale").value;
  
    if (scale === "celsius") {
      var fahrenheit = (temp * 9 / 5) + 32;
      document.getElementById("result").innerHTML = temp + " Celsius is " + fahrenheit + " Fahrenheit";
    } else {
      var celsius = (temp - 32) * 5 / 9;
      document.getElementById("result").innerHTML = temp + " Fahrenheit is " + celsius + " Celsius";
    }
  }
  