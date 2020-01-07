// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [2, 2],//缩进风格
    'eqeqeq': 2,//必须使用全等
    'use-isnan': 2,//禁止比较时使用NaN，只能用isNaN()
    'wrap-regex': 0,//正则表达式字面量用小括号包起来
    'semi': [0, 'always'],//语句强制分号结尾
    'default-case': 2,//switch语句最后必须有default
    'consistent-this': [2, 'that'],//this别名
    'array-bracket-spacing': [2, 'never'],//是否允许非空数组里面有多余的空格
    'arrow-parens': 0,//箭头函数用小括号括起来
    'no-dupe-args': 2,//函数参数不能重复
    'no-func-assign': 2,//禁止重复的函数声明
    'no-multi-spaces': 1,//不能用多余的空格
  }
}

/*
如果不想使用eslint语法规格检测，请忽略上下文关闭
config文件夹中的index.js useEslint: false,重启webpack服务即可,
倘若只是想忽略局部文件Eslint的语法规格检测，请在.eslintignore添加，如下：
/src/* // 表示忽略src目录下所有文件Eslint的语法规格检测

vue-cli3的eslint配置问题
link: https://www.jianshu.com/p/bfc7e7329cff
 example :
 rules: {
    "规则名": [规则值, 规则配置]
 }
 // 规则值：

 "off"或者0    //关闭规则关闭
 "warn"或者1    //在打开的规则作为警告（不影响退出代码）
 "error"或者2    //把规则作为一个错误（退出代码触发时为1）
*/