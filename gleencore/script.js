document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('navlist');

    menuIcon.addEventListener('click', function () {
        if (navList.style.display === 'flex' || navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
        }
    });
});