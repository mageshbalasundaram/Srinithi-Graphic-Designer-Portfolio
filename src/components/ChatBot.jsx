import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const PortfolioLink = () => (
  <div className="p-2">
    <a
      href="/portfolio.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 font-bold underline"
    >
      📂 View My Portfolio
    </a>
  </div>
);

const HireLink = () => (
  <div>
    <a
      href="/contact"
      className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700"
    >
      Contact Me
    </a>
  </div>
);

const steps = [
  {
    id: "1",
    message: "👋 Hi! I'm Srinithi, a Graphic Designer. Do you need help with design?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "logo", label: "🎨 Logo Design", trigger: "logo" },
      { value: "branding", label: "📦 Branding", trigger: "branding" },
      { value: "social", label: "📱 Social Media", trigger: "social" },
    ],
  },
  {
    id: "logo",
    message: "Awesome! I specialize in minimal, modern, and creative logo designs. Want to see my portfolio?",
    trigger: "showPortfolio",
  },
  {
    id: "branding",
    message: "Great! I create complete branding packages including logo, colors, and guidelines. Want to see samples?",
    trigger: "showPortfolio",
  },
  {
    id: "social",
    message: "Perfect! I design engaging social media posts, reels, and campaigns. Want to check my work?",
    trigger: "showPortfolio",
  },
  {
    id: "showPortfolio",
    options: [
      { value: "yes", label: "✅ Yes, show me!", trigger: "portfolioLink" },
      { value: "no", label: "❌ Not now", trigger: "end" },
    ],
  },
  { id: "portfolioLink", component: <PortfolioLink />, asMessage: true, trigger: "end" },
  { id: "end", message: "✨ Thanks for chatting! Would you like to hire me?", trigger: "cta" },
  {
    id: "cta",
    options: [
      { value: "hire", label: "🚀 Hire Me", trigger: "hireLink" },
      { value: "later", label: "⏳ Maybe Later", end: true },
    ],
  },
  { id: "hireLink", component: <HireLink />, asMessage: true, end: true },
];

const theme = {
  background: "#fff",
  fontFamily: "sans-serif",
  headerBgColor: "#db2777",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#db2777",
  botFontColor: "#fff",
  userBubbleColor: "#f472b6",
  userFontColor: "#fff",
};

export default function DesignerChatBot() {
  return (
    <div className="max-w-md mx-auto my-10 shadow-xl rounded-xl overflow-hidden">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          headerTitle="💬 Srinithi | Graphic Designer"
          floating={false}
        />
      </ThemeProvider>
    </div>
  );
}
