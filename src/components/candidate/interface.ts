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

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  techStack: string;
  description: string;
  link?: string;
}

export type Profile = {
  name: string;
  email: string;
  rolePreference: string;
  locationPreference: string;
  skills: string[];
  hobbies?: string;
  education?: string;
  experience: Experience[];
  projects: Project[];
};

export type ProfilePreviewProps = {
  profile: Profile;
};