var num=0;
var timer=null;
go();
function go(){

          timer=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>2){//如果移动到了最后一张图，则num赋值0，调整ul边距（相当于初始化）
                    num=0;
                     $(".list").css("display","none");
                    $(".list").eq(0).css("display","block");
                    $(".span").css("backgroundColor","#f0f0f0");
                    $(".span").eq(0).css("backgroundColor","#adadad");
                }
               
                else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
                    $(".list").css("display","none");
                    $(".list").eq(num).css("display","block");
                   $(".span").css("backgroundColor","#f0f0f0");
                    $(".span").eq(num).css("backgroundColor","#adadad");
              }
          },2000);
}
function show1(){
       $(".list").css("display","none");
       $(".list").eq(0).css("display","block");
      $(".span").css("backgroundColor","#f0f0f0");
     $(".span").eq(0).css("backgroundColor","#adadad");
       
}
function show2(){
       $(".list").css("display","none");
     $(".list").eq(1).css("display","block");
                    $(".span").css("backgroundColor","#f0f0f0");
 $(".span").eq(1).css("backgroundColor","#adadad");
 
}
function show3(){
    $(".list").css("display","none");
    $(".list").eq(2).css("display","block");
    $(".span").css("backgroundColor","#f0f0f0");
    $(".span").eq(2).css("backgroundColor","#adadad");

}