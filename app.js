const arcanosMayores = ['El Loco', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador', 'El Papa', 'Los Amantes', 'El Carro', 'La Fuerza', 'El Ermitaño', 'Rueda De La Fortuna', 'La Justicia', 'El Colgado', 'La Muerte', 'La Templanza', 'El Diablo', 'La Torre', 'La Estrella', 'La Luna', 'El Sol', 'El Juicio', 'El Mundo'];
const arcanosMenores = ['Diez De Copas', 'As De Copas', 'Dos De Copas', 'Tres De Copas', 'Cuatro De Copas', 'Cinco De Copas', 'Seis De Copas', 'Siete De Copas', 'Ocho De Copas', 'Nueve De Copas', 'Rey De Copas', 'Caballero De Copas', 'Sota De Copas', 'Reina De Copas', 'Diez De Oros', 'As De Oros', 'Dos De Oros', 'Tres De Oros', 'Cuatro De Oros', 'Cinco De Oros', 'Seis De Oros', 'Siete De Oros', 'Ocho De Oros', 'Nueve De Oros', 'Rey De Oros', 'Caballero De Oros', 'Sota De Oros', 'Reina De Oros', 'Diez De Espadas', 'As De Espadas', 'Dos De Espadas', 'Tres De Espadas', 'Cuatro De Espadas', 'Cinco De Espadas', 'Seis De Espadas', 'Siete De Espadas', 'Ocho De Espadas', 'Nueve De Espadas', 'Rey De Espadas', 'Caballero De Espadas', 'Sota De Espadas', 'Reina De Espadas', 'Diez De Bastos', 'As De Bastos', 'Dos De Copas', 'Tres De Copas', 'Cuatro De Bastos', 'Cinco De Bastos', 'Seis De Bastos', 'Siete De Bastos', 'Ocho De Bastos', 'Nueve De Bastos', 'Rey De Bastos', 'Caballero De Bastos', 'Sota De Bastos', 'Reina De Bastos'];
const mazo = [...arcanosMayores, ...arcanosMenores];

/* const random = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}; */

/* const rotate = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    operacion = Math.floor(Math.random() * (max - min + 1) + min);

    if(operacion === 0){
        carta.style.transform = "rotate(180deg)";
        return true;
    }else{
        carta.style.transform = "";
        return false;
    }
} */

var trackingDeCartas = [];
var trackingConteo = {};

const trackingDisplay=document.getElementById("tracking")
const trackingConteoBox=document.getElementById("conteo_box")

function trackingPushCarta(carta,rotated){
    const referencialName=carta+(rotated?"$$rotated":"");

    //agrego la carta a la lista
    trackingDeCartas.push(referencialName);

    //agrego la carta al objeto de conteo
    if(trackingConteo[referencialName]) trackingConteo[referencialName]++;
    else trackingConteo[referencialName]=1;
    

    //esto hacia que iterase toda la lista para mapearla cada vez que haces click
    /* trackingDisplay.innerHTML = trackingDeCartas.map((cartaName)=>{
        return `<div class="carta" style="--cartaimgurl:url('img/${cartaName}.jpg')"></div>`;
    }).join("<br>"); */

    //aqui nomas agrego mas texto al texto que ya tiene
    trackingDisplay.innerHTML += `<div class="carta" style="--cartaimgurl:url('img/${carta}.jpg'); --rotated:${rotated?1:0};">
        <b>#${trackingDeCartas.length}</b>
    </div>`;

    //mapeo el objeto de conteo y genero un objeto nuevo con los datos
    trackingConteoBox.innerHTML = Object.entries(trackingConteo).map(([cartaMap, cantidad])=>{

        const cardName=cartaMap.split("$$")[0];
        const rotatedMap=cartaMap.split("$$")[1]==="rotated";

        return `<div class="carta" style="--cartaimgurl:url('img/${cardName}.jpg'); --rotated:${rotatedMap?1:0};">
            <b>${cantidad}</b>
        </div>`;
    }).join("");
}

const output = document.getElementById('result');
const btnMayor = document.getElementById('mayor');
const btnMenor = document.getElementById('menor');
const btnAleatorio = document.getElementById('deck');
const carta = document.getElementById('carta-img');

function setCartaFrom(mazoAUsar){

    //seleccionando carta random
    //recuerda que cartaIndex nunca llegara a valer mazo.length (un index invalido) por que Math.random() nunca retornara 1
    const cartaIndex = Math.floor(Math.random() * mazoAUsar.length); 
    const cartaNombre = mazoAUsar[cartaIndex];

    //juzgando si estara rotada
    const rotated=Math.random()>0.5;
    carta.style.transform = rotated?"rotate(180deg)":"rotate(0deg)";

    trackingPushCarta(cartaNombre,rotated);
    
    output.textContent = cartaNombre;
    carta.src = `img/${cartaNombre}.jpg`;
}

btnMayor.addEventListener("click", ()=>setCartaFrom(arcanosMayores));

btnMenor.addEventListener("click", ()=>setCartaFrom(arcanosMenores));

btnAleatorio.addEventListener("click",()=>setCartaFrom(mazo));

//console.log(mazo[random(0,77)]); // Mazo completo.
//console.log(arcanosMayores[random(0,21)]); // Arcanos Mayores.
//console.log(arcanosMenores[random(0,55)]); // Arcanos Menores.

// Añadida la función de obtener carta invertida o normal en cada lanzamiento de forma completamente aleatoria.