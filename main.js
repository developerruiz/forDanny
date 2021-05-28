let ventana1 = document.getElementById('ventana1');
let allVentanas = document.querySelectorAll('.ventana')


ventana1.className = ventana1.className + ' active'


for (let i = 0; i < allVentanas.length; i++) {
    allVentanas[i].addEventListener('click', function () {
        if (this.onclick == onclick) {
            console.log('click 1');
            // this.className = 'd-none'
            this.style.opacity = '0'
            this.style.transition = '.7s ease-in'
            this.style.marginTop = '100%'
            // this.style.display = 'none'


        }
        // if(allVentanas[1].onclick == onclick){
        //     console.log('click 2');
        // }
   


        // if (allVentanas[1].onclick == onclick) {
        //     console.log('click 2');
        //     allVentanas[1].className = 'd-none'
        //     allVentanas[2].className = 'ventana active'
        //    }
        // if (allVentanas[i].onclick == onclick) {
        //     allVentanas[i].style.display = 'none'
        //     allVentanas[2].classList = 'ventana active'
        // }
        // if (allVentanas[2].onclick == onclick) {
        //     allVentanas[2].style.display = 'none'
        //     allVentanas[3].classList = 'ventana active'
        // }
        // if (allVentanas[3].onclick == onclick) {
        //     allVentanas[3].style.display = 'none'
        //     allVentanas[2].classList = 'ventana active'
        // }
        // if (allVentanas[4].onclick == onclick) {
        //     allVentanas[4].style.display = 'none'
        //     allVentanas[5].classList = 'ventana active'
        // }
        // if (allVentanas[5].onclick == onclick) {
        //     allVentanas[5].style.display = 'none'
        //     allVentanas[6].classList = 'ventana active'
        // }
    })


}


// allVentanas[i].addEventListener('click', function () {
//     allVentanas[0].className = 'ventana'
//     allVentanas[1].className = allVentanas[1].className + ' active'

//     allVentanas[1].addEventListener('click', function () {
//         allVentanas[1].className = 'ventana'
//         allVentanas[2].className = allVentanas[2].className + ' active'
//         allVentanas[2].addEventListener


//         allVentanas[2].addEventListener('click', function () {
//             allVentanas[2].className = 'ventana'
//             allVentanas[3].className = allVentanas[3].className + ' active'
//             allVentanas[3].addEventListener

//         })
//     })

// })