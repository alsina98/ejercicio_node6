// EX1
const lista_compra = ['Aceite', 'Harina', 'Atun', 'Tomates', 'Col', 'Macarrones'];
console.log(lista_compra);

// EX2
lista_compra.push("Aceite de Girasol");
console.log(lista_compra);

// EX3
lista_compra.pop("Aceite de Girasol");
console.log(lista_compra);

// EX4
const lista_favoritos_pelis = [
    {titulo: 'One Small Hitch', director: 'John Burgess', fecha: new Date("2014", "9", "10")},
    {titulo: 'Red Notice', director: 'Rawson Marshall Thurber', fecha: new Date("2021","10","5")},
    {titulo: 'Zombieland', director: 'Ruben Fleischer', fecha: new Date("2009", "10", "27")},
    {titulo: 'The Proposal', director: 'Anne Fletcher', fecha: new Date("2009", "6", "10")},
];
console.log(lista_favoritos_pelis);

// EX5
const pelis_posteriors_2010 = lista_favoritos_pelis.filter(val => val.fecha <= new Date("2010","0","1"));
console.log(pelis_posteriors_2010);

// EX6 
const pelis_directores = lista_favoritos_pelis.map((valor, indice) => `${indice + 1} - ${valor.director}`)
console.log(pelis_directores);

// EX7
const pelis_titulos = lista_favoritos_pelis.map((valor, indice) => `${indice + 5} - ${valor.titulo}`);
console.log(pelis_titulos);

// EX8
const pelis_directores_titulo = pelis_directores.concat(pelis_titulos);
console.log(pelis_directores_titulo);

// EX9 - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const peliculas = [...pelis_directores, ...pelis_titulos];
console.log(peliculas);
