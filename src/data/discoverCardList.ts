import { IIDiscoverCards } from '@app/types/cards';
import Card01 from './../img/cards/Discover-card01.jpg';
import Card02 from './../img/cards/Discover-card02.jpg';
import Card03 from './../img/cards/Discover-card03.jpg';

const discoverCardList: IIDiscoverCards[] = [
  {
    img: Card01,
    location: 'Hampshire · England',
    title: 'Rustic country retreat',
    price: '£210',
    text: 'Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.',
    review: 82,
  },
  {
    img: Card02,
    location: 'Norfolk · England',
    title: 'Cozy getaway cabin',
    price: '£312',
    text: 'Open the door and breathe in the fresh air of nature. Our cozy corner is hidden in a picturesque place where time seems to slow down.',
    review: 85,
  },
  {
    img: Card03,
    location: 'Hampshire · England',
    title: 'Rustic country retreat',
    price: '£243',
    text: 'Step outside the threshold and enjoy the harmony of silence and the beauty of nature. It is for those who seek tranquility away from the city.',
    review: 79,
  },
];

export default discoverCardList;
