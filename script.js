
// var sanPhamLi = document.querySelector('.san-pham-li');

// sanPhamLi.addEventListener('click', function () {
//     var sanPhamList = this.querySelector('.san-pham-list');

//     // Kiểm tra xem danh sách sản phẩm đang ẩn hay hiển thị
//     if (sanPhamList.style.display === 'none' || sanPhamList.style.display === '') {
//         sanPhamList.style.display = 'block'; // Hiển thị danh sách sản phẩm
//     } else {
//         sanPhamList.style.display = 'none'; // Ẩn danh sách sản phẩm
//     }
// });


const listPic = document.querySelector('.list-pic')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
// console.log(listPic)
const imgs = document.getElementsByTagName('img')
let current =0
const length = imgs.length

const handleChangeSlide = () =>{
    if (current == length-5){
        current=0
        let width= imgs[1,2].offsetWidth
        // console.log(width)
        listPic.style.transform = `translateX(${width*-1*current}px)`
    }
    else{
        current++
        let width= imgs[0,1].offsetWidth
        // console.log(width)
        listPic.style.transform = `translateX(${width*-1*current}px)`
    }
}

let handleEventChangeSlide = setInterval(handleChangeSlide, 3000)

btnRight.addEventListener('click', () =>{
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000)
})

btnLeft.addEventListener('click', () =>{
    clearInterval(handleEventChangeSlide)
    if (current == 0){
        current=length-5
        let width= imgs[1,2].offsetWidth
        console.log(width)
        listPic.style.transform = `translateX(${width*-1*current}px)`
    }
    else{
        current--
        let width= imgs[0,1].offsetWidth
        console.log(width)
        listPic.style.transform = `translateX(${width*-1*current}px)`
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000)
})



