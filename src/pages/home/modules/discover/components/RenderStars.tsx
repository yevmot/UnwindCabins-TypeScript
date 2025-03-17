import { ReactElement } from 'react';

const FullStar = '/img/cards/full-star.svg';
const CleanStar = '/img/cards/clean-star.svg';

export const renderStars = (rating: number): ReactElement[] => {
  return Array.from({ length: 5 }, (_, index) => (
    <img key={index} src={index < rating ? FullStar : CleanStar} alt="star" />
  ));
};
