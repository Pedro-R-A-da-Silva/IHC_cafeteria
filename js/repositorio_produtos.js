const itens = [

  {
    "imagem":"https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "nome":"torrado",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/photo-1582392188203-bbc6afc7e79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    "nome":"graos",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/flagged/photo-1552938218-ac9ec40c702a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    "nome":"Café",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://image.freepik.com/psd-gratuitas/saco-de-papel-com-simulacao-de-cafe_23-2148884495.jpg",
    "nome":"copo/bag",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/photo-1600431562968-ef337c8733ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    "nome":"Biscoito",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLuPZ5_86jVVR6hknfOFd5MTBM4GGG2scviKyT2ng6IPClQMy58AmsuTqktQR92XWjDk&usqp=CAU",
    "nome":"copos",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
];


for (let item of itens) {

  const view = `<div class="col card mx-1 py-1">
                  <img src="${item.imagem}" class="card-img-top" alt="...">

                  <div class="card-body">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">${item.preparo}</p>
                    <a href="#" class="btn bg-secondary">Comprar</a>
                  </div>
                </div>`;

  //let itensCardapio = document.querySelector('.itens-cardapio');
  let itensCardapio = document.getElementById("itens-cardapio");
  itensCardapio.insertAdjacentHTML('beforeend', view);
}