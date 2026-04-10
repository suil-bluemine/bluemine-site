import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
});

const headlineVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const headlineWords = [
  { text: '중소규모', blue: false },
  { text: '기업의', blue: false },
  { text: 'IT,', blue: false, breakAfter: true },
  { text: '블루마인', blue: true },
  { text: '이', blue: false },
  { text: '책임집니다', blue: false },
];

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mobile: ken-burns image background (hidden on md+) */}
      <div className="hero-bg md:hidden absolute inset-0" />

      {/* Desktop: video background (hidden below md) */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay — darker on mobile for readability */}
      <div className="md:hidden absolute inset-0" style={{ backgroundColor: 'rgba(5, 15, 35, 0.82)' }} />
      <div className="hidden md:block absolute inset-0" style={{ backgroundColor: 'rgba(15, 31, 61, 0.65)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 bg-[#2563eb]/20 border border-[#2563eb]/30 text-blue-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          IT 유지보수 전문 기업 · 2012년 설립
        </motion.div>

        {/* Headline — word by word */}
        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="show"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          {headlineWords.map((w, i) => (
            <span key={i}>
              <motion.span
                variants={wordVariant}
                className="inline-block mr-2"
                style={w.blue ? { color: '#2563eb' } : { color: '#ffffff' }}
              >
                {w.text}
              </motion.span>
              {w.breakAfter && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          variants={fadeUp(1.1)}
          initial="hidden"
          animate="show"
          className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          PC · 서버 · 네트워크 · 클라우드까지,<br className="hidden sm:block" />
          IT 전반을 책임지는 파트너
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp(1.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ y: -3, backgroundColor: '#3b82f6' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-lg text-base shadow-lg shadow-blue-500/25"
          >
            도입 문의하기
          </motion.button>
          <motion.button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-base"
          >
            서비스 보기
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
        <span>스크롤</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
