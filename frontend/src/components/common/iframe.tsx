interface IframeProps {
  srcPath: string;
}

export const Iframe: React.FC<IframeProps> = ({ srcPath }) => {
  return <iframe src={srcPath} width={'100%'} height={'100%'}></iframe>;
};
