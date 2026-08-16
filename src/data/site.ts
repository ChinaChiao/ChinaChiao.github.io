import type { Contact, Education, SignalItem } from '../types'

export const site = {
  nameZh: '场域',
  nameEn: 'FIELD',
  issue: 'ISSUE 03',
  year: '2026',
  role: 'AI-native Product Builder',
  educationShort: 'NTU Cybersecurity',
  heroZh: '我为 AI 如何改变日常生活，做出小而真实的产品实验。',
  heroEn:
    'I build small, real product experiments for how AI changes everyday life.',
  intro:
    '从 2024 年起，我持续用 AI 做交互原型、数据分析和应用落地。在意的不是写代码这件事，而是把生活里的具体问题做成可体验的实验，看 AI 如何从助手一路长进业务与日常。',
  thesis:
    '先锋审美，喜欢试新技术，习惯把生活观察做成产品实验的 AI-native 创作者。',
  contact: {
    email: '',
    github: '',
    x: '',
    linkedin: '',
    website: '',
  } satisfies Contact,
  education: [
    {
      school: '南洋理工大学',
      schoolEn: 'Nanyang Technological University',
      program: '网络安全硕士',
      programEn: 'MSc Cybersecurity',
      place: 'Singapore',
    },
    {
      school: '北京工业大学 × 都柏林大学',
      schoolEn: 'BJUT × University College Dublin',
      program: '软件工程本科',
      programEn: 'BEng Software Engineering',
      place: 'Beijing / Dublin',
    },
  ] satisfies Education[],
  focus: [
    'AI 如何改写任务起点、决策与日常基础设施',
    'Vibe Coding 之后，判断力如何成为产品能力',
    '游戏反馈、内容循环与安全工程的交叉借用',
  ],
  domains: [
    { name: 'AI 伴侣', note: '观察案例，不是全部故事' },
    { name: 'AI 数据分析', note: '问题到结论的距离' },
    { name: '游戏开发', note: '规则、反馈、沉浸' },
    { name: '自媒体运营', note: '包装与传播循环' },
    { name: '网络安全', note: '工程底座，不单独包装成项目' },
  ],
  signals: [
    {
      key: '01',
      label: 'Identity',
      value: 'AI-native Product Builder',
    },
    {
      key: '02',
      label: 'Education',
      value: 'NTU Cybersecurity · BJUT × UCD Software Engineering',
    },
    {
      key: '03',
      label: 'Since',
      value: '2024 — 持续用 AI 做可体验的产品实验',
    },
    {
      key: '04',
      label: 'Now watching',
      value: 'Assistant → Everyday Infrastructure',
    },
  ] satisfies SignalItem[],
} as const

export const contactMeta: Record<
  keyof Contact,
  { label: string; href: (value: string) => string }
> = {
  email: { label: 'Email', href: (v) => `mailto:${v}` },
  github: { label: 'GitHub', href: (v) => v },
  x: { label: 'X', href: (v) => v },
  linkedin: { label: 'LinkedIn', href: (v) => v },
  website: { label: 'Web', href: (v) => v },
}

export function visibleContacts(contact: Contact) {
  return (Object.keys(contactMeta) as (keyof Contact)[])
    .map((key) => {
      const value = contact[key]?.trim()
      if (!value) return null
      return {
        key,
        label: contactMeta[key].label,
        href: contactMeta[key].href(value),
        value,
      }
    })
    .filter((item) => item !== null)
}
