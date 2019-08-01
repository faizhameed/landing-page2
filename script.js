const nav = document.getElementById('navbar');

const scrollHandle=()=>{
    window.scrollY>25?nav.classList.add("navShadow"):nav.classList.remove("navShadow");
}

window.addEventListener("scroll",scrollHandle)
