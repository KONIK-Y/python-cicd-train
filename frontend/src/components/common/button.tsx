import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const DefaultButton: React.FC<ButtonProps> = ({ onClick, children }: ButtonProps) => {
  return (
    <Button onClick={onClick} color="primary" variant="contained">
      {children}
    </Button>
  );
};
