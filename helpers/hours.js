const hours = [];

for (let hora = 10; hora <= 22; hora++) {
    for (let minuto = 0; minuto < 60; minuto += 30) {
        const horaFormateada = hora < 10 ? `0${hora}` : hora;
        const minutoFormateado = minuto < 10 ? `0${minuto}` : minuto;
        const segundoFormateado = "00"; // Establecemos los segundos en 00

        hours.push(`${horaFormateada}:${minutoFormateado}:${segundoFormateado}`);
    }
}

module.exports = hours
