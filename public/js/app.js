document.querySelector(".om").addEventListener("click", home)
document.querySelector(".about").addEventListener("click", aboutMe)
document.querySelector(".cv").addEventListener("click", cv)
document.querySelector(".adress").addEventListener("click", contact)
document.querySelector(".folio").addEventListener("click", port)
var opa = 1

function home() {
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

}

function cv() {
    document.querySelector(".resume").style.display = "block"
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
}

function port() {
    document.querySelector(".portfolio").style.display = "block"
    document.querySelector(".aboutMe").style.display = "none"
    document.querySelector(".resume").style.display = "block"
    document.querySelector(".contact").style.display = "block"
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
}
