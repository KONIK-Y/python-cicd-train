import { Box } from '@mui/material';
import { Iframe } from './common/iframe';

interface PreviewAreaProps {
  previewSrc: string | undefined;
  controller?: React.ReactNode;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({ previewSrc, controller }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        padding: '10px',
        borderRadius: '5px',
        border: '2px solid #bbb',
      }}
    >
      {controller}
      {previewSrc ? <Iframe srcPath={previewSrc} /> : <p>No path selected</p>}
    </Box>
  );
};
