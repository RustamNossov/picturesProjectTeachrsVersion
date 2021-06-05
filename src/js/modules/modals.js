const modals = () => {
    let btnPressed = false;
    function binModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
       const trigger = document.querySelectorAll(triggerSelector),
             modal = document.querySelector(modalSelector),
             close = document.querySelector(closeSelector),
             windows = document.querySelectorAll('[data-modal]');
       
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                    btnPressed = true;

                    if (destroy) {
                        item.remove();
                    }

                    windows.forEach(item => {
                        item.style.display = 'none';
                        item.classList.add('animated', 'fadeIn');
                    });

                    modal.style.display = 'block';
                    document.body.style.owerflow = 'hodden';
                }
            });
        });

        close.addEventListener('click', ()=> {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            document.body.style.owerflow = '';

        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                document.body.style.owerflow = 'hodden';

            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout( function() {
            let display;
            document.querySelectorAll('[data-modal]').forEach( item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            })

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.owerflow = 'hodden';
            }
        }, time);
    }

    function openByScroll(selector) {
        window.addEventListener( 'scroll', () => {
        let scrolHeight = Math.max(document.documentElement.scrollHeight, 
                            document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrolHeight) ) {
                document.querySelector(selector).click();
            }
        })
    }
    
    binModal('.button-design', '.popup-design', '.popup-design .popup-close');
    binModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    binModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 60000);
};



export default modals;