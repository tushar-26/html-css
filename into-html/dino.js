document.querySelector(".textbox").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    alert(document.querySelector(".textbox").value);
    document.querySelector(".textbox").value = "lowe";
  }
});
