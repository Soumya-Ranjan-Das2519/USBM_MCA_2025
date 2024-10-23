function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  let resultMessage;

  // Input validation
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultMessage =
      "Please enter valid positive numbers for height and weight.";
  } else {
    // const bmi = (weight / (height * height)).toFixed(2);
    // Convert height to meters
    const heightInMeters = feet * 0.3048 + inches * 0.0254;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // BMI classification
    if (bmi < 18.5) {
      resultMessage = `Your BMI is ${bmi}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultMessage = `Your BMI is ${bmi}. You have a normal weight.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultMessage = `Your BMI is ${bmi}. You are overweight.`;
    } else {
      resultMessage = `Your BMI is ${bmi}. You are obese.`;
    }
  }

  // Display result
  document.getElementById("result").textContent = resultMessage;
}
