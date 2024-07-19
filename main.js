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


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const slider = document.querySelector('.slider');
    const Opr = document.querySelectorAll('button.Opr');
    const Display = document.getElementById('Display');
    const Calculator = document.getElementById('Calculator');
    const Button = document.querySelectorAll('.button');

    // Initial state
    let currentStep = 0;

    themeToggle.addEventListener('click', () => {
        // Update the step
        currentStep = (currentStep + 1) % 3;

        // Remove previous step classes
        slider.classList.remove('step-0', 'step-1', 'step-2');
        Opr.forEach((button) => button.classList.remove('step-0', 'step-1', 'step-2'));
        Display.classList.remove('step-0', 'step-1', 'step-2');
        Calculator.classList.remove('step-0', 'step-1', 'step-2');
        document.body.classList.remove('step-0', 'step-1', 'step-2');
        Button.forEach((button) => button.classList.remove('step-0', 'step-1', 'step-2'));

        // Add the new step class
        slider.classList.add(`step-${currentStep}`);
        Opr.forEach((button) => button.classList.add(`step-${currentStep}`));
        Display.classList.add(`step-${currentStep}`);
        Calculator.classList.add(`step-${currentStep}`);
        document.body.classList.add(`step-${currentStep}`);
        Button.forEach((button) => button.classList.add(`step-${currentStep}`));
    });
});
