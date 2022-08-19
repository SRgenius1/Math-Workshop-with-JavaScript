const btn = document.querySelector('#calcular');
const inptPrice = document.querySelector('#price');
const inptCupon = document.querySelector('#cupon');
const res = document.querySelector('#result');
btn.addEventListener('click', calcularPrecioConDescuento);

const couponObj = {
    'juandc': 30,
    'juanmayor': 40,
};

function calcularPrecioConDescuento () {
    const price = parseInt(inptPrice.value);
    const cupon = inptCupon.value;

    if (!price || !cupon) {
        res.innerHTML = 'CHANCLA! por favor llena el formulario';
        return;
    }

    let discount;

    if (couponObj[cupon]) {
        discount = couponObj[cupon];
    } else {
        res.innerHTML = 'El cupon no es valido';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    res.innerHTML = `El nuevo precio con descuento es $${newPrice}`;
};