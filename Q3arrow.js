tempf = () => parseFloat(window.prompt("Insira a temperatura em F: "));

conversao = (tempf) => window.alert(`${tempf}F -> ${(tempf-32)*(5/9)}°C`);