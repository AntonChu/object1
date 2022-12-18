export default function objectSort(obj, arr) {
  const resultArr = [];
  const objClone = { ...obj };
  arr.forEach((item) => {
    const el = { key: item, value: objClone[item] };
    resultArr.push(el);
    delete objClone[item];
  });
  const intermediateArr = Object.keys(objClone).sort();
  intermediateArr.forEach((item) => {
    const el = { key: item, value: objClone[item] };
    resultArr.push(el);
  });
  return resultArr;
}
