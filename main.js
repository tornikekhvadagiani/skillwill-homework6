// შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background

// Script.js
function toggleModal() {
  const modalConteiner = document.getElementById("modalContainer");
  modalConteiner.classList.toggle("hidden");
}

// ● შექმენი input და button
// ● input-ში მომხმარებელი ჩაწერს ფერს და
// button ღილაკზე დაწკაპების შემდეგ body-ს
// background შეიცვლება ჩაწერილ ფერად
// ● (ფერები რომლის ჩაწერაც შეუძლია: red,
// blue, green, black, white)
// ● თუ სხვა ფერი ჩაწერა, გამოუტანე
// შეტყობინება alert-ის საშუალებით

// Script.js
const validColors = ["red", "blue", "green", "black", "white"];
const colorInput = document.getElementById("colorInput");
const changeColorButton = document.getElementById("changeColorButton");

changeColorButton.addEventListener("click", () => {
  const userColor = colorInput.value.trim().toLowerCase();

  if (validColors.includes(userColor)) {
    document.body.style.backgroundColor = userColor;
  } else {
    alert(
      "Invalid color! Please enter one of the following: red, blue, green, black, or white."
    );
  }
});

// ● შექმენი input, სადაც მომხმარებელს
// შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები,
// average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და
// გამოუტანე ეკრანზე
// ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

// Script.js
const numberInput = document.getElementById("numberInput");
const calculateAverage = document.getElementById("calculateAverage");
const result = document.getElementById("result");

calculateAverage.addEventListener("click", () => {
  const input = numberInput.value.trim();

  if (!input) {
    result.textContent = "Please enter some numbers!";
    return;
  }

  const numbers = input.split(":").map((num) => parseFloat(num));

  if (numbers.some(isNaN)) {
    result.textContent = "Please enter valid numbers separated by ':'!";
    return;
  }

  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;

  result.textContent = `The average is: ${average.toFixed(2)}`;
});
