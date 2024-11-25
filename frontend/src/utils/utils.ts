import { Folder } from '../types/types';

export function groupByFolder(paths: string[]): Folder {
  const result: Folder = {};

  paths.forEach((path) => {
    const trimmed = path.startsWith('/') ? path.slice(1) : path;
    trimmed.split('/').reduce((acc: Folder, part, i, arr) => {
      if (i === arr.length - 1) {
        if (!acc.files) {
          acc.files = [];
        }
        acc.files.push(part);
      } else {
        if (!acc[part]) {
          acc[part] = {};
        }
      }
      return acc[part] as Folder;
    }, result);
  });

  return result;
}
