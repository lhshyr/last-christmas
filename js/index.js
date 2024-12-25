let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let snowManImg = document.querySelector(".snowManImg");
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let snowFlower = document.querySelector(".snowFlower");
let text1 = document.querySelector(".icon1 .text1");
let text2 = document.querySelector(".icon1 .text2");
let text3 = document.querySelector(".icon1 .text3");
let pine = document.querySelector(".box2 .tree .pine");
let pineTree = document.querySelector(".box2 .tree .pineTree");
let topStar = document.querySelector(".box2 .tree .pineTree .topStar");
let lightStar = document.querySelector(".box2 .tree .pineTree .lightStar");
let title = document.querySelector(".box2 .title");
let audio = document.getElementById("audio")
let musicBtn = document.querySelector(".musicBtn")


let state = 0;
snowManImg.addEventListener("click",(e) =>{
    if (box1.classList.length>1) {
        e.target.parentNode.style.width = 155+'px';
        e.target.parentNode.style.height = 155+'px';
        setTimeout(() =>{
            e.target.parentNode.style.width = 150+'px';
            e.target.parentNode.style.height = 150+'px';
            if (icon1.style.display !== "none") {
                icon1.style.display = "none";
            }else{
                icon1.style.display = "block";
            }
        },200)
    }else{
        e.target.parentNode.style.width = 155+'px';
        e.target.parentNode.style.height = 155+'px';
        setTimeout(() =>{
            e.target.parentNode.style.width = 150+'px';
            e.target.parentNode.style.height = 150+'px';
            icon1.style.display = "block";
            state++
        },200)
        if (state!==0) {
            box1.classList.add("widthNull");
            icon2.style.display = "none";
            snowFlower.style.display = "none";
            box2.classList.add("widthMax");
            setTimeout(()=>{
                getSnowFlower()
                pine.style.display = "block";
                text1.textContent = "亲 爱 哒 🥰";
                text2.textContent = "look look小松果";
                text3.textContent = "点下看看";
            },1000)
        }
    }
    
})

pine.addEventListener("click",(e)=>{
    e.target.style.top = 75+"%";
    e.target.style.opacity = 0
    // e.target.style["animation-play-state"] = "paused";
    setTimeout(()=>{
        e.target.style.display = "none";
        topStar.style.display = "block";
        setTimeout(()=>{
            text3.style.display = "none";
            text1.textContent = "小 宝 贝 😉😘";
            text2.textContent = "圣诞节快乐呦~";
            text2.style.left = 19+"px";
            text2.style.bottom = 34+"px";
            text1.style.left = 22+"px";
            text1.style.bottom = 50+"px";
            setTimeout(()=>{
                title.style.opacity = 1;
                lightStar.style.opacity = 1;
                musicBtn.style.opacity = 1;
                musicBtn.style.animation = "xuanzhuan 2s infinite linear"
                audio.play();
            },1000)
        },1000)
        pineTree.style.height = 65+"%";
    },2000)
})

musicBtn.addEventListener("click",(e)=>{
    if (e.target.style.animationPlayState === "paused"){
        e.target.style.animationPlayState = "running";
        audio.play();
    }else{
        e.target.style.animationPlayState = "paused";
        audio.pause();
    }

})

getSnowFlower()

function getSnowFlower() {
    let snowFlowers = [];
    let domClass = "";
    if (box2.classList.contains("widthMax")){
        snowFlowers = ["./img/snowFlower/snow4.png"];
        domClass = ".snowF";
    }else{
        domClass = ".snowFlower";
        for (let i = 1;i<=12;i++){
            snowFlowers.push(`./img/snowFlower/snow${i}.png`);
        }
    }
    new Snow(domClass,{
        image: snowFlowers,                    // 可选的图片(网络或本地)
        vx: [-3, 3],                           // 水平速度
        vy: [2, 3],                            // 垂直速度
        va: [0,0],                             // 角速度范围，传入图片才会生效
        vf: 0.05,                              // 翻转速度，推荐：慢0.05/正常0.1/快0.2
        radius: [25, 30],                      // 半径范围，传入图片需调整此项
        alpha: [0.8, 1],                       // 透明度范围
        num: window.innerWidth,          // 雪花数量，一般无需改动
    })
}
