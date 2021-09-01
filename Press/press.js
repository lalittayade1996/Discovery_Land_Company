console.log("hello")
console.log(window)
window.addEventListener('DOMContentLoaded', function() {
    console.log('loaded')
    const left_btn = document.getElementById('leftbutton')
    const right_btn = document.getElementById('rightbutton')
    console.log(left_btn, right_btn)

    let arr = [{title:"A different event, load, should be used only to detect a fully-loaded page.", desc:"The original target for this event is the Document that has loaded. You can listen for this event on the Window interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the Document: DOMContentLoaded event.A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate."},
     {title:"tFor full details on this event please see the page on the Document: DOMContentLoaded event.", desc:"Document that has loaded. You can listen for this event on the Window interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the Document: DOMContentLoaded event.A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load"}, 
     {title: "You can listen for this event on the Window interface to handle it. ", desc:"You can listen for this event on the Window interface to handle it in the capture or bubbling phases. You can listen for this event on the Window interface to handle it in the capture or bubbling phases. You can listen for this event on the Window interface to handle it in the capture or bubbling phases. "},
      {title: "page on the Document: DOMContentLoaded event.A different event, load, should be used only to detect a fully-loaded page.", desc:"page on the Document: DOMContentLoaded event.A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use loadpage on the Document: DOMContentLoaded event.A different event, load, should be used only to detect a fully-loaded page."}];


    // let desc = document.getElementById('carousel-desc')
    let desc = document.getElementById('descreption')
    let title = document.getElementById('title')

    desc.innerHTML = arr[0].desc
    title.innerHTML = arr[0].title

    let count = 0


    left_btn.addEventListener('click', function() {
        console.log("i click left btn")
        if(count > 0) {
            count--
            title.innerHTML = arr[count].title
            desc.innerHTML = arr[count].desc
            console.log(title.innerHTML)
            console.log(desc.innerHTML)
        }
        else{count = arr.length-1
            title.innerHTML = arr[count].title
            desc.innerHTML = arr[count].desc
            console.log(title.innerHTML)
            console.log(desc.innerHTML)

        }
    })
    right_btn.addEventListener("click", function() {
        console.log("i click right btn")
        if(count < 3) {
            count++
            title.innerHTML = arr[count].title
            desc.innerHTML = arr[count].desc
            console.log(title.innerHTML)
            console.log(desc.innerHTML)
        }
        else{
            count=0
            title.innerHTML = arr[count].title
            desc.innerHTML = arr[count].desc
            console.log(title.innerHTML)
            console.log(desc.innerHTML)
        }
    })

})

 



