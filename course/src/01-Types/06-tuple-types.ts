// tupla trata-se de um array com tipos específicos

// readonly fará com que seja imutável, não sendo possível alterar valor com métodos como o pop() ou push()
const customerData1: readonly [number, string] = [1, 'Fulano'];
const customerData2: [number, string, string?] = [1, 'Fulano2'];
const customerData3: [number, string, ...string[]] = [1, 'Fulano2', 'ok', 'isso', 'é', 'um array'];

// customerData1[0] = 100; ->
// customerData1[1] = 'Joãozinho'; -> apresentará erro

console.log(customerData1);
console.log(customerData2);
console.log(customerData3);
