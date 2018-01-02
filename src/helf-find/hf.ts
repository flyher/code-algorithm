export function halfFind(arrays: Array<Number>, point: Number): Number {
  let low = 0;
  let heigh = arrays.length - 1;
  let mid = 0;
  while (low <= heigh) {
    mid = Math.floor((low + heigh) / 2); //向下取整
    let guess = arrays[mid];
    if (guess < point) {
      low = mid + 1;
    } else if (guess > point) {
      heigh = mid - 1;
    } else {
      break;
    }
  }
  return mid;
}
