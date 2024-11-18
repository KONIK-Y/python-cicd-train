import { Box, Stack } from '@mui/material';
import React, { useRef } from 'react';

interface LineNumberedTextAreaProps {
  value: string;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const LineNumberedTextArea: React.FC<LineNumberedTextAreaProps> = ({
  value,
  readOnly,
  onChange,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbers = value.split('\n').map((_, i) => i + 1);
  const lineNumberRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (lineNumberRef.current && textAreaRef.current) {
      lineNumberRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  return (
    <Stack
      direction={'row'}
      spacing={1}
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid',
      }}
    >
      <Box
        ref={lineNumberRef}
        sx={{
          px: 0.5,
          background: 'lightgray',
          overflow: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {lineNumbers.map((number) => (
          <Box key={number} className="line-number" sx={{ textAlign: 'right', fontSize: '12px' }}>
            {number}
          </Box>
        ))}
      </Box>
      <textarea
        ref={textAreaRef}
        readOnly={readOnly ?? false}
        className="text-area"
        value={value}
        onChange={onChange}
        onScroll={handleScroll}
        style={{
          lineHeight: '1.5',
          fontSize: '12px',
          resize: 'none',
          width: '100%',
          textWrap: 'nowrap',
          overflow: 'none',
          border: 'none',
        }}
        {...props}
      />
    </Stack>
  );
};
