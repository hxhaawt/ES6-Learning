/**
 * Created by hxh on 2017/4/26.
 */

window.onload = function () {

    // const PI = 3.14;
    // PI = 3;

    // console.log(MAX);
    // const MAX = 127;

    // var [a, b, c] = [1, 2, 3];
    // console.log(a, b, c);


    // let [x = 1] = [undefined];
    // let [y = 1] = [null];
    // console.log(x, y);


    // let [x=1, y=2] = [];
    // console.log(x, y);
    // let [a=1, b=a] = [2];
    // console.log(a, b);
    // let [c=1, d=c] = [2, 3];
    // console.log(c, d);
    // let [e=f, f=1] = [];    // reference error

    // var {a, b} = {a: "111", b: "222"};
    // console.log(a, b);
    // var { c } = { d: "333"};
    // console.log(c);


    // 对象的解构赋值的内部机制， 是先找到同名属性， 然后再赋给对应的变量。
    // // 真正被赋值的是后者， 而不是前者。
    // var { foo: baz } = { foo: "aaa", bar: "bbb" };
    // console.log(baz, foo);  // error: foo is not defined

    var arr = ["one", "two", "three", 4, 5];
    for (let item in arr){
        console.log(item, arr[item]);
    }
    console.log("==========");
    for (let item of arr){
        console.log(item);
    }

    var person = {
        name: "richard",
        age:  28,
        job: "web"
    };
    console.log("==========");
    for (let key in person){
        console.log(key, person[key]);
    }










};


















