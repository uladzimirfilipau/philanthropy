import IMAGE01 from '../images/news-01.png';
import IMAGE02 from '../images/news-02.png';
import IMAGE03 from '../images/news-03.png';
import IMAGE04 from '../images/news-04.png';
import IMAGE05 from '../images/news-05.png';
import IMAGE06 from '../images/news-06.png';

export const MEDIUM_SCREEN = 768;

export const BUTTON = {
  TEXT: {
    HOME: 'Go home',
    DONATE: 'Donate now',
    CHARITY: 'About our charity',
    ABOUT: 'About us',
    NEWS: 'Read more news',
    HELP: 'How can I help',
    RELATED_ARTICLES: 'Browse more',
  },
  LINK: {
    HOME: '/',
    DONATE: '/donate',
    ABOUT: '/about',
    BLOG: '/blog',
    ARTICLES: '/articles',
    RESOURCES: '/resources',
    NEWS: '/news',
  },
};

export const LEADERS = {
  SOPHIE_MOORE: {
    TITLE: 'Sophie Moore',
    SUBTITLE: 'About Sophie Moore',
  },

  JOHN_CARTER: {
    TITLE: 'John Carter',
    SUBTITLE: 'About John Carter',
  },

  EMILY_WEBER: {
    TITLE: 'Emily Weber',
    SUBTITLE: 'About Emily Weber',
  },
};

export const NEWS = [
  {
    ID: '01',
    LINK: '/blog/what-to-donate-to-a-food-bank-and-what-to-avoid',
    BUTTON_TEXT: 'Articles',
    DATE: 'Feb 11, 2022',
    TITLE: 'What to donate to a food bank and what to avoid?',
    IMAGE: IMAGE01,
    IMAGE_ALT: 'Food bank',
  },

  {
    ID: '02',
    LINK: '/blog/13-ways-to-give-to-charity-without-breaking-your-budget',
    BUTTON_TEXT: 'Resources',
    DATE: 'Feb 11, 2022',
    TITLE: '13 ways to give to charity without breaking your budget',
    IMAGE: IMAGE02,
    IMAGE_ALT: 'Clothes',
  },

  {
    ID: '03',
    LINK: '/blog/new-campaign-to-help-vulnerable-communities-in-africa',
    BUTTON_TEXT: 'News',
    DATE: 'Feb 11, 2022',
    TITLE: 'New campaign to help vulnerable communities in Africa',
    IMAGE: IMAGE03,
    IMAGE_ALT: 'Two children are smiling',
  },

  {
    ID: '04',
    LINK: '/blog/ten-ways-to-invite-and-encourage-people-to-give-to-charity',
    BUTTON_TEXT: 'Articles',
    DATE: 'Feb 11, 2022',
    TITLE: 'Ten ways to invite and encourage people to give to charity',
    IMAGE: IMAGE04,
    IMAGE_ALT: 'Hands',
  },

  {
    ID: '05',
    LINK: '/blog/7-ways-you-can-help-during-the-covid-19-global-pandemic',
    BUTTON_TEXT: 'Resources',
    DATE: 'Feb 11, 2022',
    TITLE: '7 ways you can help during the COVID-19 global pandemic',
    IMAGE: IMAGE05,
    IMAGE_ALT: 'Face Masks',
  },

  {
    ID: '06',
    LINK: '/blog/africa-2022-campaign-results-see-all-the-amazing-contributions',
    BUTTON_TEXT: 'News',
    DATE: 'Feb 11, 2022',
    TITLE: 'Africa 2022 campaign results: See all the amazing contributions',
    IMAGE: IMAGE06,
    IMAGE_ALT: 'the child smiles',
  },
];

export const ASKED_QUESTIONS = [
  {
    id: '01',
    subtitle: 'How does your charity work?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '02',
    subtitle: 'How do you choose which communities to help?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '03',
    subtitle: 'How can our company contact?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '04',
    subtitle: 'How does your charity work?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
    euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
    elit etiam cursus orci in. Id sed montes.`,
  },
  {
    id: '05',
    subtitle: 'Are you an incorporated non-profit?',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus
  euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus
  elit etiam cursus orci in. Id sed montes.`,
  },
];

export const links = [
  { name: 'Blog', link: '/blog' },
  { name: 'Blog Post', link: '/blog/what-to-donate-to-a-food-bank-and-what-to-avoid' },
  { name: 'Donate', link: '/donate' },
  { name: 'Donate Single', link: '/donate-single' },
  { name: 'Contact', link: '/contact' },
];

export const donateListTitles = ['$1.00 USD', '$5.00 USD', '$10.00 USD', 'Custom amount'];
