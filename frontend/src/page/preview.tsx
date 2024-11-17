import { useState } from 'react';
import paths from '../assets/paths.json';
import { DefaultButton } from '../components/common/button';
import { PreviewArea } from '../components/preview-area';
import { Stack } from '@mui/material';

export const PreviewPage: React.FC = () => {
  const [srcPath, setSrcPaths] = useState<string>();

  return (
    <>
      <h1>Preview</h1>
      <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        {paths.map((path) => (
          <DefaultButton key={path} onClick={() => setSrcPaths(path)}>
            {path.toLowerCase()}
          </DefaultButton>
        ))}
      </Stack>
      <PreviewArea previewSrc={srcPath} />
    </>
  );
};
