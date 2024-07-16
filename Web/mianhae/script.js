const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

btn1.addEventListener("click", () => {
  btn2.style.position = "static";
  Swal.fire({
    title: "Yeyyy",
    text: "Maaciyeyo",
    icon: "love",
  });
});

btn2.addEventListener(
  "mouseover",
  () => {
    btn2.style.position = "absolute";
    btn2.style.left = Math.random() * 100 + "%";
    btn2.style.top = Math.random() * 100 + "%";
  },
  false
);

btn2.addEventListener(
  "click",
  () => {
    btn2.style.position = "absolute";
    btn2.style.left = Math.random() * 100 + "%";
    btn2.style.top = Math.random() * 100 + "%";
  },
  false
);
