


let img = document.getElementsByTagName('img')
//设置每次遍历的起始图片，防止重复加载
let n = 0
//加载可视区域图片
lazyLoad()
window.onscroll = lazyLoad
function lazyLoad() {
    let seeHeight = document.documentElement.clientHeight
    let scrollHeight = document.body.scrollHeight
    for (let i = n; i < img.length; i++) {
        if (img[i].src === 'url/XXX.png') {
            if (img[i].offsetHeight < seeHeight + scrollHeight) {
                img[i].setAttribute('src', img[i].getAttribute('data-src'))
                n++
            }
        }
    }
}
