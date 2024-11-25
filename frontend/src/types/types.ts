export interface ITree {
  [key: string]: string[];
}

export type Folder = {
  files?: string[];
} & {
  [folderName: string]: Folder | undefined;
};
