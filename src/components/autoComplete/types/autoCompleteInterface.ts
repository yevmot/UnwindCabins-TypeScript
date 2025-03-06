export interface autoCompleteInterface {
    label: string;
    iconSrc?: string;
    options: string[];
    value: string | null;
    onChange?: (_: unknown, value: string | null) => void;
  }
