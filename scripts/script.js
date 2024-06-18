let gallery1 = document.querySelector('.mobile-banking-gallery1');

gallery1.addEventListener('click', (e) => {
    if(e.target.tagName == 'IMG') {
        for(let i=0; i < gallery1.children.length; i++) {
            if(gallery1.children[i].classList.contains('active')) {
                gallery1.children[i].classList.remove('active');
            }
        }
        e.target.closest('.gallery-item').classList.add('active');
    }
});