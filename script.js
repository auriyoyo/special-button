let msgs = ["ur cats are cute i hope they dont get run over", "sending over the bestest day everrr", "dont die", "ur actually funny", 
            "hope ur well", "u remind me of the emoji with big eyes and tongue sticking out", "i cant think of anything else", "we dont talk but im proud of u blehh",
            "send a 8ball game"]
let clickcount = 0;

let click = document.getElementById("click");
click.addEventListener("click", () => {
    console.log(clickcount);

    if (clickcount == 0){
        alert("i cant believe u really thought id make such a thing.... here are nice things instead");
        clickcount++;
    } else {
        alert(msgs[Math.floor(Math.random()*8)]);
        clickcount++;
    }
});