function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;
    let result = '';

    if (isNaN(temperature)) {
        result = "Please enter a valid number!";
    } else {
        if (unit === 'Celsius') {
            result = `${temperature}°C = ${(temperature * 9/5) + 32}°F = ${temperature + 273.15}K`;
        } else if (unit === 'Fahrenheit') {
            result = `${temperature}°F = ${((temperature - 32) * 5/9)}°C = ${((temperature - 32) * 5/9) + 273.15}K`;
        } else if (unit === 'Kelvin') {
            result = `${temperature}K = ${temperature - 273.15}°C = ${(temperature - 273.15) * 9/5 + 32}°F`;
        }
    }

    document.getElementById('result').innerText = result;
}
