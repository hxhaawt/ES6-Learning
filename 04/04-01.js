/**
 * Created by hxh on 2017/5/3.
 */

function addLoadFunc(func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload !== "function"){
        window.onload = func;
    }else {
        window.onload = function () {
            oldOnLoad();
            func();
        };
    }
}

addLoadFunc(myTest);

function boundaryPrint() {

    console.log("-------------");
}

function myTest() {

    //  箭头函数
    var sum = (num1, num2) => num1 + num2;

    console.log(sum(1, 2));
    //
    // var str = "";
    // for (var i=40; i<1050; i++){
    //     str = "http://xxx.xiangjiao.xxx:7799/video/category/uploa18ds/article/" + i +  ".mp4";
    //     document.writeln("<br />" + str);
    // }

    // var s = "test";
    // var t = s.length;
    // console.log(t);
    //
    // s.len = 4;
    // var t1 = s.len;
    // console.log(t1);

    var s = "test", n = 1, b = true;
    var S = new String(s);
    var N = new Number(n);
    var B = new Boolean(b);

    console.log(s == S);
    console.log(s === S);
    console.log(n == N);
    console.log(n === N);
    console.log(b == B);
    console.log(b === B);

    console.log(typeof s);
    console.log(typeof S);
    console.log(typeof n);
    console.log(typeof N);
    console.log(typeof b);
    console.log(typeof B);



}











