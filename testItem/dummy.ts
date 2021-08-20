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

export const items: Item[] = [
  {
    _id: 'f23e',
    title: '강아지 명품 가디건 고양이 니트 겨울 애견 옷 S-XL',
    image: 'https://i.ibb.co/8cfzBvy/1.png',
    price: 28000,
  },
  {
    _id: 'b675',
    title: '도그파라다이스 강아지옷 봄옷 원피스 2 COLOR S-XL',
    image: 'https://i.ibb.co/bNMq3tz/2.png',
    price: 23900,
  },
  {
    _id: 'yb35',
    title: '햄스터 옷',
    image: 'https://i.ibb.co/jD0kRsf/3.png',
    price: 21500,
  },
  {
    _id: 'tv34',
    title: '발렌시아가 소형견 중형견 애견옷',
    image: 'https://i.ibb.co/bzW4Lds/4.png',
    price: 22500,
  },
  {
    _id: 'brty',
    title: '데일리 후드집업 _ ivory',
    image: 'https://i.ibb.co/Bq03c58/5.png',
    price: 36000,
  },
  {
    _id: 'b56uh',
    title: '코코스튜디오 강아지 독 브라운 가디건',
    image: 'https://i.ibb.co/GvWC6Y9/6.png',
    price: 12860,
  },
  {
    _id: 'v3t4',
    title: '레드 로즈원피스 [ 토끼 옷 ]',
    image: 'https://i.ibb.co/YyD52Xm/7.png',
    price: 30000,
  },
  {
    _id: 'nn56u',
    title: '알럽펫 반려견 계란후라이 스트라이프 조끼',
    image: 'https://i.ibb.co/rk4grSD/8.png',
    price: 8620,
  },
  {
    _id: 'b35t',
    title: '[고양이 강아지옷] 토끼세일러 원피스',
    image: 'https://i.ibb.co/B4BPBqc/9.png',
    price: 37000,
  },
  {
    _id: 'y45',
    title: '매그독 마카롱 프릴 민소매 티셔츠',
    image: 'https://i.ibb.co/Czm98n0/10.png',
    price: 10630,
  },
];
