const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.querySelector("button");

// height = height / 100;
if (height.value != null || weight.value != null) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // console.log(height.value / 100);
    // console.log(weight.value);

    let bmi = (weight.value / ((height.value * height.value) / 10000)).toFixed(
      1
    );

    const result = document.getElementById("results");

    result.innerText = bmi;
  });
}
