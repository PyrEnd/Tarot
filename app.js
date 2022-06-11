const arcanosMayores = ['El Loco', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador', 'El Papa', 'Los Amantes', 'El Carro', 'La Fuerza', 'El Ermitaño', 'Rueda De La Fortuna', 'La Justicia', 'El Colgado', 'La Muerte', 'La Templanza', 'El Diablo', 'La Torre', 'La Estrella', 'La Luna', 'El Sol', 'El Juicio', 'El Mundo'];
const arcanosMenores = ['Diez De Copas', 'As De Copas', 'Dos De Copas', 'Tres De Copas', 'Cuatro De Copas', 'Cinco De Copas', 'Seis De Copas', 'Siete De Copas', 'Ocho De Copas', 'Nueve De Copas', 'Rey De Copas', 'Caballero De Copas', 'Sota De Copas', 'Reina De Copas', 'Diez De Oros', 'As De Oros', 'Dos De Oros', 'Tres De Oros', 'Cuatro De Oros', 'Cinco De Oros', 'Seis De Oros', 'Siete De Oros', 'Ocho De Oros', 'Nueve De Oros', 'Rey De Oros', 'Caballero De Oros', 'Sota De Oros', 'Reina De Oros', 'Diez De Espadas', 'As De Espadas', 'Dos De Espadas', 'Tres De Espadas', 'Cuatro De Espadas', 'Cinco De Espadas', 'Seis De Espadas', 'Siete De Espadas', 'Ocho De Espadas', 'Nueve De Espadas', 'Rey De Espadas', 'Caballero De Espadas', 'Sota De Espadas', 'Reina De Espadas', 'Diez De Bastos', 'As De Bastos', 'Dos De Copas', 'Tres De Copas', 'Cuatro De Bastos', 'Cinco De Bastos', 'Seis De Bastos', 'Siete De Bastos', 'Ocho De Bastos', 'Nueve De Bastos', 'Rey De Bastos', 'Caballero De Bastos', 'Sota De Bastos', 'Reina De Bastos'];
const mazo = [...arcanosMayores, ...arcanosMenores];

var random = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
};

const output = document.getElementById('result');
const btnMayor = document.getElementById('mayor');
const btnMenor = document.getElementById('menor');
const btnAleatorio = document.getElementById('deck');
const carta = document.getElementById('carta-img');

var mostrarMayor = btnMayor.addEventListener("click", function arcanoMayor(){
    const operacion = arcanosMayores[random(0,21)];
    output.textContent = operacion;
    carta.src = `img/${operacion}.jpg`;
});

var mostrarMenor = btnMenor.addEventListener("click", function arcanoMenor(){
    const operacion = arcanosMenores[random(0,55)];
    output.textContent = operacion;
    carta.src = `img/${operacion}.jpg`;
});

var mostrarDeck = btnAleatorio.addEventListener("click", function aleatorio(){
    const operacion = mazo[random(0,77)];
    output.textContent = operacion;
    carta.src = `img/${operacion}.jpg`;
});

//console.log(mazo[random(0,77)]); // Mazo completo.
//console.log(arcanosMayores[random(0,21)]); // Arcanos Mayores.
//console.log(arcanosMenores[random(0,55)]); // Arcanos Menores.
