///Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

function evenOrOdd(){
    let num = parseInt(document.getElementById("userNum").value);
    if (num % 2 == 0){
        document.getElementById("evenOdd").innerHTML = num; 
    } else {
        document.getElementById("evenOdd").innerHTML = num + 1;
    }
}


//Generatore di “nomi cognomi” casuali del grande gatsby:
//Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

nameDb = ['Luca' , 'Rocco' , 'Francesco' , 'Andrea' , 'Francesca', 'Maria', 'Paola', 'Ruggera', 'Penelope', 'Aniello', 'Corrado', 'Sonia', 'Emma', 'Samantha'];

lastNameDb = ['Di Marco', 'Russo ', 'Barbieri ', 'Cattaneo ', 'Ricci ', 'Piras ', 'Esposito ', 'Lombardi ', 'Hofer ', 'Zanella ', 'Blanc ', 'Venditti', 'Proietti', 'De Angelis'];

function nameSurname(){

    for (i = 0; i < 10; i++){
        let randomName = (nameDb[Math.floor(Math.random() * nameDb.length)] + ' ' + lastNameDb[Math.floor(Math.random() * lastNameDb.length)]);
        document.getElementById("nameSurnameGenerator").innerHTML += `<li>${randomName}</li>`;
    }
}


//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

intNums = [];
sumIntNums = 0;

function oddIndex(){
    for (i=0; i<5; i++){
        let nums = parseInt(prompt('choose a number'));
        intNums.push(nums);
    }
    console.log(intNums);
    
    for(var i = 1; i < intNums.length; i += 2) {
        sumIntNums += intNums[i];
    }
    document.getElementById("numSumsOdd").innerHTML = sumIntNums;
}


//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

array1 = [1, 2, 3, 4, 5, 6];
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
document.getElementById("arr1Before").innerHTML = array1.length;
document.getElementById("arr2Before").innerHTML = array2.length;

function evenArrays(){
    if (array1.length < array2.length){
        for (i=array1.length; i<array2.length; i++){
        array1.push(Math.floor(Math.random() * 9));
        } 
    } else {
        for (i=array2.length; i<array1.length; i++){
            array2.push(Math.floor(Math.random() * 9));
        } 
    }



    document.getElementById("magic").innerHTML = '*magic happens*';
    
    document.getElementById("arr1After").innerHTML = array1.length;
    document.getElementById("arr2After").innerHTML = array2.length;
}





