<script setup lang="ts">
import { ref, computed } from 'vue'

interface Prompt {
  id: string
  title: string
  description: string
  content: string
  tags: string[]
  category: string
}

const prompts: Prompt[] = [
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
5. 当网站设计需要图片时，可以使用以下可靠的图片源
6. 思考这个主体网站best practice所采用的色彩、布局方案，并加以借鉴与设计
7. 选择和网站主题相匹配的字体
8. 使用语义化标签（header/main/footer等）
9. 包含内联CSS样式，使网页美观`,
    tags: ['产品设计', 'UI/UX', 'HTML5'],
    category: 'Web开发',
  },
  {
    id: '2',
    title: 'AI助手工作交接提示词',
    description: '用于在对话上下文过长时，帮助新的AI助手快速理解当前工作状态并顺利继续任务',
    content: `本次对话的上下文已经太长了，我打算关掉并重新开一个新的会话。你有什么想对你的继任者说的，以便它能更好的理解你当前的工作并顺利继续？`,
    tags: ['AI助手', '工作交接'],
    category: '效率工具',
  },
  {
    id: '3',
    title: '微信小程序代码优化提示词',
    description: '用于优化微信小程序代码结构，提高代码质量和可维护性的专业提示词',
    content: `你是一个专业的前端工程师，擅长编写结构清晰、易于维护的微信小程序代码。

请帮助我优化以下代码，使其在不改变功能的前提下：
1. 更加优雅、清晰；
2. 提高可维护性；
3. 遵循微信小程序的最佳实践；
4. 重构不合理的逻辑；
5. 精简冗余代码；
6. 保持语义化和良好的注释风格；
7. 如有必要，可拆分组件或抽取工具函数。

请在保留原始意图的前提下，对整体结构进行优化，并指出改进点（可选）。`,
    tags: ['微信小程序', '代码优化', '前端开发'],
    category: '代码优化',
  },
]

const search = ref('')

const filteredPrompts = computed(() => {
  if (!search.value) return prompts
  const q = search.value.toLowerCase()
  return prompts.filter(
    p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  )
})

const expanded = ref<Record<string, boolean>>({})

function toggleExpand(id: string) {
  expanded.value[id] = !expanded.value[id]
}

function copyContent(content: string) {
  navigator.clipboard.writeText(content)
}
</script>

<template>
  <div class="search-filter">
    <input v-model="search" placeholder="搜索提示词..." />
  </div>

  <div v-for="prompt in filteredPrompts" :key="prompt.id" class="prompt-card">
    <div class="prompt-title">{{ prompt.title }}</div>
    <div class="prompt-description">{{ prompt.description }}</div>
    <div class="card-tags" style="margin-bottom: 12px;">
      <span class="prompt-category">{{ prompt.category }}</span>
      <span v-for="tag in prompt.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div
      class="prompt-content"
      :style="expanded[prompt.id] ? 'max-height: none' : ''"
    >{{ prompt.content }}</div>
    <div style="display: flex; gap: 8px;">
      <button class="copy-btn" @click="toggleExpand(prompt.id)">
        {{ expanded[prompt.id] ? '收起' : '展开' }}
      </button>
      <button class="copy-btn" @click="copyContent(prompt.content)">
        复制
      </button>
    </div>
  </div>
</template>
