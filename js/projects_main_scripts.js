
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-menu button');
    const projectItems = document.querySelectorAll('.project-item');
    const mainProjects = document.querySelector('.main-projects');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем .active со всех кнопок, ставим только на текущую
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Определяем категорию
            const category = btn.getAttribute('data-cat');
            
            // Фильтрация элементов
            const filteredItems = Array.from(projectItems).filter(item => {
                const itemCat = item.getAttribute('data-cat');
                return category === 'all' || itemCat === category;
            });

            // Очистка основной секции проектов
            mainProjects.innerHTML = '';

            // Сборка строк с чередованием wide и square
            filteredItems.forEach((item, index) => {
                let row;

                // Создаем новую строку для каждой второй пары
                if (index % 2 === 0) {
                    row = document.createElement('div');
                    row.classList.add('projects-row');
                    mainProjects.appendChild(row);
                } else {
                    row = mainProjects.lastChild;
                }

                // Чередование по строкам
                if (Math.floor(index / 2) % 2 === 0) {
                    // Четная строка: первый - wide, второй - square
                    item.classList.remove('wide', 'square');
                    item.classList.add(index % 2 === 0 ? 'wide' : 'square');
                } else {
                    // Нечетная строка: первый - square, второй - wide
                    item.classList.remove('wide', 'square');
                    item.classList.add(index % 2 === 0 ? 'square' : 'wide');
                }

                row.appendChild(item);
            });
        });
    });
});

// Burger Menu
const navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-100%";
}

