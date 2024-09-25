$(document).ready(function(){
    console.log(document.querySelector('header button'));
    console.log($('#botao-cancelar'));
    /****************************************************
     * document.querySelector('header button').addEventListener('click', function(){})
     *
     * Para realizar um addEventListener com jQuery 
     * pode ser usado as siguientes funciones
     * $(“#nome_completo”).change(function() {}); 
     * .keyup 
     * .click // para a tagbutton 
     * .submit// para a tagform 
     * .focus 
     * .blur 
     * .mouseover 
     * .mouseout
    ****************************************************/
    $('header button').click(function(){
        $('form').slideDown();
    })
    /*************************************
     * Efeitos de jQuery
     * Vale ressaltar que todas as funções vistas aceitam, como parâmetro, 
     * uma duração em milissegundos para executar o efeito.
     * 
     * $(“seletor”).fadeIn( )
     * .fadeOut( )
     * .slideUp( )
     * .slideDown( )
     * .slideToggle( )
     * .show( )
     * .hide( )
     * .toggle( )
     ***********************************/
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    

    /*************************************************
     * outra forma de realizar um addEventListener
     * com jQuery
     *************************************************/
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagen-nova').val();
        console.log(`imagem: ${enderecoNovaImagem}`);
        const novoItem = $('<li style="display:none;"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-images-link">
                <a href="${enderecoNovaImagem}" title="Ver imagen em tamanho real" target="_blank">
                    Ver imagen em tamanho real
                </a>
            </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $(`#endereco-imagen-nova`).val('');
    })
})

/**************************************
 * Podemos obter o valor de qualquer atributo e configurá-lo 
 * através da função: 
 *
 * $(“seletor”).attr(“atributo”, “valor”) 
 * $(“input”).attr(“value”, “novo valor”)
 * 
 * Podemos adicionar um elemento ao final de um container 
 * através da função append e appendTo: 
 * 
 * $(“ul”).append(“<li>Novo item</li>”) 
 * $(“<li>Novo item</li>”).appendTo(“.minha-lista”)
 */