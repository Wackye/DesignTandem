import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

interface TopicDetail {
  count: number;
  color: string;
  desc: string;
  items: string[];
}

const topicDataDetails: Record<string, TopicDetail> = {
  '組織策略與權力': {
    count: 4,
    color: '#6B8E99',
    desc: '「不對事實生氣，而是理解事實背後的動力學。」在高度混亂的組織環境中，對話的核心從單純的情緒抒發轉向「結構性拆解」。我們引入了政治學與經濟學的視角，重新審視跨部門協作中的權力失衡、責任與利益的錯配（Accountability Misalignment）。透過將職場互動視為一場複雜的博弈，我們學習如何在高溝通成本的環境下，精確判斷何時應堅持 Credit、何時該戰略性放手，從而降低身處其中的心理摩擦力。',
    items: [
      '250820 - 跨部門溝通成本與共享式領導盤點',
      '250926 - 政治學視角：權力結構與利益錯配分析',
      '251003 - 與新 PM 合作挑戰、刺蝟法則應用',
      '251121 - 組織變動下做事之無力感、商業模式重整'
    ]
  },
  '職涯定位與心理穩定': {
    count: 4,
    color: '#D4A373',
    desc: '「在混亂環境中，建立內在價值的防禦邊界。」當外部評價標準與 R&R（角色與職責）變得模糊時，如何透過自我驗證機制保持穩定是本計畫的關鍵。對話聚焦於如何在「表現區」與「學習區」之間取得動態平衡。我們實踐了「節制感（Moderation）」的概念，學會不再盲目追求 100 分的完美，而是建立心理錨點，將工作環境視為低成本的「實驗場域」，有效避免了因過度輸出而導致的職涯燃盡（Burn-out）。',
    items: [
      '250912 - 職能成熟度：設計師在 AI 時代的價值定位',
      '251031 - 作品集策略、社群情緒價值反思',
      '251114 - 曼陀號心得：對市場價值的危機意識',
      '251128 - 續約兩難：對「優越感陷阱」的警惕'
    ]
  },
  'AI 工具與未來實驗': {
    count: 2,
    color: '#2D4A54',
    desc: '「設計師不再是畫布的奴隸，而是意圖的編排者。」這組對話不只停留在工具的操作層次，而是重新定義 AI 時代下的設計職能。我們探討了如何將重複性的勞動「委派（Delegate）」給 AI，藉此擴張設計師的守備範圍。進一步地，我們開啟了對未來設計樣貌的激盪，例如當 AI Agent 取代人類操作介面時（A2UI），設計師如何轉向「靈魂工程師」的角色，為 AI 的產出注入美學意圖與邏輯約束。',
    items: [
      '250919 - AI 對產品開發團隊角色之泛化影響',
      '251128 - 運用 AI 進行自我探索與職涯定位'
    ]
  },
  '設計實務與研究方法': {
    count: 2,
    color: '#5E7B84',
    desc: '「回歸工藝本質，推動研究的民主化。」即便身處策略層級的討論，專業執行力的磨練仍是設計師的底氣。對話涉及了如何透過純文字編排練習來內化 Layout Sense，以及在大規模組織中維護設計系統與 Icon 管理的高昂成本。我們也探討了「研究民主化」的困境，思考設計師如何從親自下場訪談，轉向擔任「訪談陪跑教練」或「Reviewer」的角色，以應對資源匱乏與時程緊湊的實務挑戰。',
    items: [
      '251015 - Icon 管理經驗、書封排版練習提升 Sense',
      '251111 - 訪談 Pilot Run 經驗、研究流程系統化'
    ]
  },
  '知識內化與框架設計': {
    count: 2,
    color: '#BDC9CD',
    desc: '「意義是在對話中創造，產出是在框架中累積。」這部分的探討旨在提升「思考的投報率」。我們討論如何高效地將 Coffee Chat、講座、書籍的輸入轉化為可隨時調用的結構化資產。透過 Bloom 分類法與 GCAR 敘事框架，我們嘗試建立「設計協力車」專屬的共學模式。目標是將每一次感性的、發散的互動，最終收斂成具備跨情境轉移價值（Transferable）的思維模型與行動策略。',
    items: [
      '250801 - 資訊內化策略、GCAR 專案敘事框架',
      '251205 - 商業創新理論、設計協力車未來框架'
    ]
  }
};

export default function TopicAnalyzer() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('組織策略與權力');

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const dataLabels = Object.keys(topicDataDetails);
    const dataValues = dataLabels.map(label => topicDataDetails[label].count);
    const dataColors = dataLabels.map(label => topicDataDetails[label].color);

    // Helper function to calculate luminance and determine text color
    const getContrastColor = (hexColor: string) => {
      const rgb = parseInt(hexColor.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance > 0.5 ? '#1F2937' : '#FFFFFF';
    };

    chartInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: dataLabels,
        datasets: [{
          data: dataValues,
          backgroundColor: dataColors,
          borderWidth: 4,
          borderColor: '#F9F7F2',
          hoverOffset: 15
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutout: '55%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${context.parsed} 次對話`;
              }
            }
          },
          datalabels: {
            color: (context) => {
              const bgColor = dataColors[context.dataIndex];
              return getContrastColor(bgColor);
            },
            font: {
              size: 18,
              weight: 'bold'
            },
            formatter: (value) => value
          }
        },
        onClick: (event, activeElements) => {
          if (activeElements.length > 0) {
            const index = activeElements[0].index;
            const topicName = dataLabels[index];
            setSelectedTopic(topicName);
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  const detail = topicDataDetails[selectedTopic];

  return (
    <section id="analytics" className="py-16 sm:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            對話主題脈絡
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            14 次深度對話，圍繞著 <strong>五個核心成長軸線</strong>。點擊圖表探索主題細節。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Doughnut Chart + Legend */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 w-full">
              <div className="w-[200px] h-[200px] relative flex-shrink-0">
                <canvas ref={chartRef}></canvas>
              </div>
              
              {/* Legend - Horizontal on mobile, vertical on desktop */}
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                {Object.entries(topicDataDetails).map(([topic, data]) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-left ${
                      selectedTopic === topic 
                        ? 'bg-gray-100' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: data.color }}
                    />
                    <span className="text-sm text-gray-700">{topic}</span>
                    <span className="text-xs text-gray-400 ml-auto">({data.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Detail Box */}
          <div className="lg:col-span-8">
            <div className="transition-opacity duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: detail.color }}
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedTopic}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {detail.desc}
              </p>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  關鍵對話 ({detail.count})
                </p>
                <div className="space-y-3">
                  {detail.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <span className="text-[#6B8E99] font-bold mt-0.5 flex-shrink-0">●</span>
                      <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}