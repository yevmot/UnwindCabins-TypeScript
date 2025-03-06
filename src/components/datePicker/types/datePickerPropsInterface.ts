export interface datePickerPropsInterface {
    label: string;
    value: Date | null;
    minDate: Date;
    maxDate?: Date;
    onChange?: (date: Date | null) => void;
  }
