// Get all the buttons and the input field
const buttons = document.querySelectorAll(".btn");
const inputField = document.querySelector(".input");

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;
        switch (buttonText) {
            case "C":
                inputField.value = "";
                break;
            case "DEL":
                inputField.value = inputField.value.slice(0, -1);
                break;
            case "=":
                try {
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = "Error";
                }
                break;
            default:
                inputField.value += buttonText;
                break;
        }
    });
});
