const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");
    const action = btn.getAttribute("data-action");

    if (action === "clear") {
      display.value = "";
    } 
    else if (action === "delete") {
      display.value = display.value.slice(0, -1);
    } 
    else if (action === "equal") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else if (value) {
      display.value += value;
    }
  });
});

// Allow keyboard input
document.addEventListener("keydown", e => {
  if (/[0-9+\-*/.%]/.test(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    display.value = "";
  }
});