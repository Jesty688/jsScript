
// function formats(date){
//     let year = date.getFullYear();
//     let mon  = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
//     let day  = date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate();
//     return `${year}-${mon}-${day}`;
// }

// // 日期填写
// document.querySelector("#q1").value = formats(new Date());
// // 所有单选
// let radios = document.querySelectorAll(".jqRadio");
// // 网址上的 班级是前三个 下标是从0开始的! 自己可以算
// // 假设高二 5班
// radios[1].click();  // 下标0开始
// radios[7].click();  // 2+5
// // 4位座位号
// document.querySelector("#q4").value = "29"; //自己改
// // 姓名
// document.querySelector("#q5").value = "名字"; //自己改
// //体温 
// document.querySelector("#q6_1").value = "正常";
// // 咳嗽 发热 是=21 否=20
// radios[20].click();  // 2+5
// //接触史
// document.querySelectorAll(".jqCheckbox")[0].click();
// // 位置
// document.querySelector("#q9").value=""




/**
 * Author @Jesty
 * Date 2020 - 01 - 22
 */
class AutoAs{
    constructor(name , classes , className , sitNumber , address){
        //姓名
        this.name = name;
        // 年级
        this.classes = classes;
        // 班级
        this.className = className;
        // 座位号
        this.sitNumber = sitNumber;
        // 地址
        this.address = address;
        // 多选和单选
        this.radios   = document.querySelectorAll(".jqRadio");;
        this.checkeds = document.querySelectorAll(".jqCheckbox");
    }
   
    initDom(){
        // 初始化dom
        // 时间
        document.querySelector("#q1").value = this.format(new Date);
        // 4位座位号
        document.querySelector("#q4").value = this.sitNumber;
        // 姓名
        document.querySelector("#q5").value = this.name;
        //体温 
        document.querySelector("#q6_1").value = this.randomTemper();
        // 地址
        document.querySelector("#q9").value = this.address;        
    }
    randomTemper(){
        return (Math.random()*(36.7-36.2)+36.2).toFixed(1);
    }
    start(){
        // 填的
        this.initDom();
        // 选的
        // 年级
        this.radios[this.classes - 1].click();
        // 班级
        this.radios[this.className + 2].click();
        // 是否发热 否20 是21
        this.radios[20].click();
        // 接触史
        this.checkeds[0].click();
    }
    format(date){
        let year = date.getFullYear();
        let mon  = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let day  = date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate();
        return `${year}-${mon}-${day}`;
    }
}
/**
 * 参数1=名字
 * 参数2=年级 高二
 * 参数3=班级 15班
 * 参数4=座位号 
 * 参数5=地址
 */
const autoAs = new AutoAs("我是姓名" , 2 , 15 , 34 , "江西南昌");
// 开始
autoAs.start();
