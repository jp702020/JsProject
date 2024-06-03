const form = document.querySelector("form");

// height = height / 100;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  if (height != "" || weight != "") {
    // console.log(height.value / 100);
    // console.log(weight.value);

    let bmi = (weight / (height * height)).toFixed(1);

    const result = document.getElementById("results");

    result.innerText = bmi;
  }
});
