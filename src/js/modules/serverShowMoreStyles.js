import {getResource} from '../services/requests';

const serverShowMoreStyles = (trigger, wrapper) => {
    const //cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    console.log('sdfds111');
    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });
   

    // btn.addEventListener( 'click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });

    //     btn.style.display = 'none';
    //     btn.remove();
    // })

    btn.addEventListener( 'click', function() {
        getResource('http://localhost:3000/styles')
        .then(res => {
            const picturesObj = JSON.parse(res);

            createCards(picturesObj);
            
            setInterval(()=>{
                //btn.style.display = 'none';
            this.remove();
            },500);
            
        })
        .catch(error => console.log(error));

    function createCards(response) {

        response.forEach(({src, title, link}) => {
            const block = document.createElement('div');
            block.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
            
            block.innerHTML = `
                     <div class=styles-block>
	 					<img src=${src} alt="style">
	 					<h4>${title}</h4>
                        <a href="${link}">Подробнее</a>
	 				</div>
            `;
            document.querySelector(wrapper).appendChild(block);
        })

    };

    });


    // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
	// 				<div class=styles-block>
	// 					<img src=assets/img/styles-7.png alt>
	// 					<h4>Фотомозаика</h4>
	// 					<a href="#">Подробнее</a>
	// 				</div>
	// 			</div>
}

export default serverShowMoreStyles;