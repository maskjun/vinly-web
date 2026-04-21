const dict = {
  zh: {
    "nav.features": "功能",
    "nav.support": "支持",
    "nav.privacy": "隐私",
    "nav.faq": "FAQ",
    "hero.badge": "黑胶收藏与发现",
    "hero.title": "让每一张唱片，都有被珍藏的方式。",
    "hero.subtitle": "Vinyl Lia 将收藏管理、智能推荐与播放体验融合在一起，帮助你更优雅地建立自己的数字唱片架。",
    "hero.cta.primary": "查看功能",
    "hero.cta.secondary": "联系我们",
    "features.title": "功能介绍",
    "features.collection.title": "收藏管理",
    "features.collection.desc": "清晰呈现唱片库、最近入库与详情信息，收藏状态实时同步。",
    "features.ai.title": "AI 智能推荐",
    "features.ai.desc": "根据你的收藏风格生成荐碟建议，并提供黑胶语境下的听感分析。",
    "features.nowPlaying.title": "沉浸播放体验",
    "features.nowPlaying.desc": "Now Playing 区域支持封面展示与动效，强化听感氛围。",
    "features.stats.title": "统计洞察",
    "features.stats.desc": "从流派、年代与收藏趋势等维度，快速了解你的音乐偏好。",
    "support.title": "支持",
    "support.desc": "如需帮助、功能建议或问题反馈，请通过以下方式联系我们：",
    "support.email": "邮箱",
    "support.response": "响应时间",
    "support.response.value": "通常 1-3 个工作日",
    "privacy.title": "隐私与条款",
    "privacy.desc": "为了提升透明度，我们提供独立的《隐私政策》和《用户协议》页面，便于随时查阅。",
    "privacy.link.policy": "查看隐私政策",
    "privacy.link.terms": "查看用户协议",
    "faq.title": "常见问题",
    "faq.q1": "如何将唱片添加到收藏？",
    "faq.a1": "可通过推荐列表、手动录入或详情页收藏按钮添加到唱片柜。",
    "faq.q2": "AI 推荐如何生成？",
    "faq.a2": "系统会结合你的收藏信息生成推荐结果，并逐步回填更完整的唱片信息。",
    "faq.q3": "可以切换中英文吗？",
    "faq.a3": "支持。在应用 Profile 页可切换界面语言，中英文实时生效。",
    "footer.privacy": "隐私政策",
    "footer.terms": "用户协议"
  },
  en: {
    "nav.features": "Features",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "nav.faq": "FAQ",
    "hero.badge": "Vinyl Lia Collection & Discovery",
    "hero.title": "Give every record a place worth collecting.",
    "hero.subtitle": "Vinyl Lia combines collection management, smart discovery, and immersive playback into one refined record experience.",
    "hero.cta.primary": "Explore Features",
    "hero.cta.secondary": "Contact",
    "features.title": "Features",
    "features.collection.title": "Collection Management",
    "features.collection.desc": "Keep your library, recent additions, and record details in sync across the app.",
    "features.ai.title": "AI Recommendations",
    "features.ai.desc": "Generate personalized picks from your collection profile with vinyl-focused listening insights.",
    "features.nowPlaying.title": "Now Playing Experience",
    "features.nowPlaying.desc": "Cover art visuals and motion cues build a stronger listening atmosphere.",
    "features.stats.title": "Collection Insights",
    "features.stats.desc": "Understand your taste through genre, era, and collection trend analytics.",
    "support.title": "Support",
    "support.desc": "For help, feature requests, or issue reports, contact us through:",
    "support.email": "Email",
    "support.response": "Response Time",
    "support.response.value": "Usually within 1-3 business days",
    "privacy.title": "Privacy & Terms",
    "privacy.desc": "For transparency, we provide dedicated Privacy Policy and Terms pages for quick access.",
    "privacy.link.policy": "View Privacy Policy",
    "privacy.link.terms": "View Terms of Service",
    "faq.title": "FAQ",
    "faq.q1": "How do I add records to my collection?",
    "faq.a1": "You can add records from recommendations, manual entry, or the favorite action in detail pages.",
    "faq.q2": "How are AI recommendations generated?",
    "faq.a2": "Recommendations are generated from your collection profile and progressively enriched with more detailed metadata.",
    "faq.q3": "Can I switch between Chinese and English?",
    "faq.a3": "Yes. Language can be changed in the Profile page and applies in real time.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service"
  }
};

function setLanguage(lang) {
  const pack = dict[lang] || dict.zh;
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) el.textContent = pack[key];
  });

  document.getElementById("lang-zh")?.classList.toggle("active", lang === "zh");
  document.getElementById("lang-en")?.classList.toggle("active", lang === "en");
  localStorage.setItem("vinyl_web_lang", lang);
}

document.getElementById("lang-zh")?.addEventListener("click", () => setLanguage("zh"));
document.getElementById("lang-en")?.addEventListener("click", () => setLanguage("en"));
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

setLanguage(localStorage.getItem("vinyl_web_lang") || "zh");
