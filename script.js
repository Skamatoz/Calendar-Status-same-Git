const calendar = document.getElementById('calendar');

// Генерация календаря на год
function generateCalendar() {
    for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
            const cell = document.createElement('div');
            cell.setAttribute('data-date', `${month}-${day}`);
            calendar.appendChild(cell);
        }
    }
}

// Обновление цвета ячейки в зависимости от уровня активности
function updateCellColor(date, level) {
    const cell = document.querySelector(`[data-date='${date}']`);
    if (cell) {
        switch (level) {
            case '1':
                cell.style.backgroundColor = '#88cd9c'; // Light green
                break;
            case '2':
                cell.style.backgroundColor = '#7bc96f'; // Medium green
                break;
            case '3':
                cell.style.backgroundColor = '#239a3b'; // Dark green
                break;
        }
    }
}

// Добавление обработчика для кнопки отправки
document.getElementById('submitBtn').addEventListener('click', () => {
    const dateInput = document.getElementById('dateInput').value;
    const activityLevel = document.getElementById('activityLevel').value;

    if (dateInput) {
        const [year, month, day] = dateInput.split('-');
        const formattedDate = `${parseInt(month)}-${parseInt(day)}`;
        updateCellColor(formattedDate, activityLevel);
    }
});

// Инициализация календаря
generateCalendar();
