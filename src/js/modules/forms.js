import {postData} from '../services/requests';

const forms = () => {

    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]'),
          message = {
              loading: 'Loading...', 
              succes: "Спасибоо! мы с вами свяжемся",
              failor: 'Something went wrong...',
              spinner: 'assets/img/spinner.gif',
              ok: 'assets/img/ok.png',
              fail: 'assets/img/fail.png'
          };

        const path = {
            designer: 'assets/server.php',
            question: 'assets/question.php'
        }

        //checkNumInputs('input[name="user_phone"]');
        // phoneInputs.forEach( item => {
        //     item.addEventListener('input', () => {  
        //         item.value = item.value.replace(/\D/, '');
        //     });
        // });
        
         
 
          const clearInputs = () => {
            input.forEach( item => {
                item.value = '';              
            });
            upload.forEach(item => { 
                item.previousElementSibling.style.display = 'none';
            })
          };

          upload.forEach(item => {
              item.addEventListener('input', () => {
                 // console.log(item.files[0]);
                  let dots;
                  const arr = item.files[0].name.split('.');
                  arr[0].length > 6 ? dots = '...' : dots = '.';
                  const name = arr[0].substring(0, 6) + dots + arr[1];
                  item.previousElementSibling.textContent = 'Файл ' + name + ' загружен';
                  item.previousElementSibling.style.display = 'block';
                  item.parentNode.style.overflow = 'visible';
                })
          })

          

          form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.parentNode.appendChild(statusMessage);

                item.classList.add('animated', 'fadeOutUp');
                setTimeout(()=>{
                    item.style.display = 'none';
                }, 400);

                let statusImg = document.createElement('img');
                //statusImg.classList.add('img-dfd');
                statusImg.setAttribute('src', message.spinner);
                statusImg.classList.add('animated', 'fadeInUp');
                statusMessage.appendChild(statusImg);

                let textMessage = document.createElement('div');
                textMessage.classList.add('text-dfd');
                textMessage.textContent = message.loading;
                statusMessage.appendChild(textMessage);

                const formData = new FormData(item);

                let api;
                item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.designer : api = path.question;

               // console.log(api);

                postData(api, formData)
                .then(res => {
                   // console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.succes;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.failor);
                    textMessage.textContent = message.fail
                } )
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
            });
          });

};

export default forms;