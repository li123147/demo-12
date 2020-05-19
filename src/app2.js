import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content")
import "./app2.css";


$tabBar.on("click", "li", (e) => {
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected");
    const index = $li.index()
    console.log(index)
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    //eq:就是等于第几个的意思
    //找到content的孩子们，第index个变成block，它的兄弟变成none(样式行为分离，js不管css的)
});
$tabBar.children().eq(0).trigger('click')
//找到tabBar的儿子第一个触发click事件