/**
 * Created by hxh on 2017/5/29.
 */

// on load event function
function addLoadFun(func) {
    let oldOnLoad = window.onload;
    if (typeof window.onload !== "function"){
        window.onload = func;
    }else {
        window.onload = function () {
            oldOnLoad();
            func();
        };
    }
}

// on load event
addLoadFun(testFun1);

function testFun1() {

    // JavaScript语言的传统方法是通过构造函数， 定义并生成新对象。 下面是一个例子
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype = {
        toValue(){
            console.log(this.x, this.y);
        },
        toString(){
            return '(' +this.x + ',' + this.y + ')';
        }
    };
    //
    // Point.prototype.toString = function() {
    //     return '(' +this.x + ',' + this.y + ')';
    // };
    //

    let p = new Point(2, 3);

    // ES6 提供了更接近传统语言的写法 class
    class Point2 {
        // 构造方法
        constructor(x, y){
            this.x = x;
            this.y = y;
        }

        toString(){
            return '(' +this.x + ',' + this.y + ')';
        }
    }
    let p2 = new Point2(3, 4);
    p2.toString();


    // Class的继承
    class Point3{
        constructor(x, y){
            this.x = x;
            this.y = y;
        }

        toString(){
            return '(' + this.x + ',' + this.y + ')';
        }
    }
    // 上面代码定义了一个ColorPoint类，
    // 该类通过extends关键字， 继承了Point类的所有属性和方法。
    class colorPoint extends Point3{
        constructor(x, y, color){
            super(x, y);    // 调用父类的constructor(x, y)
            this.color = color;
        }

        toString(){
            return this.color + ' ' + super.toString(); // 调用父类的toString()
        }
    }
    let testPoint1 = new colorPoint(1, 2, 'blue');
    console.log(testPoint1.toString());
    console.log(testPoint1 instanceof Point3);
    console.log(testPoint1 instanceof colorPoint);







}






















