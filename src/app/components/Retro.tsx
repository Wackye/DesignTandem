import { useState } from "react";
import { ImpactChart, RoleChart } from "./RetroCharts";
import TopicAnalyzer from "./TopicAnalyzer";
import image_835020749544e2a154d45785b20d3e685199a02d from "../../assets/835020749544e2a154d45785b20d3e685199a02d.png";

const insightsData = [
  {
    id: 1,
    type: "peak",
    title: "字串平台導入復盤",
    context: "面對系統導入失敗的自我懷疑。",
    action: "學會「點到為止」。",
    mindset: "看清組織架構限制，不再全盤負擔責任。",
    color: "border-l-4 border-[#6B8E99]",
  },
  {
    id: 2,
    type: "peak",
    title: "Future School 計畫",
    context: "計畫暫停後的預期落差。",
    action: "轉換視角至學習區。",
    mindset: "執行的機會本身就是收穫，放下表現壓力。",
    color: "border-l-4 border-[#6B8E99]",
  },
  {
    id: 3,
    type: "peak",
    title: "AI 工作流應用",
    context: "Golden 分享的 AI 履歷分析與 NotebookLM。",
    action: "獲取具體 Use Case 啟發。",
    mindset: "擴展思維邊界，看見工具轉化的可能性。",
    color: "border-l-4 border-[#6B8E99]",
  },
  {
    id: 4,
    type: "friction",
    title: "破碎化的分享",
    context: "內容流於展覽資訊或 Small Talk。",
    action: "未來需更有意識規劃。",
    mindset: "瑣碎內容容易讓對話失焦，應聚焦核心議題。",
    color: "border-l-4 border-[#D4A373]",
  },
  {
    id: 5,
    type: "friction",
    title: "社交弱連結處理",
    context: "Golden 建議的社交方式難以立即執行。",
    action: "重新評估資源分配。",
    mindset: "雖未完全實行，但已開始潛移默化地影響行為決策。",
    color: "border-l-4 border-[#D4A373]",
  },
];

type FilterType = "all" | "peak" | "friction";

interface RetroProps {
  isValtinaMode?: boolean;
}

export default function Retro({ isValtinaMode = false }: RetroProps) {
  const menteeName = isValtinaMode ? "Valtina" : "Mentee";
  const mentorName = "Golden";
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredInsights =
    filter === "all"
      ? insightsData
      : insightsData.filter((i) => i.type === filter);

  return (
    <div
      className="antialiased min-h-screen flex flex-col"
      style={{
        fontFamily: "'Noto Sans TC', sans-serif",
        backgroundColor: "#F9F7F2",
        color: "#3D3D3D",
      }}
    >
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="overview"
          className="py-12 sm:py-20 px-4"
          style={{ backgroundColor: "#F5F2EB" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wider mb-4"
              style={{
                backgroundColor: "#E0E7E9",
                color: "#4A6fa5",
              }}
            >
              成長加速回饋計畫
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              不僅是導師，更是一面「鏡子」
            </h1>

            {isValtinaMode && (
              <div className="w-full max-w-[700px] mx-auto shadow-md rounded-xl overflow-hidden my-8">
                <img
                  src={
                    image_835020749544e2a154d45785b20d3e685199a02d
                  }
                  alt="設計協力車 2025"
                  className="w-full h-auto object-contain rounded-[12px]"
                />
              </div>
            )}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              在這半年的協作中，這不只是一個單向的指導，而是一個即時反映現狀、盲點與機會的過程。
              <br />
              <span
                className="italic font-semibold"
                style={{ color: "#6B8E99" }}
              >
                "跟你聊完,有一種情緒被釋放，或是覺得變聰明了的感覺。"
              </span>
            </p>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#6B8E99" }}
                >
                  9.0
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  心理狀態改變
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#D4A373" }}
                >
                  8.5
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  信任程度
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#6B8E99" }}
                >
                  8.0
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  關係連結
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#D4A373" }}
                >
                  14+
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  對話次數
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topic Analyzer Section */}
        <TopicAnalyzer />

        {/* Impact Dashboard */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            回顧核心指標
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            我們針對這段旅程的五個維度進行了評分。雖然外部環境摩擦力大影響了工作表現的直接轉化，但在心理韌性與知識建構上獲得了顯著的成長。
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  綜合影響力評估
                </h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span
                      className="w-2 h-2 mt-1.5 rounded-full mr-2 flex-shrink-0"
                      style={{ backgroundColor: "#6B8E99" }}
                    />
                    <span>
                      <strong>心理狀態 (9/10):</strong>{" "}
                      焦慮感顯著降低，學會了「點到為止」的節制感。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="w-2 h-2 mt-1.5 rounded-full mr-2 flex-shrink-0"
                      style={{ backgroundColor: "#D4A373" }}
                    />
                    <span>
                      <strong>知識提升 (8/10):</strong>{" "}
                      獲得新的商業思維框架與 AI 應用啟發。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-gray-400 mr-2 flex-shrink-0" />
                    <span>
                      <strong>工作表現 (6/10):</strong>{" "}
                      受限於組織混亂，直接行動較難，但心態轉向積極學習。
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 md:col-span-2">
                <div className="relative w-full h-[350px] max-h-[400px]">
                  <ImpactChart />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Identity */}
        <section id="roles" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative w-full h-[350px] max-h-[400px]">
                  <RoleChart />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  角色定位：不做共犯，做軍師
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  在互動中， {menteeName} 認為 {mentorName} 的角色最不像「共犯」，而更傾向於「標竿」與「軍師」。這是一種基於不同立場的穩定力量。
                </p>
                <div
                  className="p-5 rounded-xl border-l-4"
                  style={{
                    backgroundColor: "#F5F2EB",
                    borderColor: "#6B8E99",
                  }}
                >
                  <p className="text-sm italic text-gray-700">
                    「因為我們立場不同了，這反而是好事。生活中太多跟我立場一樣（一起抱怨）的人，但你提供了跳脫框架的視角。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Journey */}
        <section
          id="insights"
          className="py-16 max-w-6xl mx-auto px-4"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              體驗復盤：高峰與阻力
            </h2>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 text-sm font-medium transition-all ${filter === "all"
                  ? "border-b-2 font-bold"
                  : "text-gray-500 hover:text-[#6B8E99]"
                  }`}
                style={
                  filter === "all"
                    ? {
                      borderColor: "#6B8E99",
                      color: "#2D4A54",
                    }
                    : {}
                }
              >
                全部
              </button>
              <button
                onClick={() => setFilter("peak")}
                className={`px-4 py-2 text-sm font-medium transition-all ${filter === "peak"
                  ? "border-b-2 font-bold"
                  : "text-gray-500 hover:text-[#6B8E99]"
                  }`}
                style={
                  filter === "peak"
                    ? {
                      borderColor: "#6B8E99",
                      color: "#2D4A54",
                    }
                    : {}
                }
              >
                高峰體驗
              </button>
              <button
                onClick={() => setFilter("friction")}
                className={`px-4 py-2 text-sm font-medium transition-all ${filter === "friction"
                  ? "border-b-2 font-bold"
                  : "text-gray-500 hover:text-[#6B8E99]"
                  }`}
                style={
                  filter === "friction"
                    ? {
                      borderColor: "#6B8E99",
                      color: "#2D4A54",
                    }
                    : {}
                }
              >
                阻力體驗
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((item) => (
              <div
                key={item.id}
                className={`bg-white p-6 rounded-2xl shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${item.color}`}
              >
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {item.type === "peak" ? "High" : "Friction"}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow italic">
                  "{item.context}"
                </p>
                <div className="space-y-3 mt-auto">
                  <div className="text-xs text-gray-400">
                    <strong>行動：</strong> {item.action}
                  </div>
                  <div className="text-xs text-gray-400">
                    <strong>轉念：</strong> {item.mindset}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Tandem 2025 Section */}
        {/* <section
          className="py-20 sm:py-28 px-4"
          style={{
            backgroundColor: "#E8EEEF",
            background:
              "linear-gradient(180deg, #E8EEEF 0%, #D4DFE1 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-5xl font-bold mb-4"
              style={{ color: "#2D4A54" }}
            >
              設計協力車 2025
            </h2>

          </div>
        </section> */}
      </main>

      <footer
        className="py-8 text-center text-gray-500 text-xs"
        style={{ backgroundColor: "#1f353d" }}
      >
        <p className="text-gray-200">
          &copy; 2025 Design Tandem Project.
        </p>
        <p className="mt-2 text-gray-400">
          by <a href="http://goldentseng.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Golden (http://goldentseng.com/)</a>
        </p>
      </footer>
    </div>
  );
}