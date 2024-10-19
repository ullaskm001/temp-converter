function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    let temperature = parseFloat(tempInput);

    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp = '';
    let convertedUnit = '';

    if (unit === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemp = temperature - 273.15;
        convertedUnit = 'Celsius';
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
}