console.log("加载成功");

//配置我们要引入的模块的路径  jquery遵从AMD规范 
require.config({
    paths:{
        jquery : "jquery-1.11.3",
        "jquery-cookie" : "jquery.cookie",
        index2 : "index2"
    },
    shim : {
        "jquery-cookie" : ["jquery"]
    }
})

//调整首页的代码
require(["index2"], function(index2){
    index2.body();
})