import React,{useState, useRef, useEffect} from 'react';
import './Slide.css';

const slideData =[
     {
    img: 'https://picsum.photos/400/400?randam=1',
    text: '민생회복\n소비쿠폰\n사용 가능합니다',
  },
  {
    img: 'https://picsum.photos/400/400?randam=2',
    text: '민생회복\n소비쿠폰\n사용 가능합니다',
  },
  {
    img: 'https://picsum.photos/400/400?randam=3',
    text: '민생회복\n소비쿠폰\n사용 가능합니다',
  },
]


export default function Slide() {
    const [current, setCurrent] = useState(0); //현재 보여지는 슬라이드 인덱스(current)
    const [isPlaying, setIsPlaying] = useState(true); //자동 슬라이드 재생여부(isPlaying)
    const intervalRef = useRef(null);//setInterval을 참조하기 위해사용(나중에 멈추기위해서)
    //자동슬라이드
    useEffect(() => {
        if(isPlaying){
            intervalRef.current = setInterval(()=>{
                setCurrent(prev => (prev+1) % slideData.length);
            },3000);
        }
        return () => clearInterval(intervalRef.current);
    },[isPlaying])
  //isPlaying 이 true 일 때 3초마다 슬라이드 변경
  //setCurrent(prev => (prev+1) % slideData.length) 마지막슬라이드
  // 다음엔 첫 슬라이드로 돌아가도록 처리
  //cleanup함수에서  clearInterval 로 이전 interval 제거
  //이게 중요한이유 => isPlaying 상태가 바뀔때마다 기존 interval 지우고 새 interval 생성

  //수동 슬라이드 전환
    const goToSlide = (index) =>{
        setCurrent(index);
    }
    //재생/정지 토글
    const togglePlay = () =>{
        setIsPlaying(!isPlaying);
    }
//일시정지 버튼을 누르면 isPlaying 상태를 반전
//useEffect가 다시 실행되어 interval 생성 / 삭제


  return (
    // 현재인덱스(index === current) 만 active클래스가붙음
    //css .slide.acitve만 보이게 코딩하고 나머지 숨김 
    <div className='slide-area'>
        {slideData.map((slide, index)=>(
             <div key={index} className={`slide ${index === current ? 'active':''}`}>
                <img src={slide.img}/>
                 <div className="slide-text">
                    <h2>
                        {slide.text.split('\n').map((line,i)=><span key={i}>{line}<br/></span>)}
                    </h2>
                 </div>   
             </div>   
        ))}
{/* 백틱 감싸진 탬플릿 리터럴 - $제이쿼리아님 이는 자바스크립트의 변수나 표현식을 문자열안에삽입 */}
{/* 
    slide.text.split('\n')
     slide.text[0] = "민생회복"
     slide.text[1] = "소비쿠폰"
      slide.text[2] = "사용 가능합니다."
*/}
        <div className='pager'>
            {slideData.map((_, idx)=>(
                <button
                    key={idx} 
                    className={`pager-dot ${idx === current ? 'active' : ''}`}
                    onClick={()=>goToSlide(idx)}
                ></button>
            ))}
            <button className='stop-btn' onClick={togglePlay}>
                {isPlaying ? '⏸':'▶'}
            </button>

        </div>

    </div>
  )
}
