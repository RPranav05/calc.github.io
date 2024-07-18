function AppendToDisplay(value) {
    const display = document.getElementById('Display');
    display.value += value;
    display.scrollLeft = display.scrollWidth; // Auto-scroll to the end
}

function Calculate() {
    const display = document.getElementById('Display');
    try {
        display.value = eval(display.value.replace(/x/g, '*'));
    } catch (e) {
        display.value = 'Error';
    }
}

function Clear() {
    document.getElementById('Display').value = '';
}

document.getElementById('themeToggle').addEventListener('change', function () {
    document.body.classList.toggle('light');
    document.getElementById('Calculator').classList.toggle('light');
    document.getElementById('Display').classList.toggle('light');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.toggle('light');
    });

    const oprButtons = document.querySelectorAll('.Opr');
    oprButtons.forEach(button => {
        button.classList.toggle('light');
    });
});
