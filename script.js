const body = document.body;
const btn = document.body.querySelector("button");

btn.classList.add("buttonStyle");

btn.addEventListener("click", () => {
  if (body.style.backgroundColor == "black") {
    body.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.classList.toggle("boxShadow");
    btn.classList.toggle("btn-border-white");
    document.title = "Good Morning!";
  } else {
    body.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.classList.toggle("boxShadow");
    btn.classList.toggle("btn-border-white");
    document.title = "Good Night!";
  }
});
