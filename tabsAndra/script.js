document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');

    for (let i = 1; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabContents.forEach(content => content.style.display = 'none');
            tabContents[index].style.display = 'block';

            tabs.forEach(tab => tab.classList.remove('focused')); // Elimina la clase 'focused' de todas las pestañas
            tab.classList.add('focused'); // Agrega la clase 'focused' a la pestaña seleccionada
        });

        tab.addEventListener('focus', () => {
            tabs.forEach(tab => tab.classList.remove('focused'));
            tab.classList.add('focused');
        });
    });
});
