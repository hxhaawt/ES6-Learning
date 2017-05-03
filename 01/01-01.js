/**
 * Created by hxh on 2017/4/21.
 */

window.onload = function () {

    // {
    //     var a = 10;
    //     let b = 15;
    //     // alert(b);
    // }
    // console.log(a, b);

    //  var a = [];
    //  for (var i = 0; i < 10; i++) {
    //      a[i] = function () {
    //          console.log(i);
    //      };
    //  }
    // a[6]();

    //
    // var a = [];
    // for (let i = 0; i < 10; i++) {
    //     a[i] = function () {
    //         console.log(i);
    //     };
    // }
    // a[6](); // 10

    // console.log(foo);
    // console.log(bar);
    // var foo = 2;
    // let bar = 2;
    // alert("no here");

    
    // console.log(typeof not_defined_value);

    // console.log(typeof x);
    // let x;

    // var temp = new Date();
    // function test1() {
    //     console.log(temp);
    //     if (false){
    //         var temp = 12;
    //     }
    // }
    // test1();

    function f() {
        console.log("I am outside");
    }
    (function () {
        function f() {
            console.log("I am inside");
        }
        if (false){

        }

        f();

    }());

};








