// 设置 rem 函数
function setRem() {
    // 375 默认大小100px,为了兼容以前的样式换算
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小
    htmlDom.style = `font-size: ${htmlWidth / (375 / 100)}px !important;`;
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
    setRem();
};
