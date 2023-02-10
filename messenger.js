const messengers = [
    "Hi vọng sau này",
    "khi mà cuộc sống của chúng ta",
    "bớt vất vả đi một chút",
    "công việc của cả hai đều ổn định rồi",
    "thì người ngồi đó lắng nghe tâm sự của em vẫn là anh",
    "người ôm em thật chặt sau một ngày mệt mỏi",
    "vẫn là anh",
    "Hi vọng chúng ta sau này sẽ có tất cả",
    "và có cả 'chúng ta'.",
]

const wrapper = document.querySelector(".list-messenger");
const messenger = document.createElement("p");
const messBtn = document.querySelector(".mess");
const audio = document.querySelector(".song");
let count = 1;



function setMessenger(content) {
    messenger.style.opacity = 1;
    messenger.textContent = content;
    wrapper.appendChild(messenger);
    const intervalS = setInterval(function() {
        messenger.style.opacity -= 0.01;
    }, 300)
}


addEventListener("click", function() {
    setMessenger(messengers[0]);
    audio.play();
    messBtn.style.display = "none";
    setInterval(function() {
        if (messengers[count]) {
            setMessenger(messengers[count]);
            count++;
        } else {}
    }, 3500)
})