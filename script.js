const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#";
const captcha = document.querySelector(".captcha");
const input = document.querySelector("#input");
const submit = document.querySelector("#Submit");
const refresh = document.querySelector("#refresh");

submit.addEventListener("click", () => {
  const inpval = input.value;
  const captchaVal = captcha.textContent.trim();

  if (inpval == captchaVal) {
    alert("captch is matched");
  } else {
    alert("captcha is not matched");
  }
});

refresh.addEventListener("click", () => {
  captcha.textContent = generateCaptcha();
});

function generateCaptcha() {
  let captch_gen = "";
  for (let i = 0; i < 6; i++) {
    captch_gen += chars[Math.floor(Math.random() * chars.length)];
  }
  return captch_gen;
}

