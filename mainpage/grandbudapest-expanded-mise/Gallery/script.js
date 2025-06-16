const scenes = [
  { title: '장면 1: 로비의 만남', desc: '웨스 앤더슨 특유의 대칭 구성. 분홍색과 보라색 대비로 우아하면서도 위태로운 분위기를 연출하며, 두 인물의 심리적 거리를 시각화합니다.', image: 'images/사진1.jpg' },
  { title: '장면 2: 로비 보이 초상', desc: '로비 보이의 단독 클로즈업. 보라색 유니폼이 주변의 따뜻한 톤과 대비되며, 그의 표정에 담긴 긴장감과 순수함을 동시에 드러냅니다.', image: 'images/사진2.jpg' },
  { title: '장면 3: 엘리베이터의 정적', desc: '붉은 엘리베이터 내부에 갇힌 세 인물. 대칭적 배치와 강렬한 색채 대비로, 억압된 감정과 불안감을 시각적으로 극대화합니다.', image: 'images/사진3.jpg' }
];

let current = 0;
const titleEl = document.getElementById('scene-title');
const descEl  = document.getElementById('scene-desc');
const panel   = document.getElementById('panel-image');
const thumb   = document.getElementById('thumb');
const upBtn   = document.getElementById('thumb-up');
const downBtn = document.getElementById('thumb-down');

function updateScene(idx) {
  const s = scenes[idx];
  titleEl.textContent = s.title;
  descEl.textContent  = s.desc;
  panel.style.backgroundImage = `url('${s.image}')`;
  thumb.src = s.image;
  current = idx;
}

upBtn.addEventListener('click', () =>
  updateScene((current - 1 + scenes.length) % scenes.length)
);
downBtn.addEventListener('click', () =>
  updateScene((current + 1) % scenes.length)
);

updateScene(0);