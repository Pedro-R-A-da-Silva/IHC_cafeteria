const itens = [

    {
      "imagem":"https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "nome":"torrado",
      "valor":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
  ];
  
  
  for (let item of itens) {
  
    const view = `<div class="col card mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.valor}</p>
                      <a href="#" class="btn bg-secondary">finalizar Compra</a>
                    </div>
                  </div>`;
  
    //let itensCardapio = document.querySelector('.itens-cardapio');
    let itensCarrinho = document.getElementById("itens-carrinho");
    itensCarrinho.insertAdjacentHTML('beforeend', view);
  }