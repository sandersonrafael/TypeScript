type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackFn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackFn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMaped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMaped);
