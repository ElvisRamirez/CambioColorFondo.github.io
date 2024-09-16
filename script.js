document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', () => {
        // Cambia el color de fondo a un color aleatorio
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        // Genera un color hexadecimal aleatorio
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
