// =============================
// TẠO SAO
// =============================

const stars = document.getElementById("stars");

for (let i = 0; i < 200; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);

}



// =============================
// CHỮ BAY
// =============================

const messages = [

    "Anh yêu em ❤️",

    "Làm vợ anh nhé 💍",

    "I Love You ❤️",

    "Forever ❤️",

    "💕",

    "❤️"

];

const area = document.getElementById("floating-text");

for (let i = 0; i < 250; i++) {

    const item = document.createElement("div");

    item.className = "word";

    item.innerText = messages[Math.floor(Math.random() * messages.length)];

    item.style.left = Math.random() * 100 + "vw";

    item.style.top = Math.random() * 100 + "vh";

    item.style.fontSize = (12 + Math.random() * 30) + "px";

    item.style.animationDuration = (6 + Math.random() * 8) + "s";

    item.style.animationDelay = (Math.random() * 10) + "s";

    item.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    area.appendChild(item);

}



// =============================
// MỞ BÍ MẬT
// =============================

const btn = document.getElementById("openBtn");

const message = document.getElementById("message");

const music = document.getElementById("bgMusic");

const answerBox = document.getElementById("answerBox");

const photo =
document.getElementById("couplePhoto");
const text = [

    "Anh yêu em ❤️",

    "Em đồng ý làm vợ anh nha? 💍"

];

btn.onclick = function () {

    btn.style.display = "none";

    music.play();

    // Đợi 3 giây rồi mới hiện ảnh và lời tỏ tình
    setTimeout(function(){

        photo.style.display = "block";

        let line = 0;
        let char = 0;

        function type(){

            if(line >= text.length){

                answerBox.style.display = "block";
                return;

            }

            if(char < text[line].length){

                message.innerHTML += text[line].charAt(char);

                char++;

                setTimeout(type,80);

            }else{

                message.innerHTML += "<br><br>";

                line++;

                char = 0;

                setTimeout(type,500);

            }

        }

        type();

    },3000);

}



// =============================
// NÚT ĐỒNG Ý
// =============================

// =============================
// NÚT ĐỒNG Ý
// =============================

document.getElementById("yesBtn").onclick = function () {

    answerBox.style.display = "none";

    message.innerHTML = "💖 Từ hôm nay em là vợ tương lai của anh 💖";

    message.style.fontSize = "55px";
    message.style.color = "#ff1493";
    message.style.textShadow = "0 0 20px #ff69b4";

    for(let i=0;i<120;i++){

    createHeart();

}

// Thêm dòng này
simpleFirework();

};


// =============================
// NÚT SUY NGHĨ
// =============================

document.getElementById("thinkBtn").onclick = function () {

    alert("😊 Anh sẽ chờ em.");

};
// ======================
// TIM RƠI
// ======================

const hearts = document.getElementById("hearts");
const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    const icons = ["❤️","💖","💕","💗","💘"];

    heart.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*35) + "px";

    heart.style.animationDuration = (4 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },9000);

}

setInterval(createHeart,300);

function simpleFirework(){

    for(let i=0;i<250;i++){

        setTimeout(function(){

            ctx.beginPath();

            ctx.arc(

                Math.random()*canvas.width,

                Math.random()*canvas.height,

                Math.random()*4,

                0,

                Math.PI*2

            );

            ctx.fillStyle="hsl("+Math.random()*360+",100%,60%)";

            ctx.fill();

        },i*15);

    }

}