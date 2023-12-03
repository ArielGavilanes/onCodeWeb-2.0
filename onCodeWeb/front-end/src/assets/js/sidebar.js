document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const icon = document.querySelector('.icon');
    const content = document.querySelector('.content');

    icon.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        content.classList.toggle('active-content');
    });
});
