export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1a2e4a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            연락처
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-12">
            IT 유지보수 도입을 검토 중이시라면<br />언제든지 문의해 주세요
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {/* Email */}
            <a
              href="mailto:sale1@bluemine.co.kr"
              className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 text-left transition-colors duration-200 group"
            >
              <div className="w-10 h-10 bg-[#2563eb]/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">이메일</div>
                <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                  sale1@bluemine.co.kr
                </div>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <div className="w-10 h-10 bg-[#2563eb]/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">주소</div>
                <div className="text-white font-medium text-sm">
                  서울시 강남구 선릉로89길 13
                </div>
              </div>
            </div>
          </div>

          <a
            href="mailto:sale1@bluemine.co.kr"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            이메일 문의하기
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-16 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/30 text-xs">
          © 2025 주식회사 블루마인 / BLUEMINE. All rights reserved.
        </div>
      </div>
    </section>
  );
}
