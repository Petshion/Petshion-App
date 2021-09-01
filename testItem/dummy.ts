export interface Item {
  _id: string;
  title: string;
  image: string;
  price: number;
}

export interface BasketItem {
  id: string;
  title: string;
  image: string;
  color: string;
  size: string;
  count: number;
  price: number;
  checked: boolean;
}

export const basketItemsDummy: BasketItem[] = [
  {
    id: 'f34ioj',
    title: '테스트',
    image: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
    color: '빨강',
    size: 'M',
    count: 5,
    price: 24892,
    checked: false,
  },
  {
    id: '2nhu34',
    title: 'Test',
    image:
      'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-썸네일.jpg',
    color: '노랑',
    size: 'L',
    count: 2,
    price: 10000,
    checked: false,
  },
  {
    id: 'h87fs',
    title: 'ttttt',
    image:
      'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-5.jpg',
    color: '초록',
    size: 'XL',
    count: 1,
    price: 139000,
    checked: false,
  },
];
