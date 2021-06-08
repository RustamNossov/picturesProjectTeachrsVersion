const checkTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    console.log('sdfsdfsdfsdf');
    textInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
}

export default checkTextInputs;