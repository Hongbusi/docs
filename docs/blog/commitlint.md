# commitlint

## 什么是 commitlint?

commitlint 是检查你提交消息是否符合常规提交格式。

一般来说，格式主要是这样的：

``` bash
type(scope ?): subject # scope 是可选的
```

常见类型可以是：

``` md
build
chore
ci
docs
feat
fix
perf
refactor
revert
style
test
```

## 为什么使用 commitlint?

- 自动生成 CHANGELOG。
- 自动确定语义版本碰撞（基于提交的类型）。
- 向团队成员、公众和其他利益相关者传达变更的性质。
- 触发构建和发布过程。
- 通过允许人们探索更有条理的提交历史，让人们更容易为您的项目做出贡献。

## Usage

``` bash
# 安装 commitlint cli 和常规配置
yarn add @commitlint/config-conventional @commitlint/cli --dev

# 配置 commitlint 以使用常规配置
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

使用 Husky 的 commit-msg 钩子，在创建之前对提交进行 lint 提交：

``` bash
yarn add husky --dev

# 编辑 package.json > 准备脚本并运行一次
yarn set-script prepare "husky install"
yarn run prepare

# 添加 hook
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
```

接下来就可以通过 husky 的 commit-msg hook 触发 commitlint。

## 自定义 commitlint 规范

In commitlint.config.js:

``` js
module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ]
    ]
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨'
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛'
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚'
          },
          style: {
            description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎'
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦'
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨'
          },
          build: {
            description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠'
          },
          ci: {
            description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️'
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️'
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑'
          }
        }
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)'
      },
      subject: {
        description: 'Write a short, imperative tense description of the change'
      },
      body: {
        description: 'Provide a longer description of the change'
      },
      isBreaking: {
        description: 'Are there any breaking changes?'
      },
      breakingBody: {
        description: 'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
      },
      breaking: {
        description: 'Describe the breaking changes'
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?'
      },
      issuesBody: {
        description: 'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)'
      }
    }
  }
};
```

## 参考链接

- [githooks](https://git-scm.com/docs/githooks)
- [husky](https://github.com/typicode/husky)
- [@commitlint/{cli,config-conventional}](https://github.com/conventional-changelog/commitlint)
