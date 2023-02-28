const rangeInputs = document.querySelectorAll('input[type="range"]');
const sub = document.querySelector('form');
const userName = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const contactContainer = document.getElementById("contact");
console.log(contactContainer);

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}
rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

sub.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value === "") {
    return null;
  } else {
    const popUp = document.createElement("div");
    const okBtn = document.createElement("button");
    okBtn.textContent = "ok";
    popUp.innerHTML = `
    <p>Monsieur <span>${userName.value}</span>, je vous contacterai à l'adresse email fourni <span>${email.value}</span><p/>
    `;
    popUp.classList.add("pop");
    okBtn.classList.add("btn");
    okBtn.addEventListener("click", () => {
      okBtn.parentElement.remove();
      userName.value = "";
      email.value = "";
    });
    contactContainer.appendChild(popUp);
    popUp.appendChild(okBtn);
  }
});