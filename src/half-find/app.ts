// 折半查找有序的数组
import { halfFind } from './hf';
declare let $: any;

let arrays = [
  1,
  2,
  12,
  26,
  29,
  31,
  35,
  46,
  59,
  60,
  72,
  73,
  79,
  81,
  86,
  93,
  95,
  98,
  99
];

$('#hf').text('the index is:' + halfFind(arrays, 73));
