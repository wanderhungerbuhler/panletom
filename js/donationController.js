class donationController {
    constructor() {
        this.btn = document.querySelector('#btn-doacao');
        this.init();
    }

    init() {
        this.btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Em construção...');
        });
    }
}