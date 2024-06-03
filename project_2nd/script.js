const form = document.querySelector("form");

// height = height / 100;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("results");
  if (height != "" || weight != "") {
    // console.log(height.value / 100);
    // console.log(weight.value);

    let bmi = (weight / (height * height)).toFixed(1);

    result.innerText = bmi;
  } else {
    result.innerText = "please give a vild height or weight";
  }
});
