async function delay(delayInms) {
    return new Promise(resolve  => {
        setTimeout(() => {
        resolve(2);
        }, delayInms);
    });
}

async function send_profession(option){
    // TODO: Call API
    ttr = Math.random()*1000%800+1300;await delay(ttr);
    window.location.href ="analytics"
}

async function chprof(selected_option){
    var opt = new String(selected_option);
    if(typeof(Storage) !== "undefined") {
        localStorage.profession = opt;
        await send_profession(opt);
    } else {
        alert("We're sorry, but your browser doesn't support a feature we use. ERR: LS06");
    }
}