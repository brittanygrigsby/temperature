//Create function
function convertTemperatureRange(startValue, endValue, scale) {
  output = "";

  output += "Converting from " + scale + ":\n";

  for (temp = startValue; temp <= endValue; temp++) {
    if (scale === "C") {
      converted = (temp * 9 / 5) + 32;
      output += temp + "°C = " + converted.toFixed(2) + "°F\n";
    } else if (scale === "F") {
      converted = (temp - 32) * 5 / 9;
      output += temp + "°F = " + converted.toFixed(2) + "°C\n";
    } else {
      output = "Invalid input. Please enter 'C' or 'F'.";
      break;
    }
  }

  document.getElementById("output").innerText = output;
}

// Ask the user for input
start = prompt("Enter the starting temperature:");
end = prompt("Enter the ending temperature:");
scale = prompt("Enter the scale to convert from (C or F):");

scale = scale.toUpperCase();

convertTemperatureRange(start, end, scale);