//éléments
let pomme = document.querySelector(".pomme");
let poire = document.querySelector(".poire");
let prune = document.querySelector(".prune");
let pêche = document.querySelector(".pêche");
let panier = document.querySelector("#panier");
let fruits = [pomme, poire, prune, pêche];

//fonctions
function addProduct(product){
    var p = document.createElement('p');
    var btnClose = document.createElement('button');
    p.innerHTML = product.innerHTML;
    btnClose.innerHTML ="×";
    p.appendChild(btnClose);
    panier.appendChild(p);
    btnClose.addEventListener('click', function(){
        p.remove();
    });
}

//événements

fruits.forEach(fruit => 
    fruit.addEventListener('click', function(){
        addProduct(fruit)
    })
);
// for(let i = 0; i < fruits.length; i++){
//     fruits[i].addEventListener('click', function(){
//         addProduct(fruits[i]);
//     });
// }

