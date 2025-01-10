import { JSX } from 'react';

type IconLabelProps = {
    src?: string;
    alt?: string;
    text?: string;
}

export const CalendarLabel = ({ src, alt, text }: IconLabelProps): JSX.Element => {
  return (
    <>
      <img src={src} alt={alt}/>
      <span>{text}</span>
    </>
  );
};
