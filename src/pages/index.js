import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
const cards = [
  ['🌱','처음 시작하기','접속부터 첫날 생존까지','/guide/intro'],
  ['🏆','mcMMO 성장','스킬과 능력을 익히는 방법','/guide/content/mcmmo'],
  ['🎣','낚시','한국 물고기 24종, 토템, 미끼와 배달','/guide/content/fishing'],
  ['🍳','마루 요리','요리책과 50종 레시피, 음식별 효과','/guide/content/cooking'],
  ['🐾','야생동물','새로운 동물 35종 · 서식 환경 · 모델','/guide/content/wildlife'],
  ['🎒','개인 가방','Shift+F · 창고 5개 · 추가권 제작법','/guide/systems/backpack'],
  ['🎮','미니게임','CS어택 · TNT런 · 배드워즈','/guide/content/minigames'],
  ['⌨️','이동·홈·명령어','TPA, 셋홈, 스폰, 로그 조사 사용법','/guide/help/commands']
];
export default function Home(){
 return <Layout title="마루 공식 위키" description="마루 마인크래프트 서버의 공식 플레이 가이드">
  <main>
   <section className={styles.hero}><div className={styles.badge}>✦ MARU SERVER · PLAYER HANDBOOK</div><h1>너의 이야기가<br/><span>피어나는 세계.</span></h1><p>처음 접속하는 순간부터 새로운 콘텐츠를 발견하는 날까지.<br/>모든 모험가를 위한 마루 서버 가이드북</p><Link className={styles.button} to="/guide/intro">모험 시작하기 ↗</Link><div className={styles.pixel}>✿ ✧ ✿ ✦ ✧ ✿</div></section>
   <section className={styles.wrapper}><div className={styles.heading}><div><small>EXPLORE MARU</small><h2>무엇을 찾고 있나요?</h2></div><p>콘텐츠별 설명을 한눈에 확인해 보세요.</p></div><div className={styles.grid}>{cards.map(([icon,title,desc,link])=><Link key={title} to={link} className={styles.card}><div className={styles.emoji}>{icon}</div><h3>{title} <span>↗</span></h3><p>{desc}</p></Link>)}</div></section>
   <section className={styles.notice}>🌸 이 위키는 계속 자라는 중이에요. 기능과 명령어는 실제 서버 설정 확인 후 순차적으로 보완됩니다.</section>
  </main>
 </Layout>
}