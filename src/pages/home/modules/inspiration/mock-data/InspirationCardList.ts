import { IInspirationCards } from '@app/types/cards';
const Card01 = '/img/cards/Inspiration-card01.jpg';
const Card02 = '/img/cards/Inspiration-card02.jpg';
const Card03 = '/img/cards/Inspiration-card03.jpg';

const inspirationCardList: IInspirationCards[] = [
  {
    img: Card01,
    slogan: 'For those who love',
    title: 'To Explore nature',
    text: 'Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.',
  },
  {
    img: Card02,
    slogan: 'For those who want',
    title: 'To Relax, rest & re-set',
    text: 'Experience mind and body connection through breathing exercises and relaxation with our Yoga inspired get away for you and the family. ',
  },
  {
    img: Card03,
    slogan: 'For those who have',
    title: 'Four-legged friends',
    text: 'When going on holiday nobody wants to put their dog in a kennel. So, lets keep the family together with our pet friendly cabins.',
  },
];

export default inspirationCardList;
