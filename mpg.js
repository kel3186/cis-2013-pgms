 var floatMiles, gallons, mpg;
     floatMiles = parseFloat(prompt("Enter miles driven"));
     floatGallons = parseFloat(prompt("Enter gallons of gas used"));
     floatMpg = parseFloat(floatMiles/gallons);
     alert("Miles per gallon = " + floatMpg.toFixed(2));