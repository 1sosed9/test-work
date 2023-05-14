// Форма (добавляем класс при активной форме) 
(function () {
    const form = document.querySelector('.form');
    const input = document.querySelector('.form__input');

    input.addEventListener('focus', function () {
        form.classList.add('form--active');
    });

    input.addEventListener('blur', function () {
        form.classList.remove('form--active');
    })
}());


// Установка ширины колонок в таблице 
(function () {
    // Находим все grid контейнеры 
    const row = document.querySelectorAll('.costumers__table-row');

    // Создаем переменную куда будем сохранять значения для установки ширины колонок
    let gridTemplateColumnsValues = '';

    // Получаем колличество колонок в сетке
    const gridColumnsLength = document.querySelectorAll('.costumers__table-head > :nth-child(1) > *').length;

    // Проходимся по каждой колонке
    for (let i = 1; i <= gridColumnsLength; i++) {

        // Получаем все элементы в текущей колонке
        let columnItems = document.querySelectorAll(`.costumers__table-row > :nth-child(${i})`);

        // Находим самый широкий элемент каждой колонки
        let maxWidth = 0;
        columnItems.forEach(item => {
            const width = item.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width + 1;
            }
        });

        // Добавляем значения к переменной
        gridTemplateColumnsValues += maxWidth + "px" + " ";
    }

    // Устанавливаем ширину каждой колонки
    row.forEach(item => {
        item.style.gridTemplateColumns = `${gridTemplateColumnsValues}`;
    });
}());

// Устанавливаем одинаковую высоту aside и main 
(function () {
    const main = document.querySelector('#main');
    const aside = document.querySelector('#aside');
    main.style.height = `${aside.offsetHeight}px`;

}());


// Бергер клик 
(function () {
    const burgerItem = document.querySelector(".burger");
    const close = document.querySelector(".close"); 
    const menu = document.querySelector(".aside");
    burgerItem.addEventListener('click', () => {
        menu.classList.add('aside_active');
    }); 
    close.addEventListener('click', () => {
        menu.classList.remove('aside_active');
    })
    
}());










