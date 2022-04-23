module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: true,
        },
        'postcss-pxtorem': {
            rootValue: 198, // 根节点字体大小 按照1980*1080划分成十份
            propList: ['*'], // 可以从px更改到rem的属性,值需要精确匹配。
            unitPrecision: 5 // 允许REM单位增长到的十进制数字。
        }
    }
}
