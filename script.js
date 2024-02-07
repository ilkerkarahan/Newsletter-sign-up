const submitBtn = document.getElementById('submitBtn')

const emailValid = document.querySelector('input')
const invalidText = document.querySelector('.invalidText')

const mainContent = document.getElementById('mainContent')
const coteninerSuccess = document.getElementById('coteninerSuccess')

const sentEmail = document.querySelector('.sentEmail')

submitBtn.addEventListener('click', () => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(emailValid.value)) {

        setTimeout(() => {
            mainContent.style.display = 'none'
            coteninerSuccess.style.display = 'block'
        }, 500);

        emailValid.classList.remove('invalid')
        invalidText.style.display = 'none'

        sentEmail.innerHTML = emailValid.value

    } else {
        emailValid.classList.add('invalid')
        invalidText.style.display = 'block'
    }


})

