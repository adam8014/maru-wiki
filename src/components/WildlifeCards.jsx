import React from 'react';

// 마루 야생동물 안내: 세로형 원본 이미지 2장을 그대로 사용합니다.
export default function WildlifeCards() {
  return <div className="maru-wildlife-guide" style={{maxWidth:760,margin:'0 auto'}}>
    <section style={{marginBottom:32}}>
      <h2>🌿 숲 · 초원 · 강·습지 · 해안</h2>
      <img src="/img/maru-wildlife-guide-1.svg" alt="마루 야생동물 35종 도감 - 숲 초원 강 습지 해안" loading="lazy" style={{display:'block',width:'100%',height:'auto',borderRadius:12}} />
    </section>
    <section>
      <h2>🌊 바다 · 하늘·산악 · 사막 · 설원</h2>
      <img src="/img/maru-wildlife-guide-2.svg" alt="마루 야생동물 35종 도감 - 바다 하늘 산악 사막 설원" loading="lazy" style={{display:'block',width:'100%',height:'auto',borderRadius:12}} />
    </section>
  </div>;
}
