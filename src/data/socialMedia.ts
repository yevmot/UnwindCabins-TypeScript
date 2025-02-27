import linkedin from './../img/icons/media/linkedin.svg';
import x from './../img/icons/media/x-social.svg';
import facebook from './../img/icons/media/facebook.svg';
import instagram from './../img/icons/media/instagram.svg';
import youtube from './../img/icons/media/youtube.svg';

import { SocialMedia } from '@app/types/socialMedia';

export const socialMedia: SocialMedia[] = [
  { name: 'Linkedin', src: linkedin, href: 'http://linkedin.com/' },
  { name: 'X', src: x, href: 'https://x.com/' },
  { name: 'Facebook', src: facebook, href: 'http://facebook.com/' },
  { name: 'Instagram', src: instagram, href: 'http://instagram.com/' },
  { name: 'Youtube', src: youtube, href: 'http://youtube.com/' },
];
