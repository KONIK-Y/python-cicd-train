import { useCallback, useState } from 'react';
import paths from '../assets/paths.json';
import { DefaultButton } from '../components/common/button';
import { PreviewArea } from '../components/preview-area';
import { Stack } from '@mui/material';
import { basePath } from '../constant/constant';
import { LineNumberedTextArea } from '../components/edit-area';

export const PreviewPage: React.FC = () => {
  const [srcPath, setSrcPaths] = useState<string>();
  const [value, setValue] = useState<string>('');
  const handlePathChange = useCallback(
    (e: React.ChangeEvent<HTMLButtonElement>) => {
      setSrcPaths(e.target.value);
    },
    [paths]
  );
  return (
    <>
      <h1>Preview</h1>
      <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        {paths.map((path) => (
          <DefaultButton key={path} onClick={handlePathChange} value={basePath + path}>
            {path.toLowerCase()}
          </DefaultButton>
        ))}
      </Stack>
      <PreviewArea previewSrc={srcPath} />
      <LineNumberedTextArea value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};
