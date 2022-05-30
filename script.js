
const state = {
    fps: 18,
    color: "#0f0",
    charset: "0123 45片789AB下行 汉字为片假 名的字源CDEFajfhcbカナnsp lfjem ckd.xncg slカタ 仮名",
};


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let w, h, p;
const resize = () => {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;

    p = Array(Math.ceil(w / 10)).fill(0);
};
window.addEventListener("resize", resize);
resize();

const random = (items) => items[Math.floor(Math.random() * items.length)];


const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.strokeStyle = "#07e861";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = state.color;

    for (let i = 0; i < p.length; i++) {
        let v = p[i];
        ctx.fillText(random(state.charset), i * 10, v);
        p[i] = v >= h || v >= 15000 * Math.random() ? 0 : v + 10;
    }
};

let interval = setInterval(draw, 1000 / state.fps);
fpsCtrl.onFinishChange((fps) => {
    console.log(fps);
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(draw, 1000 / fps);
});
