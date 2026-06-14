document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.gender .el');
    const saved = localStorage.getItem('genderSelected');

    if (saved) {
        els.forEach((el) => {
            if (el.dataset.value === saved) {
                el.classList.add('selected');
            }
        });
    }

    els.forEach((el) => {
        el.addEventListener('click', function (event) {
            event.preventDefault();
            els.forEach((item) => item.classList.remove('selected'));
            el.classList.add('selected');
            if (el.dataset.value) {
                localStorage.setItem('genderSelected', el.dataset.value);
            }
        });
    });
});
