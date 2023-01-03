// Use const if variable isn't going to change.

const ratings = document.querySelectorAll('.circle');
const btn = document.getElementById('btn');
const evaluation = document.querySelector('.evaluation');
const thankyou = document.querySelector('.thankyou');
const span = document.getElementById('rating');

for (let i = 0; i <ratings.length; i++) {
    ratings[i].addEventListener('click', () =>{
        let rating = ratings[i].innerHTML;

        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected')
                
            
        }

        ratings[i].classList.add('selected');

        btn.addEventListener('click', () => {
            evaluation.style.display ='none';
            thankyou.style.display ='block';
            span.innerHTML =rating;
        })
    })
}