import { Box, Stack } from '@mui/material';
import React, { useRef } from 'react';

interface LineNumberedTextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const LineNumberedTextArea: React.FC<LineNumberedTextAreaProps> = ({
  value,
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
    <Stack direction={'row'} spacing={1}>
      <Box ref={lineNumberRef}>
        {lineNumbers.map((number) => (
          <Box key={number} className="line-number">
            {number}
          </Box>
        ))}
      </Box>
      <textarea
        ref={textAreaRef}
        className="text-area"
        value={value}
        onChange={onChange}
        onScroll={handleScroll}
        {...props}
      />
    </Stack>
  );
};
