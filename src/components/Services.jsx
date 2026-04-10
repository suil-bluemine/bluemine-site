import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    badge: '추천',
    title: 'IT 통합 유지보수',
    desc: 'PC·서버·네트워크·보안을 하나의 계약으로 관리합니다. IT 담당자 없는 중소기업을 위한 All-in-One 솔루션.',
    highlight: true,
    items: ['PC 설정 · 보안 관리', '네트워크 · VPN 구성', '자산 · 라이선스 관리', '입퇴사자 지원'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    badge: null,
    title: '클라우드 · 이메일',
    desc: 'Google Workspace와 Microsoft 365 도입, 설정, 관리를 대행합니다. 생산성 향상과 보안을 동시에.',
    highlight: false,
    items: ['Google Workspace', 'Microsoft 365', '계정 · 정책 관리', '마이그레이션 지원'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    badge: null,
    title: '공유폴더 NAS',
    desc: 'Synology · QNAP NAS 구축 및 운영 관리. 사내 파일 공유, 백업, 원격 접근 환경을 구성합니다.',
    highlight: false,
    items: ['Synology · QNAP 구축', '사내 파일 공유', '자동 백업 설정', '원격 접근 구성'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const headerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-14"
        >
          <p className="text-[#2563eb] font-semibold text-sm uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2e4a]">
            기업 IT의 모든 것을 해결합니다
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative rounded-2xl p-8 flex flex-col hover:shadow-xl ${
                svc.highlight
                  ? 'bg-[#1a2e4a] text-white shadow-2xl shadow-[#1a2e4a]/30 ring-2 ring-[#2563eb]'
                  : 'bg-white text-[#1a2e4a] border border-gray-100 shadow-md'
              }`}
            >
              {svc.badge && (
                <span className="absolute -top-3 left-8 bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {svc.badge}
                </span>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                svc.highlight ? 'bg-[#2563eb]/20 text-blue-300' : 'bg-[#f0f4ff] text-[#2563eb]'
              }`}>
                {svc.icon}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${svc.highlight ? 'text-white' : 'text-[#1a2e4a]'}`}>
                {svc.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 flex-grow ${svc.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                {svc.desc}
              </p>

              <ul className="space-y-2">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={svc.highlight ? 'text-white/80' : 'text-gray-600'}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
