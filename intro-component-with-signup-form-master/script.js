const form = document.querySelector('form')
const input = document.querySelectorAll('input');
const span = document.querySelectorAll('span');
const email = document.getElementById('Email');
const icon = document.querySelectorAll('i')
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) => {
    input.forEach( ( input, i ) => {
        if (input.value === '') {
            input.parentNode.classList.add('input-error');
            input.parentNode.classList.remove('normal');
            span[i].classList.remove('error');
            icon[i].classList.remove('error')
            e.preventDefault();
        } else {
            input.parentNode.classList.remove('input-error');
            input.parentNode.classList.add('normal');
            span[i].classList.add('error');
            icon[i].classList.add('error');
        }
    })

    if (email.value.match(pattern)) {
        email.parentNode.classList.remove('input-error');
        email.parentNode.classList.add('normal');
        span[2].classList.add('error');
        icon[2].classList.add('error');
    } else {
        email.parentNode.classList.add('input-error');
        email.parentNode.classList.remove('normal');
        span[2].classList.remove('error');
        icon[2].classList.remove('error');
        e.preventDefault();
    }
})
