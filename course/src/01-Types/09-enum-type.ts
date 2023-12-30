// começa com letra maiúscula

// enum numérico
enum Colors {
  RED,
  BLUE,
  YELLOW,
}

console.log(Colors);

console.log(Colors.RED);
console.log(Colors[0]);

enum Colors2 {
  RED = 10,
  BLUE = 100,
  YELLOW = 200,
}

console.log(Colors2.RED);
console.log(Colors2[0], Colors2[10]);
