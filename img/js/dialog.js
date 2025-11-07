//variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body')
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');


//quando abrir a dialog...
btnAbreDialog.addEventListener('click',function() {
    dialog.classList.add('dialogNewslatter--aberto');
});



