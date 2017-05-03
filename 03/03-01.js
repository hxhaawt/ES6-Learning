/**
 * Created by hxh on 2017/4/28.
 */

window.onload = function () {

    console.log(String.fromCodePoint(0x20BB7));
    console.log(String.fromCodePoint(0x78, 0x1f680, 0x79));

    // 遍历字符串
    for (let codePoint of "test"){
        console.log(codePoint);
    }

    // 除了遍历字符串， 这个遍历器最大的优点是可以识别大于0xFFFF的码点， 传统的for循环无法识别这样的码点。
    var text = String.fromCodePoint(0x20BB7);
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
    // " "
    // " "
    for (let i of text) {
        console.log(i);
    }
    // "吉"

    // console.log("abc".at(0));    // 还不能用，在提案中
    console.log("abc".charAt(0));
    // console.log("吉".at(0));

    console.log("-----------");
    var s = "Hello, world!";
    console.log(s.indexOf("He"));
    console.log(s.indexOf("wo"));
    console.log(s.indexOf("W"));
    console.log(s.startsWith("Hello"));
    console.log(s.endsWith("ld!"));
    console.log( s.includes("wo"));

    // 模板字符串
    // 多行字符串
    console.log("------------");
    console.log(`In JavaScript this is
    not legal.`);
    // 字符串中嵌入变量
    var name = "Bob", time = "today";
    var str_val = `Hello ${name}, how are you ${time}?`;
    console.log(str_val);

    console.log("------------");
    var a = 5,
        b = 10;
    console.log `Hello ${ a + b } world ${ a * b }`;


    console.log("------------");
    var s = 'aaa_aa_a',
        r = /a+_/y;
    console.log(r.exec(s));
    console.log(r.exec(s));

    console.log("|a|b|c||".split("|"));

    console.log("------------");
    // 部署了一个误差检查函数。
    function withinErrorMargin (left, right) {
        return Math.abs(left - right) < Number.EPSILON;
    }
    console.log(withinErrorMargin(0.2+0.1, 0.3));

    console.log("------------");
    console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);

    
};


























