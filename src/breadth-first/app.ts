declare let $: any;
import { BreadthFirst } from './BreadthFirst';
import { DeepFirst } from './DeepFirst';
let data = [
  {
    id: 1,
    value: '1',
    children: [
      {
        id: 1,
        value: '1-1',
        children: [
          {
            id: 1,
            value: '1-1-1'
          },
          {
            id: 2,
            value: '1-1-2'
          },
          {
            id: 3,
            value: '1-1-3'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    value: '2',
    children: []
  },
  {
    id: 3,
    value: '3',
    children: [
      {
        id: 1,
        value: '3-1',
        children: [
          {
            id: 1,
            value: '3-1-1'
          },
          {
            id: 2,
            value: '3-1-2'
          }
        ]
      },
      {
        id: 2,
        value: '3-2',
        children: [
          {
            id: 1,
            value: '3-2-1'
          },
          {
            id: 2,
            value: '3-2-2'
          }
        ]
      }
    ]
  }
];

// $('#bf').text(BreadthFirst(data));
DeepFirst(data);
