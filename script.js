document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderCreditTable();
  renderProgramStats();
  renderActivityDetails();
  renderSkills();
  renderGoals();
  renderValues();
  initScrollAnimations();
  initProgressBars();
  initRadarChart();
});

/* ── Navigation ── */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNavLink();
  });

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

function updateActiveNavLink() {
  const sections = ['academic', 'extracurricular', 'skills', 'goals', 'values'];
  const scrollPos = window.scrollY + 120;

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const links = document.querySelectorAll(`a[href="#${id}"]`);

    links.forEach(link => {
      link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
    });
  });
}

/* ── Scroll Animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

/* ── Progress Bars ── */
function initProgressBars() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.progress-fill[data-width]').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.progress-bar-wrap').forEach(el => {
    const card = el.closest('.card');
    if (card) observer.observe(card);
  });
}

/* ── Credit Table ── */
function renderCreditTable() {
  const data = [
    { name: 'DS기반', area: 'DS', earned: 3, required: 6, remaining: 3 },
    { name: '국제어수업', area: '교양', earned: 7, required: 18, remaining: 11 },
    { name: '균형교양', area: '교양', earned: 6, required: 6, remaining: 0, done: true },
    { name: '성균인성·리더십', area: '교양', earned: 0, required: 2, remaining: 2 },
    { name: '고전·명저', area: '교양', earned: 3, required: 3, remaining: 0, done: true },
    { name: '글로벌', area: '교양', earned: 4, required: 4, remaining: 0, done: true },
    { name: '인문사회과학/자연과학기반', area: '교양', earned: 15, required: 15, remaining: 0, done: true },
    { name: '의사소통', area: '교양', earned: 4, required: 4, remaining: 0, done: true },
    { name: '창의', area: '교양', earned: 3, required: 3, remaining: 0, done: true },
  ];

  const tbody = document.getElementById('credit-table');
  tbody.innerHTML = data.map(row => `
    <tr>
      <td class="font-medium">${row.name}</td>
      <td class="text-slate-500">${row.area}</td>
      <td class="text-right font-semibold">${row.earned}</td>
      <td class="text-right text-slate-500">${row.required}</td>
      <td class="text-right ${row.done ? 'badge-complete' : 'text-slate-600'}">
        ${row.done ? '0 ✅' : row.remaining}
      </td>
    </tr>
  `).join('');
}

/* ── Program Stats ── */
function renderProgramStats() {
  const stats = [
    { label: '자기주도성', value: '10건 / 22시간' },
    { label: '시민의식', value: '0건' },
    { label: '융합', value: '3건 / 41시간' },
    { label: '기업가정신', value: '3건 / 6시간' },
    { label: '국제성', value: '0건' },
  ];

  document.getElementById('program-stats').innerHTML = stats.map(s => `
    <div class="program-stat">
      <p class="text-xs text-slate-500 mb-1">${s.label}</p>
      <p class="count text-sm">${s.value}</p>
    </div>
  `).join('');
}

/* ── Radar Chart ── */
function initRadarChart() {
  const ctx = document.getElementById('radarChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['자기주도성', '시민의식', '융합', '기업가정신', '국제성'],
      datasets: [{
        label: '참여 현황',
        data: [10, 0, 3, 3, 0],
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        borderColor: 'rgba(79, 70, 229, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: '#4f46e5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4f46e5',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 12,
          ticks: { stepSize: 3, display: false },
          grid: { color: 'rgba(0,0,0,0.06)' },
          angleLines: { color: 'rgba(0,0,0,0.06)' },
          pointLabels: {
            font: { size: 12, family: 'Noto Sans KR' },
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

/* ── Activity Details ── */
function renderActivityDetails() {
  const activities = [
    {
      title: '청소년자원봉사페스티벌 부스 스태프',
      org: 'RCY 동아리',
      type: '오프라인',
      date: '2026.05.16 10:00 ~ 16:00',
    },
    {
      title: '서울학교 플로깅 활동',
      org: 'RCY 동아리',
      type: '오프라인',
      date: '2026.03.21 14:30 ~ 17:00',
    },
    {
      title: 'OPEN 문화교류 서울 투어 가이드',
      org: '유스굿윌가이드 (YGG)',
      type: '가이드',
      date: '2026.03.14 09:00 ~ 17:00',
    },
    {
      title: '유스굿윌가이드 오리엔테이션',
      org: '유스굿윌가이드 (YGG)',
      type: '가이드',
      date: '2026.03.07 10:00 ~ 17:00',
    },
    {
      title: '중도입국청소년 체육교육 봉사',
      org: 'RCY 동아리',
      type: '청소년',
      date: '2025.11.08 13:00 ~ 17:00',
    },
    {
      title: '제빵봉사활동',
      org: 'RCY 동아리',
      type: '봉사',
      date: '2025.11.01 09:30 ~ 12:30',
    },
  ];

  document.getElementById('activity-details').innerHTML = activities.map(a => `
    <div class="activity-card fade-in-up">
      <span class="activity-status">완료</span>
      <h4 class="font-semibold text-slate-800 mt-2 text-sm leading-snug">${a.title}</h4>
      <p class="text-xs text-primary-600 font-medium mt-2">${a.org}</p>
      <div class="mt-3 space-y-1 text-xs text-slate-500">
        <p>유형: ${a.type}</p>
        <p>${a.date}</p>
      </div>
    </div>
  `).join('');

}

/* ── Skills ── */
function renderSkills() {
  const skills = [
    {
      icon: '🤖',
      name: 'ChatGPT',
      level: 9,
      fields: '문서 작성 · 자료 조사 · 학습 · 아이디어 발상',
      desc: '생성형 AI를 활용하여 문서 작성, 학습 정리, 자료 조사 및 발표 준비를 효율적으로 수행합니다.',
      experiences: ['실험보고서 및 과제 작성', '포트폴리오 제작', '발표 대본 및 자기소개서 작성', '강의자료 요약 및 시험 대비', 'Python 학습 및 코드 보조'],
    },
    {
      icon: '✨',
      name: 'Google Gemini',
      level: 8,
      fields: '자료 조사 · 정보 분석 · 문서 작성',
      experiences: ['자료 리서치', 'AI 결과 비교 및 교차 검증', '발표자료 조사'],
    },
    {
      icon: '📄',
      name: 'Google Docs',
      level: 8,
      fields: '문서 작성 · 협업 · 보고서',
      experiences: ['공동 보고서 작성', '팀 프로젝트 협업', '실시간 문서 편집'],
    },
    {
      icon: '☁️',
      name: 'Google Drive',
      level: 8,
      fields: '파일 관리 · 자료 공유 · 협업',
      experiences: ['프로젝트 자료 관리', '팀원 간 파일 공유', '문서 버전 관리'],
    },
    {
      icon: '🎨',
      name: 'Canva',
      level: 8,
      fields: '프레젠테이션 · 디자인 · 포트폴리오',
      experiences: ['발표자료 제작', '포트폴리오 디자인', '카드뉴스 및 이미지 제작'],
    },
  ];

  document.getElementById('skills-grid').innerHTML = skills.map(s => `
    <div class="skill-card fade-in-up">
      <div class="flex items-start justify-between gap-4 mb-4">
        <h3 class="font-semibold text-slate-800 text-lg">${s.icon} ${s.name} <span class="text-primary-600">| Lv.${s.level}</span></h3>
        <div class="skill-level shrink-0">
          ${Array.from({ length: 10 }, (_, i) =>
            `<span class="skill-dot ${i < s.level ? 'filled' : ''}"></span>`
          ).join('')}
        </div>
      </div>
      <div class="skill-section">
        <p class="skill-label">활용 분야</p>
        <p class="text-sm text-primary-600 font-medium">${s.fields}</p>
      </div>
      ${s.desc ? `
      <div class="skill-section">
        <p class="skill-label">소개</p>
        <p class="text-sm text-slate-600 leading-relaxed">${s.desc}</p>
      </div>` : ''}
      <div class="skill-section">
        <p class="skill-label">활용 경험</p>
        <ul class="skill-list">
          ${s.experiences.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ── Goals ── */
function renderGoals() {
  const goals = [
    {
      icon: '📚',
      title: '학업',
      color: 'blue',
      items: ['전공 GPA 4.0 이상 유지', 'Python 활용 능력 향상', '공학 기초(수학·물리) 탄탄하게 다지기'],
    },
    {
      icon: '🤖',
      title: 'AI & 디지털 역량',
      color: 'purple',
      items: ['생성형 AI를 학업과 연구에 적극 활용', 'Notion을 활용한 지식관리 시스템 구축', '업무 자동화 도구(n8n) 학습'],
    },
    {
      icon: '🌱',
      title: '성장',
      color: 'emerald',
      items: ['공모전 및 프로젝트 2회 이상 참여', '교내외 비교과 활동 꾸준히 참여', '연구실 인턴 기회 도전'],
    },
    {
      icon: '🎯',
      title: '진로',
      color: 'amber',
      items: ['신소재 연구 분야 탐색', '반도체·배터리 소재 분야 공부', '연구개발(R&D) 직무 준비'],
    },
    {
      icon: '🌍',
      title: '자기계발',
      color: 'rose',
      items: ['영어 회화 실력 향상', '독서 월 2권 이상', '꾸준한 운동과 건강관리'],
    },
  ];

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    amber: 'bg-amber-100 text-amber-600',
    rose: 'bg-rose-100 text-rose-600',
  };

  document.getElementById('goals-grid').innerHTML = goals.map(g => `
    <div class="goal-card fade-in-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="icon-box ${colorMap[g.color]}">${g.icon}</div>
        <h3 class="font-semibold text-slate-800">${g.title}</h3>
      </div>
      <ul>
        ${g.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* ── Values ── */
function renderValues() {
  const values = [
    {
      icon: '📖',
      title: '배우는 것을 즐깁니다.',
      desc: '새로운 분야를 접하는 것을 두려워하지 않습니다.',
      points: ['모르는 개념은 끝까지 이해하려고 노력합니다.', 'AI와 다양한 자료를 활용해 스스로 학습합니다.', '배운 내용을 정리하며 제 것으로 만드는 습관을 갖고 있습니다.'],
    },
    {
      icon: '🌱',
      title: '꾸준함을 가장 큰 경쟁력으로 생각합니다.',
      desc: '특별한 재능보다 꾸준함이 더 큰 결과를 만든다고 믿습니다.',
      points: ['작은 목표부터 차근차근 실천합니다.', '계획을 세우고 끝까지 실행하려고 노력합니다.', '실패도 성장 과정의 일부라고 생각합니다.'],
    },
    {
      icon: '🤝',
      title: '함께 성장하는 사람을 지향합니다.',
      desc: '좋은 결과는 혼자보다 함께 만들 때 더 커진다고 생각합니다.',
      points: ['팀원의 의견을 존중합니다.', '맡은 역할은 끝까지 책임집니다.', '협업 과정에서 배우는 것을 중요하게 생각합니다.'],
    },
    {
      icon: '💡',
      title: '문제를 해결하는 과정을 즐깁니다.',
      desc: '정답만 찾기보다 해결 과정을 이해하려고 합니다.',
      points: ['다양한 방법을 시도합니다.', 'AI와 여러 도구를 적극 활용합니다.', '더 효율적인 방법을 찾는 것을 좋아합니다.'],
    },
    {
      icon: '⚖️',
      title: '균형 있는 성장을 추구합니다.',
      desc: '학업뿐 아니라 사람과 경험도 함께 성장의 일부라고 생각합니다.',
      points: ['건강한 생활습관 유지', '비교과 활동 적극 참여', '새로운 경험을 두려워하지 않기'],
    },
  ];

  document.getElementById('values-grid').innerHTML = values.map(v => `
    <div class="value-card fade-in-up">
      <div class="text-2xl mb-3">${v.icon}</div>
      <h3 class="font-semibold text-white mb-2">${v.title}</h3>
      <p class="text-sm text-slate-400 mb-3">${v.desc}</p>
      <ul class="space-y-1.5">
        ${v.points.map(p => `<li class="text-xs text-slate-400 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">${p}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
