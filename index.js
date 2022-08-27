//éléments
let pomme = document.querySelector(".pomme");
let poire = document.querySelector(".poire");
let prune = document.querySelector(".prune");
let pêche = document.querySelector(".pêche");
let panier = document.querySelector("#panier");
let fruits = [pomme, poire, prune, pêche];

//fonctions
function addProduct(product){
    let li = document.createElement('li');
        panier.appendChild(li);
        li.innerHTML = product.innerHTML;
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
