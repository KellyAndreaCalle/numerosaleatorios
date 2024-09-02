function GNumAl(cantidad = 9) {
    let NumAl = [];

    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * 100); 
        NumAl.push(numero);
    }

 
    let NumU = EDupli(NumAl);

    console.log("Array original:", NumAl);
    console.log("Array sin duplicados:", NumU);
}

function EDupli(array) {
    let arraySD = [];

    for (let i = 0; i < array.length; i++) {
        if (!arraySD.includes(array[i])) {
            arraySD.push(array[i]);
        }
    }

    return arraySD;
}

GNumAl();
