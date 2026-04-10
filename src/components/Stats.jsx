import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function CountUp({ target, suffix = '', duration = 1.8 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate(v) {
        setDisplay(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const statsData = [
  { numeric: true, target: 2012, suffix: '년', label: '설립' },
  { numeric: true, target: 13, suffix: '년', label: '경력' },
  { numeric: true, target: 11, suffix: '개+', label: '관리 고객사' },
  { numeric: false, value: 'Microsoft', label: '365 파트너' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Stats() {
  return (
    <section className="bg-[#1a2e4a] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10"
        >
          {statsData.map((stat) => (
            <motion.div key={stat.label} variants={item} className="text-center py-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.numeric ? (
                  <CountUp target={stat.target} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
