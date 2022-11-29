// Primera pre-entrega para el curso de JavaScript
// 

const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt('Bienvenido a Carniceria JS! Que corte desea llevar? tapa de asado - vacio o matambre?');
        cantidad = parseInt(prompt('Cuantos Kilos va a llevar?'));
        let cantidadValidada = validarCantidad(cantidad);

        switch (producto){
            case 'tapa de asado':
                precio = 2200;
                break;
            case 'vacio':
                precio = 2500;
                break;
            case 'matambre':
                precio = 2000;
                break;
            default:
                alert('Seleccione un corte disponible');
                precio = 0;
                cantidadValidada = 0;        
        }

        totalCompra += precio * cantidadValidada
        seguirComprando = confirm('Queres sumar otro corte?');
    
    } while (seguirComprando);

    const totalMasDescuento = aplicarDescuento(totalCompra);

};

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0){
        if (cantidad <= 0){
            alert('Debe ingresar una cantidad valida')
        } else{
            alert('Debe agregar un numero mayor a cero.')
        }
        cantidad = parseInt(prompt('Cuantos kilos quiere llevar?'));
    }
    return cantidad;
};

const aplicarDescuento = (totalCompra) => {
    let totalMasDescuento = 0;

    if (totalCompra >= 4000){
        totalMasDescuento = totalCompra * 0.85;
        alert('El total con descuento es $'+totalMasDescuento);
        return totalMasDescuento;
        
    } else{
        alert('El total de tu compra es $'+totalCompra);
        return totalCompra;
        
    }
    
};


comprarProductos();
alert('Gracias por su compra!');