let bloop = {
    "links" : {
        "1" : "3357665",
        "2" : "3354906",
        "3" : "3360711",
        "4" : "3360930",
        "5" : "3364182",
        "6" : "3361330",
        "7" : "3361498",
        "8" : "3363781",
        "9" : "3363488",
        "10" : "3364076",
        "11" : "3363628",   
        "12" : "3363780",
        "13" : "3361311",
        "14" : "3361821"
    },
    "order" : []
}

let order_govt = ["1", "2", "3", "4", "5", "6", "7", "8"];
let order_stdt = ["9", "10", "11", "12", "13", "14"];
let order_edin = ["10", "9", "11", "14"];
let order_jose = ["9", "11", "10", "7", "1"];
let order_othr = ["6", "7", "10", "9", "11", "1", "12", "8"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function vizzy(){
    let profession = "Other";
    if(typeof(Storage) !== "undefined") {
        if (localStorage.profession){
            profession = localStorage.profession;
        }
    } else{
        alert("We're sorry, but your browser doesn't support a feature we use. ERR: LS02");
    }

    switch (profession){
        case "Government":
            bloop.order = [...order_govt];
            break;
        case "Student":
            bloop.order = [...order_stdt];
            break;
        case "Educational_Institution":
            bloop.order = [...order_edin];
            break;
            case "Job_Seeker":
            bloop.order = [...order_jose];
            break;
            case "Other":
            bloop.order = [...order_othr];
            break;
    }

    let order_glob = [];
    for (i = 1; i < Object.keys(bloop.links).length+1; ++i){
        order_glob.push(String(i));
    }

    let order_rand = order_glob.filter(x => !bloop.order.includes(x));
    shuffleArray(order_rand);

    
    for (i = 0; i < bloop.order.length; ++i){
        stringi = new String(i+1);
        elem = "fl-gh-"+stringi;
        imgnum = [bloop["order"][String(i)]];
        document.getElementById(elem).src = "assets/img/FL/FL"+imgnum+".png";
    }

    for (i = bloop.order.length; i < order_rand.length + bloop.order.length; ++i){
        stringi = new String(i+1);
        elem = "fl-gh-"+stringi;
        imgnum = order_rand[i-bloop.order.length];
        document.getElementById(elem).src = "assets/img/FL/FL"+imgnum+".png";
    }
}

function redirfl(number){
    if(typeof(Storage) !== "undefined") {
        stringi = String(number);
        localStorage.flviz = bloop["links"][stringi];
        document.location.href="visualize/"
    } else{
        alert("We're sorry, but your browser doesn't support a feature we use. ERR: LS03");
    }
}

$(document).ready(function(){

    $("#scroll-beginning a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1200, function(){
            window.location.hash = hash;
        });
        }
    });
});