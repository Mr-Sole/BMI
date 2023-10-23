function calculateBMI() {
    const weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    const weightUnit = document.getElementById('weight-unit').value;
    const heightUnit = document.getElementById('height-unit').value;
    const resultElement = document.getElementById('result');

    if (weight > 0 && height > 0) {
        if (weightUnit === 'lbs') {
            weight *= 0.453592; // Convert pounds to kilograms
        }
        if (heightUnit === 'ft') {
            height *= 0.3048; // Convert feet to meters
        }
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        resultElement.innerHTML = `Your BMI is: <span class="bmi-value">${bmi}</span>. You are <span class="bmi-category">${category}</span>.`;
    } else {
        resultElement.innerHTML = 'Please enter valid values.';
    }
}




