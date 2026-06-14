document.addEventListener('DOMContentLoaded', function () {
    // Find the label that contains the custom input
    const customInputs = document.querySelectorAll('.learning__checkbox .custom-input');
    customInputs.forEach(function (input) {
        const label = input.closest('.learning__checkbox');
        if (!label) return;
        const checkbox = label.querySelector('input[type="checkbox"]');

        // initialise state on load
        const updateState = function () {
            const hasValue = input.value.trim() !== '';
            if (hasValue) {
                label.classList.add('has-value');
                if (checkbox) checkbox.checked = true;
            } else {
                label.classList.remove('has-value');
            }
        };

        // show/hide based on typing
        input.addEventListener('input', updateState);

        // when checkbox changes: if checked -> focus input; if unchecked -> clear
        if (checkbox) {
            checkbox.addEventListener('change', function () {
                if (!checkbox.checked) {
                    input.value = '';
                    label.classList.remove('has-value');
                } else {
                    // focus the input so it replaces the label text immediately
                    setTimeout(function () {
                        try {
                            input.focus();
                        } catch (e) {}
                    }, 0);
                    updateState();
                }
            });
        }

        // on blur: if empty -> revert (uncheck and show text)
        input.addEventListener('blur', function () {
            if (input.value.trim() === '') {
                input.value = '';
                if (checkbox) checkbox.checked = false;
                label.classList.remove('has-value');
            } else {
                label.classList.add('has-value');
                if (checkbox) checkbox.checked = true;
            }
        });

        // run initial check
        updateState();
    });
});
