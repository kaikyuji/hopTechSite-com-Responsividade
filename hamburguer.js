const menuList = document.querySelector('.menuList')

function dropdown(){
    if(getComputedStyle(menuList).display == 'none'){
        menuList.style.display = 'flex'
    }else{
        menuList.style.display = 'none'

    }
}