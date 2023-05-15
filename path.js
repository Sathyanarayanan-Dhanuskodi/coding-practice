// const pathCost = {
//   AB: 2,
//   BB: 1,
//   BE: 4,
//   EE: 5,
//   AC: 1,
//   CE: 7,
//   CD: 6,
//   DC: 3,
// };

// function findCost(path) {
//   let totalCost = 0;
//   for (let i = 0; i < path.length - 1; i++) {
//     const pathNeeded = path[i] + path[i + 1];

//     if (pathCost[pathNeeded]) {
//       totalCost += pathCost[pathNeeded];
//     } else {
//       return -1;
//     }
//   }

//   return totalCost;
// }

// console.log('TOTAL COST', findCost('ABCD'));

const data = ['TREAT', 'TREAD', 'BREAD', 'BROOD', 'BROOM'];

function getBreadCrumbs(arr) {
  //O(n^3)
  for (let i = 0; i < arr.length - 1; i++) {
    //O(n)
    const pathNeeded = data[i + 1];

    let extraChar = '';

    const map = new Map(
      data[i].split('').map((e, index) => {
        return [e, index];
      })
    ); //O(n)

    for (const element of pathNeeded) {
      //O(n)
      if (map.has(element)) {
        map.delete(element);
      } else {
        extraChar += element;
      }
    }

    if (extraChar.length > 1) {
      return data[i];
    }
  }

  return data[data.length - 1];
}

console.log('LAST WORD', getBreadCrumbs(data));
