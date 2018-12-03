document.querySelector(".om").addEventListener("click", home)
document.querySelector(".about").addEventListener("click", aboutMe)
document.querySelector(".cv").addEventListener("click", cv)
document.querySelector(".adress").addEventListener("click", contact)
document.querySelector(".folio").addEventListener("click", port)
document.querySelector(".btnall").addEventListener("click", all)
document.querySelector(".btnun").addEventListener("click", un)
document.querySelector(".btnde").addEventListener("click", de)
var opa = 1
var about = false
var resume = false
var portfolio = false
var contact = false

function all() {
    var i = 0
    while (i < 8) {
        document.querySelectorAll(".im")[i].style.display = "block"
        i++
    }
}

function un() {
    var i = 0
    while (i < 4) {
        document.querySelectorAll(".un")[i].style.display = "block"
        document.querySelectorAll(".deux")[i].style.display = "none"
        i++
    }
}

function de() {
    var i = 0
    while (i < 4) {
        document.querySelectorAll(".deux")[i].style.display = "block"
        document.querySelectorAll(".un")[i].style.display = "none"
        i++
    }
}

function home() {
    if (about == true) {
        var elem = document.querySelector(".aboutMe");
        var di = setInterval(frame, 20);
        function frame() {
            if (opa < 0) {
                clearInterval(di);
                opa = 1
                next()
            } else {
                opa = opa - 0.1;
                elem.style.opacity = opa;
            }
        }
    }
    else if (resume == true) {
        var elem = document.querySelector(".resume");
        var di = setInterval(frame, 20);
        function frame() {
            if (opa < 0) {
                clearInterval(di);
                opa = 1
                next()
            } else {
                opa = opa - 0.1;
                elem.style.opacity = opa;
            }
        }
    }
    else if (contact == true) {
        var elem = document.querySelector(".contact");
        var di = setInterval(frame, 20);
        function frame() {
            if (opa < 0) {
                clearInterval(di);
                opa = 1
                next()
            } else {
                opa = opa - 0.1;
                elem.style.opacity = opa;
            }
        }
    }
    else if (portfolio == true) {
        var elem = document.querySelector(".portfolio");
        var di = setInterval(frame, 20);
        function frame() {
            if (opa < 0) {
                clearInterval(di);
                opa = 1
                next()
            } else {
                opa = opa - 0.1;
                elem.style.opacity = opa;
            }
        }
    }
    function next() {
        document.querySelector(".aboutMe").style.display = "none"
        document.querySelector(".resume").style.display = "none"
        document.querySelector(".contact").style.display = "none"
        document.querySelector(".portfolio").style.display = "none"
        document.querySelector(".om").firstElementChild.classList.add("select")
        document.querySelector(".om").firstElementChild.classList.remove("choua")
        document.querySelector(".about").firstElementChild.classList.remove("select")
        document.querySelector(".cv").firstElementChild.classList.remove("select")
        document.querySelector(".folio").firstElementChild.classList.remove("select")
        document.querySelector(".adress").firstElementChild.classList.remove("select")
        document.querySelector(".about").firstElementChild.classList.add("choua")
        document.querySelector(".cv").firstElementChild.classList.add("choua")
        document.querySelector(".folio").firstElementChild.classList.add("choua")
        document.querySelector(".adress").firstElementChild.classList.add("choua")
    }
    about = false
    resume = false
    portfolio = false
    contact = false

}


function aboutMe() {
    document.querySelector(".aboutMe").style.display = "block"
    document.querySelector(".aboutMe").style.opacity = 1
    document.querySelector(".resume").style.display = "none"
    document.querySelector(".contact").style.display = "none"
    document.querySelector(".portfolio").style.display = "none"
    document.querySelector(".about").firstElementChild.classList.add("select")
    document.querySelector(".about").firstElementChild.classList.remove("choua")
    document.querySelector(".om").firstElementChild.classList.remove("select")
    document.querySelector(".cv").firstElementChild.classList.remove("select")
    document.querySelector(".folio").firstElementChild.classList.remove("select")
    document.querySelector(".adress").firstElementChild.classList.remove("select")
    document.querySelector(".om").firstElementChild.classList.add("choua")
    document.querySelector(".cv").firstElementChild.classList.add("choua")
    document.querySelector(".folio").firstElementChild.classList.add("choua")
    document.querySelector(".adress").firstElementChild.classList.add("choua")
    var elem = document.querySelector(".aboutMe");
    var pos = -1200;
    var id = setInterval(frame, 0);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos = pos + 50;
            elem.style.right = pos + 'px';
        }
    }
    about = true
    resume = false
    portfolio = false
    contact = false

}

function cv() {
    document.querySelector(".resume").style.display = "block"
    document.querySelector(".resume").style.opacity = 1
    document.querySelector(".aboutMe").style.display = "none"
    document.querySelector(".contact").style.display = "none"
    document.querySelector(".portfolio").style.display = "none"
    document.querySelector(".cv").firstElementChild.classList.add("select")
    document.querySelector(".cv").firstElementChild.classList.remove("choua")
    document.querySelector(".about").firstElementChild.classList.remove("select")
    document.querySelector(".om").firstElementChild.classList.remove("select")
    document.querySelector(".folio").firstElementChild.classList.remove("select")
    document.querySelector(".adress").firstElementChild.classList.remove("select")
    document.querySelector(".about").firstElementChild.classList.add("choua")
    document.querySelector(".om").firstElementChild.classList.add("choua")
    document.querySelector(".folio").firstElementChild.classList.add("choua")
    document.querySelector(".adress").firstElementChild.classList.add("choua")
    var elem = document.querySelector(".resume");
    var pos = -1200;
    var id = setInterval(frame, 0);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos = pos + 50;
            elem.style.right = pos + 'px';
        }
    }
    resume = true
    about = false
    portfolio = false
    contact = false
}

function contact() {
    document.querySelector(".contact").style.display = "block"
    document.querySelector(".aboutMe").style.display = "none"
    document.querySelector(".resume").style.display = "block"
    document.querySelector(".portfolio").style.display = "none"
    document.querySelector(".adress").firstElementChild.classList.add("select")
    document.querySelector(".adress").firstElementChild.classList.remove("choua")
    document.querySelector(".about").firstElementChild.classList.remove("select")
    document.querySelector(".cv").firstElementChild.classList.remove("select")
    document.querySelector(".folio").firstElementChild.classList.remove("select")
    document.querySelector(".om").firstElementChild.classList.remove("select")
    document.querySelector(".about").firstElementChild.classList.add("choua")
    document.querySelector(".cv").firstElementChild.classList.add("choua")
    document.querySelector(".folio").firstElementChild.classList.add("choua")
    document.querySelector(".om").firstElementChild.classList.add("choua")

    contact = true
    about = false
    resume = false
    portfolio = false
}

function port() {
    document.querySelector(".portfolio").style.display = "block"
    document.querySelector(".portfolio").style.opacity = 1
    document.querySelector(".aboutMe").style.display = "none"
    document.querySelector(".resume").style.display = "none"
    document.querySelector(".contact").style.display = "none"
    document.querySelector(".folio").firstElementChild.classList.add("select")
    document.querySelector(".folio").firstElementChild.classList.remove("choua")
    document.querySelector(".about").firstElementChild.classList.remove("select")
    document.querySelector(".cv").firstElementChild.classList.remove("select")
    document.querySelector(".om").firstElementChild.classList.remove("select")
    document.querySelector(".adress").firstElementChild.classList.remove("select")
    document.querySelector(".about").firstElementChild.classList.add("choua")
    document.querySelector(".cv").firstElementChild.classList.add("choua")
    document.querySelector(".om").firstElementChild.classList.add("choua")
    document.querySelector(".adress").firstElementChild.classList.add("choua")

    portfolio = true
    about = false
    resume = false
    contact = false

    var elem = document.querySelector(".portfolio");
    var pos = -1200;
    var am = setInterval(frame, 0);
    function frame() {
        if (pos == 350) {
            clearInterval(am);
        } else {
            pos = pos + 50;
            elem.style.right = pos + 'px';
        }
    }

}
