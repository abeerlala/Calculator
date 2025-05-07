const input = document.getElementById('input');
const output = document.getElementById('output');
const btnAC = document.getElementById('AC');
const btnEqual = document.getElementById('=');
const btnDel = document.getElementById('Del');
const allBtns = document.querySelectorAll(".btn");

// Prevents Text Selection
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// Changes Input Dynamically
allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id !== '=' && btn.id !== 'AC' && btn.id !== 'Del') {
            input.innerText = input.innerText + btn.innerText;
        }
    });
});

// Clears Input And Outpu If AC is pressed
btnAC.addEventListener("click", () => {
    input.innerText = "";
    output.innerText = "";
});

// Deletes Last Char Of Input If Del Is Pressed
btnDel.addEventListener("click", () => {
    input.innerText = input.innerText.slice(0, -1)
});

// Gives Output/Error If = is pressed
btnEqual.addEventListener("click", () => {
    try {
        const expression = input.innerText.replace("^", "**");
        output.innerText = eval(expression);
    }
    catch (e) {
        alert("Invalid Expression")
    }
});


// Makes The Calculator Useable By Physical Keyboard
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.^".includes(key)) {
        input.innerText += key;
    }
    else if (key === "Enter" || key === "=") {
        try {
            const expression = input.innerText.replace(/\^/g, "**");
            output.innerText = eval(expression);
        } catch {
            alert("Invalid Expression");
        }
    }
    else if (key === "Backspace") {
        input.innerText = input.innerText.slice(0, -1);
    }
    else if (key === "Escape") {
        input.innerText = "";
        output.innerText = "";
    }
});