import type { TimelineStage } from '../types'

export const timeline: TimelineStage[] = [
  {
    id: 'assistant',
    index: '01',
    title: 'Assistant',
    titleEn: '查询与草稿',
    kicker: '任务如何开始',
    body: 'AI 首先改写的不是编码速度，而是一件事如何被启动。问题被丢进对话，第一稿立刻出现。人仍掌握起点，变的是空白页不再吓人，启动成本被压到接近零。',
  },
  {
    id: 'co-creator',
    index: '02',
    title: 'Co-creator',
    titleEn: '共写与筛选',
    kicker: '判断如何形成',
    body: '提示、生成、否定、重写开始叠成同一条工作流。稀缺的不再是产出，而是决定留下什么。判断力变成产品能力：哪些交互是真问题，哪些只是生成物的平滑幻觉。',
  },
  {
    id: 'business',
    index: '03',
    title: 'Business Layer',
    titleEn: '业务被重新铺层',
    kicker: '产品如何被使用',
    body: '内容、客服、分析、定价不再只是部门流水线，而开始共享同一层模型能力。AI 进入组织如何做决策、如何包装服务、如何把一次体验变成可重复的业务。',
  },
  {
    id: 'infra',
    index: '04',
    title: 'Everyday Infrastructure',
    titleEn: '日常被重新铺设',
    kicker: '生活如何被组织',
    body: '日程、消费、学习、陪伴不再等于“打开一个 AI 产品”。模型变成默认层。真正的产品问题变成：当助手住进日常，界面、责任和关系要长成什么形状。',
  },
]
