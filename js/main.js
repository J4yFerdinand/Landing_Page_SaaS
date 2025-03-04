document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("header button");

  button.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
});