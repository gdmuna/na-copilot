// ESLint 配置 - 代码规范检查
module.exports = {
    extends: [
        'plugin:next/core-web-vitals', // 使用 Next.js 官方的 ESLint 配置
        'plugin:prettier/recommended' // 关闭所有不必要或可能与 Prettier 冲突的规则，仅启用检测潜在错误的规则
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    }
};
