import { ITree } from '../types/types';

export function sortEachDirectory(paths: string[]): ITree {
  const sortedTree: ITree = {};
  paths.forEach((path) => {
    const trimmed = path.startsWith('/') ? path.slice(1) : path;
    const pathArr = trimmed.split('/');

    if (pathArr.length === 0) return;

    const directory = pathArr[0];

    if (!directory) return;

    if (sortedTree[directory]) {
      sortedTree[directory].push(path);
    } else {
      sortedTree[directory] = [path];
    }
  });
  return sortedTree;
}
