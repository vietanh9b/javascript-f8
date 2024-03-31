const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)

const panes=$$('.tab-pane')
const tabs=$$('.tab-item')

const tabActive=$('.tab-item.active')
const line= $('.line')

function linePosition(element){
    line.style.left=element.offsetLeft+'px'
    line.style.width=element.offsetWidth+'px'
}

linePosition(tabActive)

tabs.forEach((tab,index) => {
    const pane=panes[index]
    // khi sử dụng arrow function thì phải chỉ rõ là element nào chứ không dùng this được
    tab.onclick=function(){
        $('.tab-item.active').classList.remove('active')
        this.classList.add('active')

        linePosition(this)


        $('.tab-pane.active').classList.remove('active')
        pane.classList.add('active')
    }  
});