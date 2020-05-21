var inputs = document.querySelectorAll("input[type='password']");

inputs.forEach(function (input) {
  input.setAttribute("type", "text");
  setTimeout(function () {
    input.setAttribute("type", "password");
  }, 4000);
});
