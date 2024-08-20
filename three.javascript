function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    
    if (isNaN(minValue) || isNaN(maxValue)) {
        alert('Please enter valid numbers.');
        return;
    }

    if (minValue > maxValue) {
        alert('Minimum value should be less than or equal to maximum value.');
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('result').textContent = `Random Number: ${randomNumber}`;
}
