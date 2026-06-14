document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.age .age__link');
    const nextBtn = document.querySelector('.age .age__button.next');
    const prevBtn = document.querySelector('.age .age__button.prev');

    options.forEach((opt) => {
        opt.addEventListener('click', function (e) {
            e.preventDefault();
            // toggle selection
            options.forEach((o) => o.classList.remove('selected'));
            this.classList.add('selected');
            const input = this.querySelector('.age__input');
            if (input) input.checked = true;
        });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', function (e) {
            // allow navigation only if an option is selected
            const selected = document.querySelector('.age .age__link.selected');
            if (!selected) {
                e.preventDefault();
                // simple feedback
                selectedFlash();
            }
        });
    }

    function selectedFlash() {
        // flash first option border to indicate required selection
        const first = document.querySelector('.age .age__link');
        if (!first) return;
        first.style.boxShadow = '0 0 0 4px rgba(151,18,18,0.08)';
        setTimeout(() => (first.style.boxShadow = ''), 400);
    }
});
