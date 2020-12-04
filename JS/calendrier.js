var box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

var i = box.length

while (i != 1) {
i--;
let randomNumber = Math.floor(Math.random() * i);
var circle = document.createElement('div');
circle.id = 'circle'+box[randomNumber];
day= box[randomNumber];
box.splice(randomNumber, 1);
circle.className = "circle";
circle.innerHTML='<a href="#"  onclick="myFunction() ">'+day+'</a>';
document.getElementById("calendrier").appendChild(circle);
console.log( circle.id)

myFonction(day)
}
 function myFonction(i){
    
circle.onclick = function (){   

    confirm(gift[i]);
}
}
var gift=[
    ['Last Christmas'],
    ['Joyeux Bordel !'],
    ['The Lodge'],
    ["L'Alchimie de Noël"],
    ["A Christmas Prince"],
    ["Le Grinch"],
    ["Un Noël à croquer"],
    ["A Christmas Prince: The Royal Wedding"],
    ["Les Chroniques de Noël"],
    ["Les Cinq Légendes"],
    ["Anna et l'Apocalypse"],
    ["Un Noël tous ensemble"],
    ["Get Santa"],
    ["Le Pôle express"],
    ["Les Douze Noël de Kate"],
    ["La Reine des neiges : Joyeuses fêtes avec Olaf"],
    ["Mission: Noël - Les Aventures de la famille Noël"],
    ["Untitled Christmas Eve Project"],
    ["Bad Moms 2"],
    ["Black Christmas"],
    ["Pottersville"],
    ["La Princesse de Chicago"],
    ["Le Noël d'Angela"],
    ["Casse-Noisette et les Quatre Royaumes"],

];


// let date = new Date();
// let now = date.getDate()+'/'+date.getMonth();
// let circles = document.getElementsByClassName('circle');



// for(let i = 0; i <= 24; i++){
// circles[i].innerHTML = "<a href='#'>"+[i+1]+"</a><p class='gift' id='"+[i]+"'>"+gift[i]+"</p>";

// if(circle.name == now){
// circle.id.addEventListener('click', function (){
// document.getElementById([i]).classList.add('show');
// })
// }




// }








