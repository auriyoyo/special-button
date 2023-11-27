let msgs = ["ur cats are cute i hope they dont get run over", "sending over the bestest day everrr", "dont die", "ur actually funny", 
            "hope ur well", "u remind me of the emoji with big eyes and tongue sticking out", "i cant think of anything else", "we dont talk but im proud of u blehh",
            "send a 8ball game", "u got this california man", "BE HAPPYYYY", "SMILEEE! CHEESEEEEE", "thank you for being my friend i guesss"]
let clickcount = 0;
let lastMsg = Math.floor(Math.random()*8);
let newMsg = Math.floor(Math.random()*8);

let click = document.getElementById("click");
click.addEventListener("click", () => {
    console.log(clickcount);

    if (clickcount == 0){
        alert("i cant believe u really thought id make such a thing.... here are nice things instead");
    } else {
        if(newMsg == lastMsg){
            newMsg = Math.floor(Math.random()*msgs.length);
        } else {
            alert(msgs[newMsg]);
            lastMsg = newMsg;
            newMsg = Math.floor(Math.random()*msgs.length);
        }
    }
    clickcount++;
});
