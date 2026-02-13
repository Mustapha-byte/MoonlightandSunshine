document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // when you click inside, the dialogue box disappear
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});