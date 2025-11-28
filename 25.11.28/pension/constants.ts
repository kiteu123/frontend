import { Room, Amenity } from './types';

export const APP_NAME = "Celestia Cliffside";

// Copywriting: Slogans for the Home Page
export const SLOGANS = [
  "산과 바다가 맞닿은 곳, 오직 당신만을 위한 프라이빗 생크추어리",
  "구름 위에서 즐기는 오션뷰, 침묵조차 럭셔리가 되는 순간",
  "최고의 휴식은 방해받지 않는 것, 셀레스티아에서 시작하세요"
];

export const CTA_TEXT = "프라이빗 생크추어리 예약하기";

// Copywriting: Rooms
export const ROOMS: Room[] = [
  {
    id: 'sunrise-suite',
    name: 'Sunrise Suite (선라이즈 스위트)',
    tagline: '아침의 첫 빛을 가장 먼저 맞이하는 공간',
    description: '동해의 수평선 너머로 떠오르는 장엄한 일출을 침대에서 감상할 수 있는 시그니처 객실입니다. 화이트와 우드 톤의 인테리어가 주는 따스함은 당신의 하루를 평온하게 시작하게 돕습니다. 프라이빗 테라스에서 즐기는 모닝 커피와 함께, 바다의 윤슬이 반짝이는 눈부신 아침을 소유하세요. 연인과 함께 새로운 시작을 꿈꾸기에 완벽한 공간입니다.',
    features: ['오션뷰 프라이빗 테라스', '킹사이즈 프리미엄 구스 침구', '독립형 자쿠지', '다이슨 헤어 케어 세트'],
    imageUrl: 'https://picsum.photos/id/1036/800/600',
    price: '₩450,000 / 1박'
  },
  {
    id: 'moonlight-villa',
    name: 'Moonlight Villa (문라이트 빌라)',
    tagline: '별빛과 파도 소리가 채우는 로맨틱한 밤',
    description: '어둠이 내리면 더욱 빛나는 문라이트 빌라는 밤하늘의 별과 바다 위의 어선 불빛이 어우러진 낭만적인 야경을 선사합니다. 톤 다운된 네이비와 차콜 컬러의 인테리어는 깊은 안정감을 주며, 넓은 거실과 연결된 인피니티 풀은 마치 밤바다 위에 떠 있는 듯한 환상적인 경험을 제공합니다. 둘만의 프라이빗한 파티를 즐기기에 최적화된 공간입니다.',
    features: ['초대형 프라이빗 인피니티 풀', '와인 셀러 및 미니바', '빔 프로젝터 시네마 룸', '어메니티: 몰튼 브라운'],
    imageUrl: 'https://picsum.photos/id/1040/800/600',
    price: '₩600,000 / 1박'
  }
];

// Copywriting: Amenities
export const AMENITIES: Amenity[] = [
  {
    id: 'infinity-pool',
    title: 'Private Infinity Pool',
    description: '모든 객실에 구비된 개별 인피니티 풀에서 산과 바다가 하나 되는 절경을 감상하세요. 사계절 미온수로 운영되어 언제든 따뜻한 유영을 즐길 수 있습니다.',
    iconName: 'Pool',
    imageUrl: 'https://picsum.photos/id/10/600/400'
  },
  {
    id: 'welcome-dinner',
    title: 'Chef’s Welcome Dinner',
    description: '특급 호텔 출신 셰프가 제철 식재료로 직접 요리한 웰컴 디너를 객실로 서빙해 드립니다. 편안한 옷차림으로 최고급 파인다이닝을 경험해 보세요.',
    iconName: 'Utensils',
    imageUrl: 'https://picsum.photos/id/493/600/400'
  },
  {
    id: 'floating-breakfast',
    title: 'Floating Breakfast',
    description: '눈부신 아침 햇살 아래, 인피니티 풀 위에서 즐기는 이색적인 조식 서비스입니다. 갓 구운 빵과 신선한 과일, 스파클링 와인으로 하루를 특별하게 시작하세요.',
    iconName: 'Coffee',
    imageUrl: 'https://picsum.photos/id/431/600/400'
  },
  {
    id: 'in-room-spa',
    title: 'Aromatherapy Spa',
    description: '최고급 천연 아로마 오일을 활용한 인룸 스파 서비스입니다. 전문 테라피스트가 객실로 방문하여 여행의 피로를 부드럽게 풀어드립니다.',
    iconName: 'Sparkles',
    imageUrl: 'https://picsum.photos/id/106/600/400'
  },
  {
    id: 'starlight-cinema',
    title: 'Starlight Cinema',
    description: '풀사이드에 준비된 대형 스크린과 푹신한 빈백에서 영화를 감상하세요. 쏟아지는 별빛 아래, 파도 소리를 배경음악 삼아 잊지 못할 추억을 남길 수 있습니다.',
    iconName: 'Camera',
    imageUrl: 'https://picsum.photos/id/250/600/400'
  }
];
