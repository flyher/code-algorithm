export function quickSort(array: Array<Number>, point: Number): Array<Number> {
  // 取点
  point = point === null ? array[0] : point;
  let tmp_array: Array<Number> = [];
  tmp_array.push(point);
  array.forEach(item => {
    if (item < point) {
      tmp_array.unshift(item);
    } else if (item > point) {
      tmp_array.push(item);
    }
  });
  // // 检测第一数值是否是最小值
  // if (tmp_array[0] === point) {
  //   quickSort(tmp_array, tmp_array[1]);
  // }
  return tmp_array;
}
