
window.onload = function(){

    var log = console.log;

    // log("hello");

    var sayStatue = function (ready){

        return new Promise(function (resolve, reject){

            if (ready) {
                resolve("hello, world!");
            } else {
                reject("good bye!");
            }
        }); 
    };

    function doneCb(msg){
        alert(msg);
    }

    function failCb(msg){
        alert(msg);
    } 
    sayStatue(true).then(doneCb, failCb);
    sayStatue(false).then(doneCb, failCb);
    sayStatue(true).then(function (msg) {
        return msg + "--";
    }).then(function (msg) {
        return msg + "world";
    }).then(function (msg) {
        alert(msg);
    });


    var p1 = new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve("this p1");
        } , 3000);
    });

    var p2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("this p2");
        }, 1000);
    });

    var p3 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("this p3");
        }, 1000);
    });

    Promise.all([p1, p2]).then(function (result) {
        log(result);
    });

    Promise.all([p2, p3]).then(function (result) {
        log(result);
    });

    Promise.all([p2, "111"]).then(function (result) {
        log(result);
    });




};
























