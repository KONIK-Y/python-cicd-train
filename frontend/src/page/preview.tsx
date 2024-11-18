import { useCallback, useEffect, useState } from 'react';
import paths from '../assets/paths.json';
import { DefaultButton } from '../components/common/button';
import { PreviewArea } from '../components/preview-area';
import { Box, Stack } from '@mui/material';
import { basePath } from '../constant/constant';
import { LineNumberedTextArea } from '../components/edit-area';

export const PreviewPage: React.FC = () => {
  const [srcPath, setSrcPaths] = useState<string>();
  const [isOpenSrcView, setIsOpenSrcView] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handlePathChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setSrcPaths(e.currentTarget.value);
      console.log(e.currentTarget.value);
    },
    [srcPath]
  );
  return (
    <>
      <h1>Preview</h1>
      <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        {paths.map((path) => (
          <DefaultButton key={path} onClick={handlePathChange} value={basePath + path}>
            {path.split('/')}
          </DefaultButton>
        ))}
      </Stack>
      <Stack
        direction={'row'}
        sx={{
          width: '100%',
          height: '80%',
        }}
      >
        <PreviewArea previewSrc={srcPath} />
        <Box sx={{ width: '40%' }}>
          <LineNumberedTextArea
            value={value}
            readOnly={true}
            onChange={(e) => setValue(e.target.value)}
          />
        </Box>
      </Stack>
    </>
  );
};
