import { useState } from "react";
import { VisionChart } from "./components/VisionChart";
import Retro from "./components/Retro";

const prompts = {
  senior:
    "「假設未來五年的 Senior 設計師不需畫圖，他們的主要工作是『引導 AI 代理人進行多維度的決策實驗』。這對現有的職涯晉升標準會造成什麼衝擊？」",
  ai: "「如果 AI 時代下的設計不再有『固定介面』，而是根據使用者的當下情緒即時生成。設計師該如何設計這種『流動的意圖』？」",
  portfolio:
    "「未來的作品集如果是一段『你與 AI 共同解決問題的錄影回放』，面試官會從中尋找什麼樣的獨特信號？」",
};

type TopicType = keyof typeof prompts;
type PageType = "home" | "retro";

export default function App() {
  const [selectedPrompt, setSelectedPrompt] = useState<string>(
    "點擊下方按鈕，為你們的對話實驗選擇一個起點...",
  );
  const [activeTab, setActiveTab] = useState<TopicType | null>(
    null,
  );
  const [showRing, setShowRing] = useState(false);
  const [currentPage, setCurrentPage] =
    useState<PageType>("retro");

  const generatePrompt = (type: TopicType) => {
    setSelectedPrompt(prompts[type]);
    setActiveTab(type);
    setShowRing(true);
    setTimeout(() => setShowRing(false), 500);
  };

  const showTopic = (type: TopicType) => {
    generatePrompt(type);
    setTimeout(() => {
      const element = document.getElementById("prompt-display");
      if (element) {
        const top = element.offsetTop - 100;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render Retro page if selected
  if (currentPage === "retro") {
    return (
      <div>
        {/* Navigation for Retro page */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 w-full">
              {/* Desktop Title */}
              <div className="flex items-center">
                <button
                  onClick={() => navigateToPage("home")}
                  className="text-xl font-bold text-gray-800 tracking-wide hover:text-[#6B8E99] transition-colors"
                >
                  設計協力車{" "}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    Retro 2025
                  </span>
                </button>
              </div>

              {/* Desktop Nav */}
              <div className="flex items-center space-x-8 text-sm font-medium text-gray-600">
                <a
                  href="#overview"
                  className="hidden sm:block hover:text-[#6B8E99] transition-colors"
                >
                  總覽
                </a>
                <a
                  href="#roles"
                  className="hidden sm:block hover:text-[#6B8E99] transition-colors"
                >
                  角色定位
                </a>
                <a
                  href="#insights"
                  className="hidden sm:block hover:text-[#6B8E99] transition-colors"
                >
                  體驗回顧
                </a>
                <a
                  href="#value"
                  className="hidden sm:block hover:text-[#6B8E99] transition-colors"
                >
                  價值與未來
                </a>
                <button
                  onClick={() => navigateToPage("home")}
                  className="px-6 py-2 text-sm rounded-full border transition-all font-bold border-gray-200 bg-[#E0E7E9] hover:border-[#6B8E99] hover:bg-[#6B8E99] hover:text-white"
                >
                  未來實驗室
                </button>
              </div>
            </div>
          </div>
        </nav>
        <Retro isValtinaMode={checkValtinaMode()} />
      </div>
    );
  }

  // Home page
  return (
    <div
      className="antialiased"
      style={{
        fontFamily: "'Noto Sans TC', sans-serif",
        backgroundColor: "#F9F9F7",
        color: "#1A2B34",
      }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold tracking-tight">
              設計協力車{" "}
              <span style={{ color: "#E1B382" }}>
                實驗室 2.0
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-8 text-sm font-bold text-gray-600">
            <a
              href="#manifesto"
              className="hidden sm:block hover:text-gray-800 transition-colors"
            >
              實驗宣言
            </a>
            <a
              href="#sandbox"
              className="hidden sm:block hover:text-gray-800 transition-colors"
            >
              未來沙盒
            </a>
            <a
              href="#engine"
              className="hidden sm:block hover:text-gray-800 transition-colors"
            >
              對話引擎
            </a>
            <button
              onClick={() => navigateToPage("retro")}
              className="px-6 py-2 text-sm rounded-full font-bold transition-all bg-[#F6E0C9] hover:border-[#6B8E99] hover:bg-[#6B8E99] hover:text-white"
            >
              成長回顧
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero: The Manifesto */}
        <section id="manifesto" className="mb-24 text-center">
          <div
            className="inline-block px-4 py-1 bg-[#1A2B34] text-white font-bold rounded-full mb-6 tracking-[0.2em] uppercase"
            style={{ fontSize: "10px" }}
          >
            The Storytelling Experiment
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
            意義，
            <br />
            是在對話中創造的。
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            這是一個基於對話的設計實驗。我們不預設答案，而是透過激盪去想像：
            <br />
            <span className="text-[#1A2B34] font-medium italic">
              「從設計的角度看，未來的 XXX 應該長什麼樣子？」
            </span>
          </p>
        </section>

        {/* Future Sandbox: The 4 Topics */}
        <section id="sandbox" className="py-16 mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">
              未來沙盒 (Future Sandbox)
            </h2>
            <p className="text-sm text-gray-400">
              點擊探索議題的激盪方向
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Topic 1 */}
            <div
              className="glass-panel p-8 cursor-pointer group transition-all duration-[400ms]"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(26, 43, 52, 0.05)",
                borderRadius: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px -12px rgba(26, 43, 52, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
              onClick={() => showTopic("senior")}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">🎓</span>
                <span
                  className="font-bold text-[#E1B382] tracking-widest uppercase"
                  style={{ fontSize: "10px" }}
                >
                  Target 01
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#E1B382] transition-colors">
                未來的 Senior 是什麼樣的？
              </h3>
              <p
                className="text-gray-500 leading-relaxed mb-6"
                style={{ fontSize: "14px" }}
              >
                當技術門檻降低，資深者的價值在於「決策品質」還是「知識編排」？探討從執行者轉向「架構師」的軌跡。
              </p>
              <div
                className="flex items-center space-x-2 font-bold text-gray-400"
                style={{ fontSize: "12px" }}
              >
                <span>#角色重定義</span>
                <span>#策略思考</span>
                <span>#經驗資產化</span>
              </div>
            </div>

            {/* Topic 2 */}
            <div
              className="glass-panel p-8 cursor-pointer group transition-all duration-[400ms]"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(26, 43, 52, 0.05)",
                borderRadius: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px -12px rgba(26, 43, 52, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
              onClick={() => showTopic("ai")}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">🤖</span>
                <span
                  className="font-bold text-[#E1B382] tracking-widest uppercase"
                  style={{ fontSize: "10px" }}
                >
                  Target 02
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#E1B382] transition-colors">
                AI 時代下的設計？
              </h3>
              <p
                className="text-gray-500 leading-relaxed mb-6"
                style={{ fontSize: "14px" }}
              >
                設計不再是畫布上的像素，而是「意圖」的傳達。探討人機共生的工作流，以及設計師如何成為
                AI 的「靈魂工程師」。
              </p>
              <div
                className="flex items-center space-x-2 font-bold text-gray-400"
                style={{ fontSize: "12px" }}
              >
                <span>#意圖驅動</span>
                <span>#人機共振</span>
                <span>#設計系統2.0</span>
              </div>
            </div>

            {/* Topic 3 */}
            <div
              className="glass-panel p-8 cursor-pointer group transition-all duration-[400ms]"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(26, 43, 52, 0.05)",
                borderRadius: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px -12px rgba(26, 43, 52, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
              onClick={() => showTopic("portfolio")}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">📂</span>
                <span
                  className="font-bold text-[#E1B382] tracking-widest uppercase"
                  style={{ fontSize: "10px" }}
                >
                  Target 03
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#E1B382] transition-colors">
                作品集會長什麼樣？
              </h3>
              <p
                className="text-gray-500 leading-relaxed mb-6"
                style={{ fontSize: "14px" }}
              >
                捨棄靜態的 Case
                Study。未來的作品集是否是一套「可互動的思考模型」？展示你的「推理過程」而非最後的
                UI。
              </p>
              <div
                className="flex items-center space-x-2 font-bold text-gray-400"
                style={{ fontSize: "12px" }}
              >
                <span>#動態推演</span>
                <span>#思考透明化</span>
                <span>#互動式自傳</span>
              </div>
            </div>

            {/* Topic 4 */}
            <div
              className="glass-panel p-8 cursor-pointer group transition-all duration-[400ms]"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(26, 43, 52, 0.05)",
                borderRadius: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px -12px rgba(26, 43, 52, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">🛰️</span>
                <span
                  className="font-bold text-[#E1B382] tracking-widest uppercase"
                  style={{ fontSize: "10px" }}
                >
                  Target 04
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#E1B382] transition-colors">
                Generative AI 是什麼樣的特定樣貌？
              </h3>
              <p
                className="text-gray-500 leading-relaxed mb-6"
                style={{ fontSize: "14px" }}
              >
                當 Agent 代替人類操作
                UI。探討「非人類使用者」的界面設計，以及如何建立一套讓
                AI 能理解且安全操作的語言。
              </p>
              <div
                className="flex items-center space-x-2 font-bold text-gray-400"
                style={{ fontSize: "12px" }}
              >
                <span>#AgenticUI</span>
                <span>#語義介面</span>
                <span>#未來交互機制</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Engine: How it works */}
        <section
          id="engine"
          className="py-20 bg-[#1A2B34] text-white px-10 mb-20"
          style={{ borderRadius: "3rem" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#E1B382]">
                對話引擎：說故事的流程
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                我們運用設計思考的能力，激盪出特定的未來樣貌。這不是預測，而是透過「對話」進行的一次性「意義建構」。
              </p>

              <div className="space-y-8 relative">
                <div
                  className="relative pl-6"
                  style={{
                    borderLeft: "2px dashed #E1B382",
                    marginLeft: "0.75rem",
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      left: "-0.45rem",
                      width: "0.8rem",
                      height: "0.8rem",
                      background: "#E1B382",
                      borderRadius: "50%",
                      top: 0,
                    }}
                  />
                  <h5 className="font-bold text-lg mb-1">
                    Step 01：提出命題 (Prompting)
                  </h5>
                  <p
                    className="text-gray-500 italic"
                    style={{ fontSize: "12px" }}
                  >
                    「假設 2030
                    年作品集不再需要網站，那會是什麼？」
                  </p>
                </div>
                <div
                  className="relative pl-6"
                  style={{
                    borderLeft: "2px dashed #E1B382",
                    marginLeft: "0.75rem",
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      left: "-0.45rem",
                      width: "0.8rem",
                      height: "0.8rem",
                      background: "#E1B382",
                      borderRadius: "50%",
                      top: 0,
                    }}
                  />
                  <h5 className="font-bold text-lg mb-1">
                    Step 02：對話激盪 (Resonance)
                  </h5>
                  <p
                    className="text-gray-500 italic"
                    style={{ fontSize: "12px" }}
                  >
                    兩人的視角交錯，利用 AI
                    產出極端案例（Extremes）來挑戰邊界。
                  </p>
                </div>
                <div
                  className="relative pl-6"
                  style={{
                    borderLeft: "2px dashed #E1B382",
                    marginLeft: "0.75rem",
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      left: "-0.45rem",
                      width: "0.8rem",
                      height: "0.8rem",
                      background: "#E1B382",
                      borderRadius: "50%",
                      top: 0,
                    }}
                  />
                  <h5 className="font-bold text-lg mb-1">
                    Step 03：意義收斂 (Synthesis)
                  </h5>
                  <p
                    className="text-gray-500 italic"
                    style={{ fontSize: "12px" }}
                  >
                    在對話中創造出的「新詞彙」或「新模型」，即是實驗的產出。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3
                className="uppercase tracking-widest text-gray-500 mb-6 font-bold"
                style={{ fontSize: "14px" }}
              >
                實驗深度觀測
              </h3>
              <div
                className="w-full"
                style={{ height: "300px" }}
              >
                <VisionChart />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive AI Prompt Generator */}
        <section className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-8">
            啟動下次對話的「種子」
          </h2>
          <div
            id="prompt-display"
            className={`bg-white p-10 rounded-3xl shadow-sm border border-gray-100 max-w-3xl mx-auto transition-all ${showRing ? "ring-2 ring-[#E1B382] ring-opacity-50" : ""}`}
          >
            <p className="text-lg text-gray-600 italic">
              {selectedPrompt}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => generatePrompt("senior")}
                className={`px-6 py-2 rounded-full border transition-all font-bold ${activeTab === "senior" ? "bg-[#1A2B34] text-white" : "border-gray-200 hover:border-[#1A2B34]"}`}
                style={{ fontSize: "12px" }}
              >
                Future Senior
              </button>
              <button
                onClick={() => generatePrompt("ai")}
                className={`px-6 py-2 rounded-full border transition-all font-bold ${activeTab === "ai" ? "bg-[#1A2B34] text-white" : "border-gray-200 hover:border-[#1A2B34]"}`}
                style={{ fontSize: "12px" }}
              >
                AI Design
              </button>
              <button
                onClick={() => generatePrompt("portfolio")}
                className={`px-6 py-2 rounded-full border transition-all font-bold ${activeTab === "portfolio" ? "bg-[#1A2B34] text-white" : "border-gray-200 hover:border-[#1A2B34]"}`}
                style={{ fontSize: "12px" }}
              >
                Portfolio
              </button>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-gray-50 py-16 text-center text-gray-400"
        style={{ fontSize: "12px" }}
      >
        <p className="mb-4 tracking-widest uppercase font-bold text-gray-300">
          Future Narrative Lab | Prototype 01
        </p>
        <p className="max-w-xl mx-auto px-6 italic">
          「對話不是為了達成共識，而是為了看見更多的可能。」
        </p>
        <p className="mt-4">
          by{" "}
          <a
            href="http://goldentseng.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors underline decoration-dotted underline-offset-4"
          >
            Golden (http://goldentseng.com/)
          </a>
        </p>
      </footer>
    </div>
  );
}

function checkValtinaMode() {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  return (
    path.includes("valtina") ||
    hash.includes("valtina") ||
    search.includes("valtina")
  );
}