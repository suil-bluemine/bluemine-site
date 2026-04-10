const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '능동적 대응',
    desc: '장애 발생 시 즉시 지원하며, 최신 IT 트렌드를 선제적으로 제안합니다. 문제가 생기기 전에 먼저 움직입니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: '통합 지원',
    desc: '네트워크 · PC · 서버 · 솔루션 전반을 단일 창구에서 원스톱으로 관리합니다. 여러 업체를 찾을 필요가 없습니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'IT 관리자 역할',
    desc: '단순 기술지원이 아닌, 회사 내 IT 관리자로서 책임있는 업무를 수행합니다. 진짜 파트너가 됩니다.',
  },
];

export default function WhyBluemine() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#2563eb] font-semibold text-sm uppercase tracking-widest mb-2">Why BLUEMINE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2e4a]">
            왜 블루마인인가
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-[#f0f4ff] text-[#2563eb] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-200">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a2e4a] mb-3">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
