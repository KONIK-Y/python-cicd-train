interface TextAreaProps {
  value: string;
  readonly: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ value, readonly, onChange }) => {
  return (
    <textarea
      value={value}
      readOnly={readonly}
      onChange={onChange}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '5px',
      }}
    />
  );
};
