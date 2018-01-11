declare let $: any;
export function DeepFirst(data: any): any {
  let goal = '3-2-1';
  let data2;
  // $.extend(true, data, data2);
  // 深度遍历
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
  data.forEach((item: any) => {
    findChild(item, goal, result);
  });
}

// 递归孩子节点
function findChild(item: any, goal: any, result: any) {
  console.log(item);
  if (item.value === goal) {
    result.push(item);//如果是目标就移入result
  }
  if (item.children !== undefined && item.children.length > 0) {
    item.children.forEach((child: any) => {
      findChild(child, goal, result); //有孩子，加入栈
    });
  }
}
