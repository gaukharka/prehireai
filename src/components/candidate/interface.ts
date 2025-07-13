export interface InputProps {
  label: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  type?: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}