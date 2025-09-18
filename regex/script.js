const formulario = document.getElementById("regex-form");

const submitForm = (e) => {
  e.preventDefault();

  let userInput = formulario.testString;

  validarUsuario(userInput.value);
};

formulario.addEventListener("submit", submitForm);

function validarUsuario(user) {
  const patterns = /^[a-zA-Z]{6,}$/;
  const validUser = patterns.test(user);
  if (validUser) {
    document.querySelector("h1").textContent = user;
    document.forms[0].testString.setAttribute("class", "sucess");
  } else {
    document.forms[0].testString.setAttribute("class", "error");
    const span = `<p>name or value invalid</p>`;
    document.getElementById("result").insertAdjacentHTML("afterend", span);
    setTimeout( _ => {
      span.textContent = ""
    },2000)
  }
  document.forms[0].testString.value = "";
}

const input = document.forms[0].testString.addEventListener("keyup", (e) => {
  e.target.value;
});
