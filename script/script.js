

function slider() {

    const imgArr = [
        "https://picsum.photos/id/231/200/200",
        "https://picsum.photos/id/232/200/200",
        "https://picsum.photos/id/233/200/200",
        "https://picsum.photos/id/234/200/200",
        "https://picsum.photos/id/235/200/200",
        "https://picsum.photos/id/236/200/200",
        "https://picsum.photos/id/237/200/200"
    ]

    const bodyTotalPadding = 32
    const imgSliderTotalPadding = 32
    const imgWidth = 200
    const gapWidth = 16

    const neededScreenForTwoImages = 64 + (200 * 2) + (16 * 1)
    const neededScreenForThreeImages = 64 + (200 * 3) + (16 * 2)
    const neededScreenForFourImages = 64 + (200 * 4) + (16 * 3)
    const neededScreenForFiveImages = 64 + (200 * 5) + (16 * 4)
    const neededScreenForSixImages = 64 + (200 * 6) + (16 * 5)

    const totalImgs = imgArr.length
    let hiddenImgs

    const imgSlider = document.querySelector(".img-slider")

        if(window.innerWidth < neededScreenForTwoImages) {

            const imgShown = 1
            const totalGap = imgShown - 1
            hiddenImgs = totalImgs - imgShown

                adjustSlider(imgShown,totalGap)
        } 

        if(window.innerWidth >= neededScreenForTwoImages) {

            const imgShown = 2
            const totalGap = imgShown - 1
            hiddenImgs = totalImgs - imgShown

                adjustSlider(imgShown,totalGap)
        } 
        
        if(window.innerWidth >= neededScreenForThreeImages) {

            const imgShown = 3
            const totalGap = imgShown - 1
            hiddenImgs = totalImgs - imgShown

                adjustSlider(imgShown,totalGap)
        }

        if(window.innerWidth >= neededScreenForFourImages) {

            const imgShown = 4
            const totalGap = imgShown - 1
            hiddenImgs = totalImgs - imgShown

                adjustSlider(imgShown,totalGap)
        }

        if(window.innerWidth >= neededScreenForFiveImages) {

            const imgShown = 5
            const totalGap = imgShown - 1
            hiddenImgs = totalImgs - imgShown

                adjustSlider(imgShown,totalGap)
        }

        if(window.innerWidth >= neededScreenForSixImages) {

            const imgShown = 6
            const totalGap = imgShown - 1
            hiddenImgs = totalImgs - imgShown

                adjustSlider(imgShown,totalGap)
        }

        slideImages(hiddenImgs,imgWidth,gapWidth,totalImgs)
        adjustStamps(hiddenImgs + 1,0,imgWidth,gapWidth)

    function adjustSlider(imgShown,totalGap) {

        imgSlider.style.width = `${(imgWidth * imgShown) + imgSliderTotalPadding + (gapWidth * totalGap)}px`
    }

}

function slideImages(hiddenImgs,imgWidth,gapWidth,totalImgs) {

    const rightBtn = document.querySelector(".rightBtn")
    const leftBtn = document.querySelector(".leftBtn")
    const imgs = document.querySelectorAll("img")

    let time = 0

        rightBtn.addEventListener("click",function(){


            if( time !== hiddenImgs ) {

                time++

                    imgs.forEach(img=>{
                        img.style.transform = `translateX(-${(imgWidth + gapWidth) * time}px)`
                    })
            }

                // adjustStamps(hiddenImgs + 1,time)
        })

        leftBtn.addEventListener("click",function(){

            if(time !== 0) {

                time--
            
                    imgs.forEach(img=>{
                        img.style.transform = `translateX(-${(imgWidth + gapWidth) * time}px)`
                    })
            }

                // adjustStamps(hiddenImgs + 1,time)

        })
}

function adjustStamps(hiddenImages,time,imgWidth,gapWidth) {

    const stampsEl = document.querySelector(".stamps")
    let result = ""

        for( let i=1; i<=hiddenImages; i++) {

            result += `
                <span>${i}</span>
            `
        }

        stampsEl.innerHTML = result

    const spans = [...document.querySelectorAll("span")]
        spans[time].classList.add("active")

        spans.forEach(span=>span.addEventListener("click",function(){

            const spanNum = span.textContent
            time = spanNum - 1
            const imgs = document.querySelectorAll("img")

                imgs.forEach(img=>{
                    img.style.transform = `translateX(-${(imgWidth + gapWidth) * (spanNum - 1)}px)`
                    console.log("ok");
                })
        }))
}






slider()
