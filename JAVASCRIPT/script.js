document.addEventListener("DOMContentLoaded", () => {
    // const num = document.querySelector(".num")
    const menu_btn = document.querySelector(".menu_btn")
    const menu = document.querySelector(".user_menu")
    const header = document.querySelector(".header")
    const blue = document.querySelectorAll(".blue")
    
    // if (document.body.clientWidth <= 1000) {
    //     if (document.body.contains(".num")) {
    //         num.addEventListener("click", function () {
    //             num.href = "tel:+998998531616"
    //         })
    //     }
    // }

    if (document.body.clientWidth <= 1000) {
        const num = document.body.querySelector(".num")
        if (num) {
            num.addEventListener("click", function () {
                num.href = "tel:+998998531616"
            })
        }
    }


    menu_btn.addEventListener("click", () => {
        document.body.classList.add("dark-body")
        document.body.classList.add("no-scroll")
        header.classList.add("dark-header")
        menu_btn.classList.add("clear")
        menu.classList.add("show")
        blue.forEach(item => item.classList.add("dark-font"))
    })

    function getPhoto() {
        const img = document.createElement("img")
        img.src = "../svg/cansel.png"
        img.alt = "rasm"

        menu.appendChild(img).classList.add("cancel")


        img.addEventListener("click", () => {
            document.body.classList.remove("dark-body")
            document.body.classList.remove("no-scroll")
            menu.classList.remove("show")
            header.classList.remove("dark-header")
            menu_btn.classList.remove("clear")
            blue.forEach(item => item.classList.remove("dark-font"))
        })
    }
    getPhoto()
})
