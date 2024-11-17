import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | (() => void);
  children: React.ReactNode;
  value?: string;
}

export const DefaultButton: React.FC<ButtonProps> = ({ onClick, children }: ButtonProps) => {
  return (
    <Button onClick={onClick} color="primary" variant="contained">
      {children}
    </Button>
  );
};
