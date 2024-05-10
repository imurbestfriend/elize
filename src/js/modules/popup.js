let popup = document.querySelector('#popup');
let closeBtn = document.querySelector('.popup-block__closeBtn').addEventListener(click, ()=>{
    popup.style.display="none"
})

setTimeout(()=>{
 popup.style.display="block"
}, 7000)

setTimeout(()=>{
    popup.style.display="none"
}, 15000)

// alert(55)