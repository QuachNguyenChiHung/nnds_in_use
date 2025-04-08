

    window.addEventListener("scroll", function () {
        let navbar = document.getElementById("sticky");
        let scrollHeight = window.scrollY;
        let documentHeight = document.documentElement.scrollHeight;
        let windowHeight = window.innerHeight;
        
        if(window.innerWidth<992){
            navbar.style.top = "0";
        }else navbar.style.top = "40px";
    });