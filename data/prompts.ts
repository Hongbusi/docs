import type { Prompt } from '@/types'

export const prompts: Prompt[] = [
  {
    id: '1',
    title: '网站生成提示词',
    description: '用于生成完整HTML网页的详细提示词，包含产品设计、UI设计和前端开发流程',
    content: `请根据我的描述创建一个完整的 HTML 网页。我想生成的网站是：{输入你的网站要求，比如一个B站up主查看后台数据的看板，包含不同类型的数据图表}

## 工作流程

1. 请先作为具有20年经验的，受乔布斯和张小龙夸赞的出色产品经理，穿透用户的需求表述，洞悉他想到以及没想到的可能需求，形成更完成充分的网站设计需求
2. 获取需求后，请作为一个吹毛求疵的在Apple Inc.工作过20年的出色设计师，用你能所想象的最好的设计去实现产品经理的需求，输出详细的前端能轻松理解的需求文档
3. 作为出色的前端工程师，充分思考产品经理和设计师所表达的需求，一步步完整实现需要的所有代码。

## 前端HTML代码要求：

1. 使用现代HTML5结构
2. 通过CDN引入Google Fonts字体
3. 图标使用Font Awesome CDN
4. 响应式设计，适配移动设备
5. 当网站设计需要图片时，可以使用以下可靠的图片源：
  - Unsplash: https://images.unsplash.com/ (例如: https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800)
  - Picsum: https://picsum.photos/ (例如: https://picsum.photos/800/600)
6. 思考这个主体网站best practice所采用的色彩、布局方案，并加以借鉴与设计
7. 选择和网站主题相匹配的字体
8. 使用语义化标签（header/main/footer等）
9. 包含内联CSS样式，使网页美观`,
    tags: ['产品设计', 'UI/UX', 'HTML5'],
    category: 'Web开发',
  },
]
