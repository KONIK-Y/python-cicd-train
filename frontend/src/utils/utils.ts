import { ITree } from '../types/types';

export function sortEachDirectory(tree: string[]): ITree {
  const sortedTree: ITree = {};
  tree.forEach((path) => {
    const pathArr = path.split('/');
    const directory = pathArr[0];
    if (sortedTree[directory]) {
      sortedTree[directory].push(path);
    } else {
      sortedTree[directory] = [path];
    }
  });
  return Object.freeze(sortedTree);
}
