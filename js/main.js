/* ===== Data ===== */

const experiences = [
  {
    date: '2026.05',
    title: '청소년자원봉사페스티벌 부스 스태프 활동',
    org: 'RCY 동아리',
    type: '봉사활동',
  },
  {
    date: '2026.03',
    title: 'OPEN 문화교류부 서울 청소년 내·외국인 및 국제교류 프로그램 기획 및 참여',
    org: '유스굿윌가이드(YGG)',
    type: '국제교류',
  },
  {
    date: '2026.03',
    title: '유스굿윌가이드 서울 투어 통역 가이드 봉사',
    org: '메인 가이드 활동',
    type: '가이드',
  },
  {
    date: '2025.11',
    title: '제빵 봉사활동',
    org: 'RCY 동아리',
    type: '봉사활동',
  },
  {
    date: '2025.11',
    title: '서울남산공원 플로깅 활동 및 중도입국청소년 체육교육 봉사활동',
    org: 'RCY 동아리',
    type: '봉사활동',
  },
  {
    date: '2025.11',
    title: '체험봉사활동',
    org: 'RCY 동아리',
    type: '봉사활동',
  },
];

const courses = [
  { name: 'DS기반', credits: 3, earned: 3, done: true },
  { name: '국어와수업', credits: 2, earned: 2, done: true },
  { name: '공중보건', credits: 3, earned: 3, done: true },
  { name: '공연콘텐츠와현대성', credits: 3, earned: 3, done: true },
  { name: '고전명저', credits: 3, earned: 3, done: true },
  { name: '글로벌', credits: 2, earned: 2, done: true },
  { name: '인간사회경제와 자연과학기반', credits: 3, earned: 3, done: true },
  { name: '역사와문화', credits: 3, earned: 3, done: true },
  { name: '영어', credits: 2, earned: 2, done: true },
];

const activityDetails = [
  {
    title: '청소년자원봉사페스티벌 부스 스태프',
    status: '완료',
    org: 'RCY 동아리',
    type: '오프라인',
    date: '2026.05.16  10:00 ~ 16:00',
  },
  {
    title: '서울학교 플로깅 활동',
    status: '완료',
    org: 'RCY 동아리',
    type: '오프라인',
    date: '2026.03.21  14:30 ~ 17:00',
  },
  {
    title: 'OPEN 문화교류 서울 투어 가이드',
    status: '완료',
    org: '메인가이드 & YGG',
    type: '가이드',
    date: '2026.03.14  09:00 ~ 17:00',
  },
  {
    title: '유스굿윌가이드 오리엔테이션',
    status: '완료',
    org: '메인가이드 & YGG',
    type: '가이드',
    date: '2026.03.07  10:00 ~ 17:00',
  },
  {
    title: '중도입국청소년 체육교육 봉사',
    status: '완료',
    org: 'RCY 동아리',
    type: '청소년',
    date: '2025.11.08  13:00 ~ 17:00',
  },
  {
    title: '제빵봉사활동',
    status: '완료',
    org: 'RCY 동아리',
    type: '봉사',
    date: '2025.11.01  09:30 ~ 12:30',
  },
];

const skills = [
  {
    icon: '🤖',
    name: 'ChatGPT',
    level: 9,
    maxLevel: 10,
    fields: '문서 작성 · 자료 조사 · 학습 · 아이디어 발상',
    desc: '생성형 AI를 활용하여 문서 작성, 학습 정리, 자료 조사 및 발표 준비를 효율적으로 수행합니다.',
    experiences: [
      '실험보고서 및 과제 작성',
      '포트폴리오 제작',
      '발표 대본 및 자기소개서 작성',
      '강의자료 요약 및 시험 대비',
      'Python 학습 및 코드 보조',
    ],
  },
  {
    icon: '✨',
    name: 'Google Gemini',
    level: 8,
    maxLevel: 10,
    fields: '자료 조사 · 정보 분석 · 문서 작성',
    desc: '',
    experiences: [
      '자료 리서치',
      'AI 결과 비교 및 교차 검증',
      '발표자료 조사',
    ],
  },
  {
    icon: '📄',
    name: 'Google Docs',
    level: 8,
    maxLevel: 10,
    fields: '문서 작성 · 협업 · 보고서',
    desc: '',
    experiences: [
      '공동 보고서 작성',
      '팀 프로젝트 협업',
      '실시간 문서 편집',
    ],
  },
  {
    icon: '☁️',
    name: 'Google Drive',
    level: 8,
    maxLevel: 10,
    fields: '파일 관리 · 자료 공유 · 협업',
    desc: '',
    experiences: [
      '프로젝트 자료 관리',
      '팀원 간 파일 공유',
      '문서 버전 관리',
    ],
  },
  {
    icon: '🎨',
    name: 'Canva',
    level: 8,
    maxLevel: 10,
    fields: '프레젠테이션 · 디자인 · 포트폴리오',
    desc: '',
    experiences: [
      '발표자료 제작',
      '포트폴리오 디자인',
      '카드뉴스 및 이미지 제작',
    ],
  },
];

const plans = [
  {
    icon: '📚',
    title: '학업',
    items: [
      '전공 GPA 4.0 이상 유지',
      'Python 활용 능력 향상',
      '공학 기초(수학·물리) 탄탄하게 다지기',
    ],
  },
  {
    icon: '🤖',
    title: 'AI & 디지털 역량',
    items: [
      '생성형 AI를 학업과 연구에 적극 활용',
      'Notion을 활용한 지식관리 시스템 구축',
      '업무 자동화 도구(n8n) 학습',
    ],
  },
  {
    icon: '🌱',
    title: '성장',
    items: [
      '공모전 및 프로젝트 2회 이상 참여',
      '교내외 비교과 활동 꾸준히 참여',
      '연구실 인턴 기회 도전',
    ],
  },
  {
    icon: '🎯',
    title: '진로',
    items: [
      '신소재 연구 분야 탐색',
      '반도체·배터리 소재 분야 공부',
      '연구개발(R&D) 직무 준비',
    ],
  },
  {
    icon: '🌍',
    title: '자기계발',
    items: [
      '영어 회화 실력 향상',
      '독서 월 2권 이상',
      '꾸준한 운동과 건강관리',
    ],
  },
];

const values = [
  {
    icon: '📖',
    title: '배우는 것을 즐깁니다.',
    desc: '새로운 분야를 접하는 것을 두려워하지 않습니다.',
    points: [
      '모르는 개념은 끝까지 이해하려고 노력합니다.',
      'AI와 다양한 자료를 활용해 스스로 학습합니다.',
      '배운 내용을 정리하며 제 것으로 만드는 습관을 갖고 있습니다.',
    ],
  },
  {
    icon: '🌱',
    title: '꾸준함을 가장 큰 경쟁력으로 생각합니다.',
    desc: '특별한 재능보다 꾸준함이 더 큰 결과를 만든다고 믿습니다.',
    points: [
      '작은 목표부터 차근차근 실천합니다.',
      '계획을 세우고 끝까지 실행하려고 노력합니다.',
      '실패도 성장 과정의 일부라고 생각합니다.',
    ],
  },
  {
    icon: '🤝',
    title: '함께 성장하는 사람을 지향합니다.',
    desc: '좋은 결과는 혼자보다 함께 만들 때 더 커진다고 생각합니다.',
    points: [
      '팀원의 의견을 존중합니다.',
      '맡은 역할은 끝까지 책임집니다.',
      '협업 과정에서 배우는 것을 중요하게 생각합니다.',
    ],
  },
  {
    icon: '💡',
    title: '문제를 해결하는 과정을 즐깁니다.',
    desc: '정답만 찾기보다 해결 과정을 이해하려고 합니다.',
    points: [
      '다양한 방법을 시도합니다.',
      'AI와 여러 도구를 적극 활용합니다.',
      '더 효율적인 방법을 찾는 것을 좋아합니다.',
    ],
  },
  {
    icon: '⚖️',
    title: '균형 있는 성장을 추구합니다.',
    desc: '학업뿐 아니라 사람과 경험도 함께 성장의 일부라고 생각합니다.',
    points: [
      '건강한 생활습관 유지',
      '비교과 활동 적극 참여',
      '새로운 경험을 두려워하지 않기',
    ],
  },
];

/* ===== Render Functions ===== */

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = experiences.map((exp) => `
    <div class="timeline-item reveal">
      <div class="timeline-content">
        <div class="timeline-card inline-block max-w-md">
          <span class="inline-block text-xs font-medium text-skku-gold bg-amber-50 px-2 py-0.5 rounded mb-2">${exp.type}</span>
          <h4 class="font-semibold text-skku-navy text-sm leading-snug">${exp.title}</h4>
          <p class="text-slate-500 text-xs mt-1">${exp.org}</p>
        </div>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-date">
        <span class="timeline-date-badge">${exp.date}</span>
      </div>
    </div>
  `).join('');
}

function renderCreditsTable() {
  const tbody = document.getElementById('credits-tbody');
  tbody.innerHTML = courses.map((c) => `
    <tr>
      <td class="font-medium text-slate-700">${c.name}</td>
      <td class="text-center text-slate-600">${c.credits}</td>
      <td class="text-center text-skku-blue font-semibold">${c.earned}</td>
      <td class="text-center">
        ${c.done
          ? '<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs">✓</span>'
          : '<span class="text-slate-300">—</span>'}
      </td>
    </tr>
  `).join('');

  const totalCredits = courses.reduce((s, c) => s + c.earned, 0);
  tbody.innerHTML += `
    <tr class="bg-skku-light font-semibold">
      <td class="text-skku-navy">합계</td>
      <td class="text-center text-skku-navy">${totalCredits}</td>
      <td class="text-center text-skku-blue">${totalCredits}</td>
      <td class="text-center"></td>
    </tr>
  `;
}

function renderActivityDetails() {
  const container = document.getElementById('activity-details');
  container.innerHTML = activityDetails.map((a) => `
    <div class="activity-card reveal">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h4 class="font-semibold text-skku-navy text-sm leading-snug">${a.title}</h4>
        <span class="activity-status shrink-0">${a.status}</span>
      </div>
      <div class="space-y-1 text-xs text-slate-500">
        <p><span class="text-slate-400">소속</span> · ${a.org}</p>
        <p><span class="text-slate-400">유형</span> · ${a.type}</p>
        <p><span class="text-slate-400">일시</span> · ${a.date}</p>
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = skills.map((s) => `
    <div class="skill-card reveal">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-3">
          <span class="text-2xl">${s.icon}</span>
          <div>
            <h3 class="font-bold text-skku-navy">${s.name}</h3>
            <p class="text-xs text-slate-500 mt-0.5">${s.fields}</p>
          </div>
        </div>
        <span class="skill-level">Lv.${s.level}</span>
      </div>
      <div class="level-bar">
        <div class="level-fill ${s.level >= 9 ? 'gold' : ''}" data-level="${(s.level / s.maxLevel) * 100}"></div>
      </div>
      ${s.desc ? `<p class="text-sm text-slate-600 mt-4 leading-relaxed">${s.desc}</p>` : ''}
      <div class="mt-4">
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">활용 경험</p>
        <ul class="space-y-1">
          ${s.experiences.map((e) => `<li class="text-sm text-slate-600 flex items-start gap-2"><span class="text-skku-blue mt-1">•</span>${e}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderPlans() {
  const container = document.getElementById('plans-container');
  container.innerHTML = plans.map((p) => `
    <div class="plan-card reveal">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl">${p.icon}</span>
        <h3 class="font-bold text-lg">${p.title}</h3>
      </div>
      <ul>
        ${p.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderValues() {
  const container = document.getElementById('values-container');
  container.innerHTML = values.map((v) => `
    <div class="value-card reveal">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xl">${v.icon}</span>
        <h3 class="font-bold text-skku-navy text-sm leading-snug">${v.title}</h3>
      </div>
      <p class="text-sm text-slate-500 mb-3 leading-relaxed">${v.desc}</p>
      <ul class="space-y-1.5">
        ${v.points.map((pt) => `<li class="text-sm text-slate-600 flex items-start gap-2"><span class="text-skku-gold shrink-0">▸</span>${pt}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function calcVolunteerHours() {
  const hours = [
    { on: 0, off: 6, label: '청소년자원봉사페스티벌' },
    { on: 0, off: 2.5, label: '플로깅' },
    { on: 0, off: 8, label: '서울 투어 가이드' },
    { on: 0, off: 7, label: 'YGG 오리엔테이션' },
    { on: 0, off: 4, label: '체육교육 봉사' },
    { on: 0, off: 3, label: '제빵봉사' },
  ];
  const offCampus = hours.reduce((s, h) => s + h.off, 0);
  const onCampus = hours.reduce((s, h) => s + h.on, 0);
  document.getElementById('vol-on').textContent = `${onCampus}h`;
  document.getElementById('vol-off').textContent = `${offCampus}h`;
  document.getElementById('vol-total').textContent = `${onCampus + offCampus}h`;
}

/* ===== Charts ===== */

const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
};

function initCharts() {
  const totalCredits = courses.reduce((s, c) => s + c.earned, 0);
  const gradCredits = 130;

  new Chart(document.getElementById('credits-chart'), {
    type: 'doughnut',
    data: {
      labels: ['이수학점', '잔여'],
      datasets: [{
        data: [totalCredits, gradCredits - totalCredits],
        backgroundColor: ['#00458C', '#E2E8F0'],
        borderWidth: 0,
        cutout: '72%',
      }],
    },
    options: {
      ...chartDefaults,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw}학점`,
          },
        },
      },
    },
    plugins: [{
      id: 'centerText',
      beforeDraw(chart) {
        const { ctx, chartArea: { top, bottom, left, right } } = chart;
        ctx.save();
        ctx.font = 'bold 28px Outfit, sans-serif';
        ctx.fillStyle = '#002855';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${totalCredits}`, (left + right) / 2, (top + bottom) / 2 - 8);
        ctx.font = '12px Pretendard, sans-serif';
        ctx.fillStyle = '#64748b';
        ctx.fillText('/ 130 학점', (left + right) / 2, (top + bottom) / 2 + 16);
        ctx.restore();
      },
    }],
  });

  const gpaData = [3.8, 3.9, 4.0, 3.95];
  const gpaLabels = ['1-1', '1-2', '목표', '평균'];

  new Chart(document.getElementById('gpa-chart'), {
    type: 'bar',
    data: {
      labels: gpaLabels,
      datasets: [{
        data: gpaData,
        backgroundColor: ['#00458C', '#0066B3', '#C5A572', '#00458C'],
        borderRadius: 8,
        barThickness: 40,
      }],
    },
    options: {
      ...chartDefaults,
      scales: {
        y: {
          min: 0,
          max: 4.5,
          ticks: { stepSize: 0.5 },
          grid: { color: '#f1f5f9' },
        },
        x: {
          grid: { display: false },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `GPA: ${ctx.raw}`,
          },
        },
      },
    },
  });

  new Chart(document.getElementById('radar-chart'), {
    type: 'radar',
    data: {
      labels: ['인증활동', '국제화', '학업활동', 'AI활동', '봉사', '리더십'],
      datasets: [{
        label: '참여도',
        data: [85, 70, 75, 80, 90, 65],
        backgroundColor: 'rgba(0, 69, 140, 0.15)',
        borderColor: '#00458C',
        pointBackgroundColor: '#C5A572',
        pointBorderColor: '#fff',
        pointRadius: 5,
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { stepSize: 25, display: false },
          grid: { color: '#e2e8f0' },
          angleLines: { color: '#e2e8f0' },
          pointLabels: {
            font: { size: 11, family: 'Pretendard, sans-serif' },
            color: '#475569',
          },
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
  });
}

/* ===== Interactions ===== */

function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s';
      setTimeout(() => loader.remove(), 500);
    }, 800);
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          entry.target.querySelectorAll('.level-fill').forEach((bar) => {
            bar.style.width = bar.dataset.level + '%';
          });
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ===== Init ===== */

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderCreditsTable();
  renderActivityDetails();
  renderSkills();
  renderPlans();
  renderValues();
  calcVolunteerHours();
  initCharts();
  initLoader();
  initNavbar();
  initScrollReveal();
  initActiveNav();
  initBackToTop();
  initSmoothScroll();
});
