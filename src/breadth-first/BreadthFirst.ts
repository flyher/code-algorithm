declare let $: any;
export function BreadthFirst(data: any): any {
  let goal = '3-2-1';
  let data2;
  // $.extend(true, data, data2);
  // 广度遍历
  let stack: Array<any> = [];
  let result: Array<any> = [];
  let selected: Array<any> = [];
  find(data, goal, stack, result, selected);
  console.log(result);
}

function find(
  data: any,
  goal: any,
  stack: Array<any>,
  result: Array<any>,
  selected: Array<any>
): any {
  // console.log(data);
  //循环栈[第一级]
  while (data.length > 0) {
    data.forEach((item: any) => {
      console.log(item);
      if (item.children !== undefined && item.children.length > 0) {
        //如果有孩子节点就加入栈
        item.children.forEach((child: any) => {
          stack.push(child);
        });
      }
      if (item.value === goal) {
        result.push(item); //如果是目标就移入result
      }
      // data.shift();
      selected.push(item); //移除已经遍历的到selected
    });
    data = stack;//遍历完重新赋值新的遍历
    stack = [];//清空
  }
}
