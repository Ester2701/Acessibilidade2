var btns = document.querySelectora11('.lista de artigo-slider-item');

//percorer todos os botoes controladores
btns.foreach(function(btn){
    btn.addEventlistener('click', function()){


        //remover class 'ativo' dos outros botoes
        btns.forEach(function(btnRemoveClass) {
            btnRemoveClass.classList.remove('listaDeArtigo-')
        }
    }
}