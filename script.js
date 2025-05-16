const monedaE1_one = document.getElementById("moneda_uno");
const monedaE1_two = document.getElementById("moneda_dos");
const cantidadE1_one = document.getElementById("cantidad_uno");
const cantidadE1_two = document.getElementById("cantidad_dos");
const cambioE1 = document.getElementById("cambio");
const tazaE1 = document.getElementById("taza");

function calculate() {
  const moneda_one = monedaE1_one.value;
  const moneda_two = monedaE1_two.value;

fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
.then(res => res.json() )
.then(data => {
    const taza = data.rates[moneda_two];

    cambioE1.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

    cantidadE1_two.value = (cantidadE1_one.value * taza).toFixed(2);

});

}

monedaE1_one.addEventListener("change", calculate);
cantidadE1_one.addEventListener("input", calculate);
monedaE1_two.addEventListener("change", calculate);
cantidadE1_two.addEventListener("input", calculate);

taza.addEventListener('click', () =>{
const temp = monedaE1_one.value;
monedaE1_one.value = monedaE1_two.value;
monedaE1_two.value = temp;
calculate();
});

calculate();
