let displayText = document.getElementById("screen");

function display(num) {
    displayText.value += num;
}

function calculate() {
    try {
        displayText.value = eval(displayText.value);
    }
    catch(err) {
        alert("Invalid Input!");
    }
}

document.getElementsByTagName("button")[2].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[3].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[4].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[5].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[6].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[7].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[8].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[9].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[10].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[11].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[12].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[13].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[14].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[15].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[16].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[17].addEventListener('click', function() {
    const buttonText = this.textContent;
    display(buttonText);
});

document.getElementsByTagName("button")[18].addEventListener('click', function() {
    calculate();
});