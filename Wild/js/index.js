const counters  = document.querySelectorAll('[data-counter]');

if(counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;
            
            if (target.closest('.counter__button')){
                let value = parseInt(target.closest('.counter').querySelector('input').value);
                
                if (target.classList.contains('counter__button_plus')) {
                    value++;
                } else {
                    --value;
                }
                
                if(value <= 0) {
                    value = 0;
                }
                
                target.closest('.counter').querySelector('input').value = value;
            }
        })
    })
}

function isHide() {
  (document.getElementById('basket').style.display='none')
}

function isHides() {
  (document.getElementById('misid').style.display='none')
}