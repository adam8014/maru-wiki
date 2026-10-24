import React from 'react';

const animals = [{"name":"오소리","biome":"숲","place":"참나무 숲·언덕","detail":"숲속의 굴이나 나무 주변을 탐험할 때 찾아보기 좋은 동물이에요.","index":1},{"name":"바라쿠다","biome":"바다","place":"따뜻한 바다","detail":"빠르게 헤엄치는 길쭉한 바닷물고기예요.","index":2},{"name":"흑곰","biome":"숲","place":"어두운 숲·침엽수림","detail":"덩치가 큰 곰이에요. 숲과 산림 지대를 살펴보세요.","index":3},{"name":"멧돼지","biome":"숲","place":"숲·덤불 지대","detail":"나무가 많고 수풀이 우거진 곳에 어울리는 동물이에요.","index":4},{"name":"보빗웜","biome":"바다","place":"모래 해저·산호초 주변","detail":"바다 밑에서 살아가는 특이한 기다란 생물이에요.","index":5},{"name":"불곰","biome":"숲","place":"침엽수림·산지","detail":"짙은 갈색 털을 지닌 커다란 곰이에요.","index":6},{"name":"나비","biome":"초원","place":"꽃밭·초원","detail":"꽃 사이를 날아다니는 작고 화려한 곤충이에요.","index":7},{"name":"코요테","biome":"초원","place":"건조 초원·악지","detail":"날렵한 몸을 가진 야생 갯과 동물이에요.","index":8},{"name":"게","biome":"해안","place":"모래 해변","detail":"얕은 바닷물과 모래사장에 어울리는 갑각류예요.","index":9},{"name":"사슴","biome":"초원","place":"초원·자작나무 숲","detail":"숲과 풀밭을 오가는 뿔 달린 동물이에요.","index":10},{"name":"잠자리","biome":"강·습지","place":"늪·강가","detail":"물가 주변에서 날아다니는 곤충이에요.","index":11},{"name":"민물장어","biome":"강·습지","place":"강·늪","detail":"민물에 사는 길쭉한 형태의 물고기예요.","index":12},{"name":"바닷장어","biome":"바다","place":"바다 연안·암초","detail":"바닷속 바위와 암초 주변을 살펴보세요.","index":13},{"name":"야생 늑대","biome":"숲","place":"타이가·숲","detail":"무리를 이루며 돌아다니는 늑대의 야생형이에요.","index":14},{"name":"날치","biome":"바다","place":"열대 바다","detail":"커다란 가슴지느러미로 물 위를 활공하는 물고기예요.","index":15},{"name":"거위","biome":"초원","place":"호수·평야","detail":"호숫가와 풀밭을 좋아하는 새예요.","index":16},{"name":"투구게","biome":"해안","place":"갯벌·해변","detail":"넓은 딱딱한 등껍데기가 특징인 동물이에요.","index":17},{"name":"해파리","biome":"바다","place":"따뜻한 바다","detail":"투명한 몸과 긴 촉수를 가진 바다 생물이에요.","index":18},{"name":"수염수리","biome":"하늘·산악","place":"절벽·산맥","detail":"높은 산과 절벽에서 볼 법한 맹금류예요.","index":19},{"name":"칠성장어","biome":"강·습지","place":"차가운 강","detail":"둥근 입이 특징인 독특한 물고기예요.","index":20},{"name":"무스","biome":"숲","place":"침엽수림·늪","detail":"넓은 뿔을 가진 대형 사슴과 동물이에요.","index":21},{"name":"앵무조개","biome":"바다","place":"산호초·해양","detail":"나선형 껍데기가 특징인 해양 생물이에요.","index":22},{"name":"문어","biome":"바다","place":"암초 지대","detail":"여러 개의 팔로 바닷속을 돌아다니는 동물이에요.","index":23},{"name":"꿩","biome":"초원","place":"평원·숲 가장자리","detail":"화려한 깃털을 가진 지상 생활 조류예요.","index":24},{"name":"피라냐","biome":"강·습지","place":"열대 강·정글 강","detail":"이빨이 날카로운 민물고기예요.","index":25},{"name":"순록","biome":"설원","place":"눈 평원·타이가","detail":"추운 지대에 어울리는 뿔 달린 사슴과 동물이에요.","index":26},{"name":"상어","biome":"바다","place":"깊은 바다","detail":"바닷속을 헤엄치는 커다란 포식성 물고기예요.","index":27},{"name":"명금류","biome":"하늘·산악","place":"숲 가장자리·나무","detail":"나뭇가지에서 노래하는 작은 새예요.","index":28},{"name":"초대형 오징어","biome":"바다","place":"심해","detail":"긴 촉수와 커다란 몸이 특징인 대형 오징어예요.","index":29},{"name":"대왕오징어","biome":"바다","place":"깊은 바다","detail":"긴 팔을 뻗으며 움직이는 거대한 오징어예요.","index":30},{"name":"다람쥐","biome":"숲","place":"숲·큰 나무","detail":"나무를 타고 다니는 작은 설치류예요.","index":31},{"name":"타란툴라","biome":"사막","place":"건조 사막·악지","detail":"여덟 다리의 대형 거미류예요.","index":32},{"name":"칠면조","biome":"초원","place":"숲 가장자리·평원","detail":"몸집이 크고 꼬리깃이 풍성한 조류예요.","index":33},{"name":"바다코끼리","biome":"해안","place":"얼음 해안","detail":"긴 엄니가 특징인 차가운 해안의 동물이에요.","index":34},{"name":"고래","biome":"바다","place":"넓은 바다","detail":"바다를 헤엄치는 아주 거대한 동물이에요.","index":35}];
const categories = [{"id":"숲","title":"🌳 숲과 침엽수림"},{"id":"초원","title":"🌼 초원과 평원"},{"id":"강·습지","title":"💧 강과 습지"},{"id":"해안","title":"🏖️ 해변과 해안"},{"id":"바다","title":"🌊 바다와 심해"},{"id":"하늘·산악","title":"🪶 하늘과 산악"},{"id":"사막","title":"🌵 사막과 악지"},{"id":"설원","title":"❄️ 설원과 타이가"}];

export default function WildlifeCards() {
  return <div className="maru-wildlife-guide">
    {categories.map(category => <section className="maru-wildlife-section" key={category.id}>
      <h2>{category.title}</h2>
      <div className="maru-wildlife-list">
        {animals.filter(a => a.biome === category.id).map(a => {
          const index = a.index - 1;
          const row = Math.floor(index / 5) + 1;
          const col = index % 5;
          return <article className="maru-animal-card" key={a.index}>
            <div role="img" aria-label={a.name + ' 도트풍 일러스트'} className="maru-animal-picture" style={{ backgroundImage: 'url(/img/wildlife-row-' + row + '.svg)', backgroundPosition: (col * 25) + '% center' }}/>
            <div className="maru-animal-info">
              <div className="maru-animal-top"><span className="maru-animal-no">{String(a.index).padStart(2, '0')}</span><h3>{a.name}</h3></div>
              <p className="maru-animal-biome">대표 환경 <strong>{a.biome}</strong> <span>· {a.place}</span></p>
              <p className="maru-animal-description">{a.detail}</p>
            </div>
          </article>;
        })}
      </div>
    </section>)}
  </div>;
}
