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
    document.getElementById('basket').style.display='none'
    document.getElementById('closeding1').style.display='flex'
    document.getElementById('closeding').style.display='none'
}

function isV() {
    document.getElementById('basket').style.display='flex'
    document.getElementById('closeding1').style.display='none'
    document.getElementById('closeding').style.display='flex'
}

function isHides() {
    document.getElementById('misid').style.display='none'
    document.getElementById('closeding2').style.display='none'
    document.getElementById('closeding3').style.display='flex'
}

function isVs() {
    document.getElementById('misid').style.display='block'
    document.getElementById('closeding2').style.display='flex'
    document.getElementById('closeding3').style.display='none'
}