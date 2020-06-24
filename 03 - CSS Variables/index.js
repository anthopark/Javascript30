const inputs = document.querySelectorAll('.controls input');

function handleEvent() {
    const suffix = this.dataset.sizing || '';
    
    console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix))
}

inputs.forEach(input => { input.addEventListener('change', handleEvent) });
inputs.forEach(input => { input.addEventListener('mousemove', handleEvent) });
