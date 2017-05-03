/**
 * Created by hxh on 2017/4/29.
 */


function boundaryPrint() {

    console.log("-------------");
}


window.onload = function () {

    console.log("Hello 03-02.js");

    // Math 方法
    boundaryPrint();

    console.log(Math.trunc(3.12));
    console.log(Math.trunc(3.92));
    console.log(Math.trunc(-3.12));
    console.log(Math.trunc(-0.12));

    var sum = (a, b) => a + b;
    boundaryPrint();
    console.log(sum(2, 3));

    // 函数参数的默认值
    // ES5
    function log2(x, y) {
        if (typeof y === "undefined"){
            y = "world";
        }
        console.log(x, y);
    }
    log2("Hello");
    log2("Hello", "China");
    log2("Hello", "");

    // ES6
    function log(x, y = "world") {
        console.log(x, y);
    }
    log("Hello");
    log("Hello", "China");
    log("Hello", "");

    // 以下写法的区别
    // 写法一
    function m1({x = 0, y = 0} = {}) {
        console.log(x, y);
    }

    // 写法二
    function m2({x, y} = { x: 0, y: 0 }) {
        console.log(x, y);
    }

    m1();
    m2();

    m1({x:3, y:4});
    m2({x:3, y:4});

    m1({x:3});
    m2({x:3});

    m1({});
    m2({});

    m1({z: 3});
    m2({z: 3});

    // rest 参数
    boundaryPrint();
    function add(...value) {
        let sum = 0;
        for (let val of value){
            sum += val;
        }

        // return sum;
        console.log(sum);
    }
    add(1);
    add(1, 2);
    add(1, 2, 3);

    // console.log(Math.max(...[14, 3, 77]));

};











