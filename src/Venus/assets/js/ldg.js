async function delay(delayInms) {
    return new Promise(resolve  => {
        setTimeout(() => {
        resolve(2);
        }, delayInms);
    });
}

document.getElementById("section-1").onclick = async function(){
    document.getElementById("sec-1-l-1").classList.remove("animate__slow");
    document.getElementById("sec-1-l-2").classList.remove("animate__slow");
    document.getElementById("sec-1-l-2").classList.remove("animate__delay-1s");
    document.getElementById("sec-1-l-1").classList.add("animate__fadeOut", "animate__fast");
    document.getElementById("sec-1-l-2").classList.add("animate__fadeOut", "animate__fast");

    await delay(850);

    document.getElementById("section-1").hidden = true;
    document.getElementById("section-2").hidden = false;
}

async function analytics(selected_option){
    document.getElementById("sec-2-l-1").classList.remove("animate__slow");
    document.getElementById("sec-2-l-2").classList.remove("animate__slow");
    document.getElementById("sec-2-l-2").classList.remove("animate__delay-1s");
    document.getElementById("sec-2-l-1").classList.add("animate__fadeOut", "animate__fast");
    document.getElementById("sec-2-l-2").classList.add("animate__fadeOut", "animate__fast");


    var elems = document.querySelectorAll(".btn-shine");

    [].forEach.call(elems, function(el) {
        el.classList.remove("animate__fadeIn", "animate__delay-2s");
        el.classList.add("animate__fadeOut", "animate_fast");
    });

    await delay(850);
    var opt = new String(selected_option);
    if(typeof(Storage) !== "undefined") {
        localStorage.profession = opt;
        await send_profession(opt);
    } else {
        alert("We're sorry, but your browser doesn't support a feature we use. ERR: LS01");
    }
}

async function send_profession(option){
    document.getElementById("section-2").hidden = true;
    document.getElementById("section-3").hidden = false;

    await delay(850);

    var elems = document.querySelectorAll(".loading-letter");

    [].forEach.call(elems, function(el) {
        el.classList.add("loading__letter");
    });

    // TODO: Call API
    ttr = Math.random()*1000%800+1300;await delay(ttr);
    window.location.href ="analytics.html"
}