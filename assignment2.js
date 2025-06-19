
console.log("Temperature");

function convertToFahrenheit(){
    let temperature= prompt ("Enter Celsius Temperature:");
    document.getElementById("results").innerHTML += `<p>The 
    conversion of ${temperature} Celsius to Fahrenheit is ${(temperature*1.8) + 32} </p>`;

}

//create a button on the HTML