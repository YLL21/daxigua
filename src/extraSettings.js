

let extraScore = 1;

let wuDi = true;


let firstFruit = 0;


let reverseLevelUp = false;

const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {

  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}


let fruitQTan = false;

let fruitSlowDown = false;


let clickChangeFruit = true;

// 广告链接：false 或为空字符串表示不会跳转到广告
let adLink = 'https://blog.nomy.ga';

// 修改网页标题：将 "" 进行替换
document.getElementsByTagName("title")[0].innerText = '米糕(糯米Nomy)の魔法作业';

// 开启选分弹窗：将 false 改为 true
let selectModal = false;

