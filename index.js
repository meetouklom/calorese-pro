let gender = '';

function selectGender(selectedGender) {
  gender = selectedGender;

  // ลบคลาส active ทั้งสอง
  document.getElementById("maleBtn").classList.remove("active");
  document.getElementById("femaleBtn").classList.remove("active");

  // เพิ่ม active เฉพาะที่เลือก
  if (gender === "male") {
    document.getElementById("maleBtn").classList.add("active");
  } else {
    document.getElementById("femaleBtn").classList.add("active");
  }
}

function calculateBMR() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);
  const activityLevel = parseFloat(document.getElementById("activityLevel").value);

  let bmr = 0;

  if (!gender || isNaN(weight) || isNaN(height) || isNaN(age) || isNaN(activityLevel)) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน และเลือกเพศกับระดับกิจกรรม");
    return;
  }

  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = bmr * activityLevel;

  document.getElementById("bmrResult").textContent = `BMR (kcal): ${bmr.toFixed(2)}`;
  document.getElementById("tdeeResult").textContent = `TDEE (kcal): ${tdee.toFixed(2)}`;
}
