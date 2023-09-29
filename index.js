// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(){
    return cats.push("Ralph");
}

function destructivelyPrependCat(){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(){
    let copyOfCats;
    return copyOfCats = [...cats,"Broom"];
}

function prependCat(){
    let copyOfCats1;
    return copyOfCats1 = ["Arnold",...cats];
}

function removeLastCat(){
    let copyOfCats2;
    return copyOfCats2 = cats.slice(0,cats.length-1);
}

function removeFirstCat(){
    let copyOfCats3;
    return copyOfCats3 = cats.slice(1)
}