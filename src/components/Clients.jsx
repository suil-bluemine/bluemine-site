import { motion } from 'framer-motion';

const industries = [
  { label: '금융 · 투자', icon: '🏦' },
  { label: '외국계 기업', icon: '🌐' },
  { label: '스타트업', icon: '🚀' },
  { label: '전문직', icon: '⚖️' },
  { label: '무역 · 유통', icon: '📦' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const pillVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const headerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <p className="text-[#2563eb] font-semibold text-sm uppercase tracking-widest mb-2">Clients</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2e4a]">
            다양한 업종의 기업이<br />블루마인을 선택합니다
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-4"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.label}
              variants={pillVariant}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 text-[#1a2e4a] font-medium text-sm shadow-sm hover:border-[#2563eb]/40 hover:shadow-md"
            >
              <span className="text-lg">{ind.icon}</span>
              {ind.label}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          설립 이후 13년간 업종을 가리지 않고 기업 IT를 지원해 왔습니다
        </motion.p>
      </div>
    </section>
  );
}
