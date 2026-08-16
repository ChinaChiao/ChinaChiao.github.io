import type { Experiment } from '../types'

export const experiments: Experiment[] = [
  {
    slug: 'ai-companion',
    code: 'EXP.01',
    title: 'AI Companion',
    titleEn: '持续交互、角色感与新型界面',
    summary:
      '当模型不再是一次性问答，而开始以角色感停留数周，界面、记忆与关系会一起变形。这是观察案例，不是全部故事。',
    focus: '陪伴、角色、长时间交互',
    status: '持续观察',
    year: '2024—',
    observations: [
      '对话时长一拉长，用户要的就不再是“更聪明的答案”，而是稳定的角色与可预期的关系节奏。',
      '新型界面不一定是聊天框的美化，而可能是日程、物件、房间或身体感的重新布置。',
      '产品风险在拟人过度：把工具说成伴侣很容易，把责任、退出与边界设计清楚很难。',
    ],
    methodNote:
      '用生活里的陪伴需求做小实验，而不是先画一个超级 Agent 蓝图。安全与边界作为默认工程约束进入每次迭代。',
  },
  {
    slug: 'ai-data-lens',
    code: 'EXP.02',
    title: 'AI Data Lens',
    titleEn: '自然语言如何缩短数据、问题与结论的距离',
    summary:
      '用已经在用的语言提问，让表格、假设和判断之间的往返变短。重点不是自动出图，而是让结论变得可追问。',
    focus: '提问、证据、结论',
    status: '实验中',
    year: '2025—',
    observations: [
      '很多人卡住的不是 SQL，而是不知道下一个该问的问题是什么。',
      '自然语言分析若只给结论，会制造虚假确定；必须让证据路径可回看。',
      '好的数据产品像编辑部：压缩噪声，但保留反驳的入口。',
    ],
    methodNote:
      '先找一份自己真正要做决定的数据，再做透镜。网络安全训练在这里变成对来源、权限与误导的警惕。',
  },
  {
    slug: 'play-systems',
    code: 'EXP.03',
    title: 'Play Systems',
    titleEn: '游戏中的规则、反馈与沉浸机制',
    summary:
      '规则即产品，反馈即文案。沉浸不是特效堆量，而是玩家随时知道自己处在什么因果里。',
    focus: '规则、反馈、沉浸',
    status: '档案 / 进行中',
    year: '2024—',
    observations: [
      '游戏几乎立刻告诉你失败原因。很多产品把失败藏进空状态和下一周的数据回顾。',
      '玩家愿意回来，是因为规则稳定、反馈诚实、成长可感知。',
      '把游戏机制搬进产品时，要借它的清晰，而不是借它的上瘾结构。',
    ],
    methodNote:
      '每次做产品反馈，先问：用户此刻能不能像玩家一样知道“我做对了还是做错了”。',
  },
  {
    slug: 'media-loop',
    code: 'EXP.04',
    title: 'Media Loop',
    titleEn: '内容包装、受众反馈与传播循环',
    summary:
      '包装不是装饰，是一个想法进入别人一周生活的方式。自媒体训练的是压缩、钩子与循环，也提醒产品不要变成只有开头。',
    focus: '包装、反馈、循环',
    status: '持续实践',
    year: '2024—',
    observations: [
      '三秒可读，不只是内容纪律，也是第一屏的产品纪律。',
      '受众反馈是最快的可用性测试，但会把你推向更浅的表达。',
      '好的循环是：表达带来使用，使用修正表达。单向曝光不是产品。',
    ],
    methodNote:
      '用内容验证一句主张是否站得住，再用产品验证这句主张在真实流程里是否还成立。',
  },
]

export function getExperiment(slug: string) {
  return experiments.find((item) => item.slug === slug)
}
