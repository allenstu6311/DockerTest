module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    //告訴jest使用babel的模組解析器
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    transform: {
        '^.+\.vue$': '@vue/vue3-jest',
        '^.+\js$': 'babel-jest',
    },
};
//問題解
// https://github.com/vuejs/vue-jest/issues/479