import throttle from 'lodash/throttle'

class StickyHeader{
    constructor(){
        this.siteHeader = document.querySelector(".site-header")
        this.events()
    }
    events(){
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
    }
    runOnScroll(){
        console.log("oooooooooo")
        if(window.scrollY>60){
            this.siteHeader.classList.add("site-header__dark")

        }else{
            this.siteHeader.classList.remove("site-header__dark")
        }
    }
}

export default StickyHeader