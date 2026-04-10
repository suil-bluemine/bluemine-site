const stats = [
  { value: '2012년', label: '설립' },
  { value: '13년', label: '경력' },
  { value: '11개+', label: '관리 고객사' },
  { value: 'Microsoft', label: '365 파트너' },
];

export default function Stats() {
  return (
    <section className="bg-[#1a2e4a] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
