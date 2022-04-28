const personPhotoEl = document.querySelector('.person-photo img');
const personNameEl = document.querySelector('.person-name .name');
const employeeEls = document.querySelectorAll('.employee');
employeeEls.forEach(employeeEl => {
    employeeEl.addEventListener('click', () => {
        employeeEls.forEach(employeeEl => {
            employeeEl.classList.remove('active');
        });
        employeeEl.classList.add('active');
        const employeePhotoEl = employeeEl.querySelector('.picture img');
        const employeeNameEl = employeeEl.querySelector('.name');
        personPhotoEl.src = employeePhotoEl.src;
        personNameEl.innerText = employeeNameEl.innerText;
    });
});
