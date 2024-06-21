function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    let result;

    if (isNaN(temperature)) {
        result = 'Please enter a valid number';
    } else {
        if (fromUnit === toUnit) {
            result = `${temperature} ${toUnit}`;
        } else if (fromUnit === 'Celsius') {
            if (toUnit === 'Fahrenheit') {
                result = `${(temperature * 9/5) + 32} Fahrenheit`;
            } else if (toUnit === 'Kelvin') {
                result = `${temperature + 273.15} Kelvin`;
            }
        } else if (fromUnit === 'Fahrenheit') {
            if (toUnit === 'Celsius') {
                result = `${(temperature - 32) * 5/9} Celsius`;
            } else if (toUnit === 'Kelvin') {
                result = `${((temperature - 32) * 5/9) + 273.15} Kelvin`;
            }
        } else if (fromUnit === 'Kelvin') {
            if (toUnit === 'Celsius') {
                result = `${temperature - 273.15} Celsius`;
            } else if (toUnit === 'Fahrenheit') {
                result = `${((temperature - 273.15) * 9/5) + 32} Fahrenheit`;
            }
        }
    }

    document.getElementById('result').textContent = result;
}
