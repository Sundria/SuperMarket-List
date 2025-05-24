var items = []

document.querySelector('input[type=submit]')
    .addEventListener('click', () => {
        var nome_produto = document.querySelector('input[name=nome_produto]');
        var preco_produto = document.querySelector('input[name=price]');
        items.push({
            nome: nome_produto.value,
            valor: preco_produto.value
        });

        renderizarLista();

        nome_produto.value = "";
        preco_produto.value = "";
});
document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
    items = [];
    renderizarLista();
});
function renderizarLista(){
        let ListaProdutos = document.querySelector('.lista-produtos');
        let soma = 0;
        ListaProdutos.innerHTML = "";
        items.forEach((val, index) => {
            soma += parseFloat(val.valor);

        let itemDiv = document.createElement('div');
        itemDiv.classList.add('lista-produtos-single')

        itemDiv.innerHTML=`
            <h3>${val.nome}</h3>
            <h3 class="price-produto"><span>R$ ${val.valor}</span></h3>
            `;

        itemDiv.addEventListener('contextmenu', (e)=>{
            e.preventDefault();

            const confimacao = confirm(`Deseja remover "${val.nome}" da lista?`);
            if(confimacao){
            items.splice(index, 1); //remove do array
            renderizarLista();   //re-renderiza a lista e total
            }
        });

        ListaProdutos.appendChild(itemDiv)

    });
    document.querySelector('.soma-produto').innerHTML = `R$ ${soma.toFixed(2)}`
}